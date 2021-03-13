/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Accessor from '@arcgis/core/core/Accessor';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import PropertyInfo from '../PropertyInfo';
import PropertyList from '../PropertyList';
import PropertySearch from '../PropertySearch';
import FeatureLayerView from '@arcgis/core/views/layers/FeatureLayerView';
import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';
import MapView from '@arcgis/core/views/MapView';
@subclass('app.widgets.PropertySearch.PropertySearchViewModel')
export default class PropertySearchViewModel extends Accessor {
	@property() view!: __esri.MapView | __esri.SceneView;
	@property() propertyLayer!: __esri.FeatureLayer;
	@property() condoTable!: __esri.FeatureLayer;
	@property() addressTable!: __esri.FeatureLayer;
	@property() geometry!: __esri.Geometry;
	featureWidget!: PropertyInfo;
	propertyList!: PropertyList;
	highlights!: any;
	layerView!: FeatureLayerView;

	constructor(params?: any) {
		super(params);
		this.watch('geometry', this.geometryChanged);
	}
	geometryChanged = (geometry: __esri.Geometry) => {
		this.propertyLayer
			.queryFeatures({ geometry: geometry, outFields: ['OBJECTID'], returnGeometry: true, returnCentroid: true })
			.then((featureSet) => {
				if (featureSet.features.length) {
					this.view.goTo({ target: featureSet.features });

					const oids: number[] = featureSet.features.map((feature) => {
						return feature.getAttribute('OBJECTID');
					});
					this.propertyLayer
						.queryRelatedFeatures({
							relationshipId: this.propertyLayer.relationships[0]?.id,
							objectIds: oids,
							outFields: ['*'],
						})
						.then((result) => {
							const features: __esri.Graphic[] = [];
							oids.forEach((oid) => {
								result[oid].features.map((feature: __esri.Graphic) => {
									features.push(feature);
								});
							});
							const reloids: number[] = features.map((feature: __esri.Graphic) => {
								return feature.getAttribute('OBJECTID');
							});
							this.propertyList.definitionExpression = `OBJECTID in (${reloids.toString()})`;
							if (features.length === 1) {
								features[0].layer = this.condoTable;
								features[0].geometry = featureSet.features[0].geometry;
								this.selectFeature(features[0]);
							}
							this.highlights?.remove();
							this.highlights = this.layerView.highlight(featureSet.features);
						});
				}
			});
	};

	selectFeature = (feature: __esri.Graphic): void => {
		console.log(feature);
		feature.layer = this.condoTable;
		this.featureWidget.propertyFeature = feature;
		document.querySelector(`calcite-tab-title[name="details"]`)?.removeAttribute('disabled');
		document.querySelector(`calcite-tab-title[name="details"]`)?.dispatchEvent(new MouseEvent('click'));
		this.propertyList.definitionExpression = `OBJECTID = ${feature.getAttribute('OBJECTID')}`;
	};
	viewDefined = (view: MapView) => {
		const search = new PropertySearch({
			container: 'searchDiv',
			view: view,
			propertyLayer: this.propertyLayer,
			condoTable: this.condoTable,
			addressTable: this.addressTable,
		});

		search.on('feature-selected', this.selectFeature);
		search.on('features-selected', (features: __esri.Graphic[]) => {
			const oids: number[] = features.map((feature) => {
				return feature.getAttribute('OBJECTID');
			});
			this.propertyList.definitionExpression = `OBJECTID in (${oids.toString()})`;
			document.querySelector(`calcite-tab-title[name="list"]`)?.dispatchEvent(new MouseEvent('click'));
		});

		view.whenLayerView(this.propertyLayer).then((layerView) => {
			this.layerView = layerView;
			this.featureWidget.view = view;
			this.propertyList = this.tableCreated();
			this.propertyList.view = view;
			this.propertyList.propertyLayer = this.propertyLayer;
			this.propertyList.condoTable = this.condoTable;
			this.propertyList.definitionExpression = 'OBJECTID IS NULL';
			search.on('properties-selected', (properties) => {
				this.highlights?.remove();
				this.highlights = layerView.highlight(properties);
			});
		});
	};
	searchDivCreated = () => {
		whenDefinedOnce(this, 'view', this.viewDefined.bind(this));
	};
	featureDivCreated = () => {
		this.featureWidget = new PropertyInfo({ container: 'featureDiv' });
	};

	tableCreated = (): PropertyList => {
		this.propertyList = new PropertyList({
			container: 'table',
		});

		return this.propertyList;
	};
	init(view: __esri.MapView | __esri.SceneView) {
		console.log(view.scale);
	}
}
