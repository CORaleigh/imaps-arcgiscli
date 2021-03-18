/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Accessor from '@arcgis/core/core/Accessor';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import PropertyInfo from '../PropertyInfo';
//import PropertyList from '../PropertyList';
import PropertySearch from '../PropertySearch';
import FeatureLayerView from '@arcgis/core/views/layers/FeatureLayerView';
import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';
import MapView from '@arcgis/core/views/MapView';
import PropertyTable from '../PropertyTable';
@subclass('app.widgets.PropertySearch.PropertySearchViewModel')
export default class PropertySearchViewModel extends Accessor {
	@property() view!: __esri.MapView | __esri.SceneView;
	@property() propertyLayer!: __esri.FeatureLayer;
	@property() condoTable!: __esri.FeatureLayer;
	@property() addressTable!: __esri.FeatureLayer;
	@property() geometry!: __esri.Geometry;
	featureWidget!: PropertyInfo;
	propertyList!: PropertyTable;
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
							if (features.length > 1) {
								const action = document.querySelector('calcite-action[text="Property Search"]');
								(action as HTMLElement).click();

								this.activateTab('list');
							}
							this.highlights?.remove();
							this.highlights = this.layerView.highlight(featureSet.features);
						});
				}
			});
	};

	activateTab = (tab: string) => {
		const action = document.querySelector('calcite-action[text="Property Search"]');
		if (!action?.classList.contains('active')) {
			action?.closest('calcite-action.active')?.classList.remove('active');
			action?.classList.add('active');
			const panel = action?.closest('.panel')?.querySelector('calcite-panel[dismissed]');
			action?.closest('.panel')?.querySelector('calcite-panel:not([dismissed])')?.setAttribute('dismissed', '');
			panel?.removeAttribute('dismissed');
		}

		const detailsTitle = document.querySelector(`calcite-tab-title[name="details"]`);
		const detailsTab = document.getElementById('detailsTab');
		const listTitle = document.querySelector(`calcite-tab-title[name="list"]`);
		const listTab = document.getElementById('listTab');
		if (tab === 'list') {
			listTab?.setAttribute('active', '');
			listTitle?.setAttribute('active', '');
			detailsTab?.removeAttribute('active');
			detailsTitle?.removeAttribute('active');
		}
		if (tab === 'details') {
			detailsTab?.setAttribute('active', '');
			detailsTitle?.setAttribute('active', '');
			listTab?.removeAttribute('active');
			listTitle?.removeAttribute('active');
		}
		const left = detailsTitle?.hasAttribute('active') ? '198px' : '20px';
		const indicator = detailsTab?.parentElement
			?.querySelector('calcite-tab-nav')
			?.shadowRoot?.querySelector('.tab-nav-active-indicator');
		(indicator as HTMLElement).style.left = left;
	};

	selectFeature = (feature: __esri.Graphic): void => {
		feature.layer = this.condoTable;
		this.featureWidget.propertyFeature = feature;

		this.activateTab('details');
		//document.querySelector(`calcite-tab-title[name="details"]`)?.dispatchEvent(new MouseEvent('click'));
		//document.querySelector(`calcite-tab-title[name="details"]`)?.dispatchEvent(new TouchEvent('touchstart'));

		//this.propertyList.definitionExpression = `OBJECTID = ${feature.getAttribute('OBJECTID')}`;
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
			const action = document.querySelector('calcite-action[text="Property Search"]');
			(action as HTMLElement).click();
			this.activateTab('list');
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

	tableCreated = (): PropertyTable => {
		this.propertyList = new PropertyTable({
			container: 'table',
		});
		this.propertyList.on('feature-selected', this.selectFeature);

		return this.propertyList;
	};
}
