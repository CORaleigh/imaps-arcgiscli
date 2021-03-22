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
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
@subclass('app.widgets.PropertySearch.PropertySearchViewModel')
export default class PropertySearchViewModel extends Accessor {
	@property() view!: __esri.MapView | __esri.SceneView;
	@property() propertyLayer!: __esri.FeatureLayer;
	@property() condoTable!: __esri.FeatureLayer;
	@property() addressTable!: __esri.FeatureLayer;
	@property() geometry!: __esri.Geometry;
	@property() where!: __esri.Geometry;

	featureWidget!: PropertyInfo;
	propertyList!: PropertyTable;
	highlights!: any;
	layerView!: FeatureLayerView;
	@property() maximized!: boolean;
	constructor(params?: any) {
		super(params);
		this.watch('geometry', this.geometryChanged);
		this.watch('maximized', () => {
			this.buildTabNav(document?.querySelector('calcite-tab-title[active]')?.getAttribute('name') as string);
		});
	}

	setSearchParams = (features: __esri.Graphic[]) => {
		const pins: string[] = features.map((feature: __esri.Graphic) => {
			return feature.getAttribute('PIN_NUM');
		});
		//	const url = new URL(document.URL);
		const searchParams = new URLSearchParams();
		if (pins) {
			searchParams.set('pins', pins.toString());

			window.history.replaceState({}, '', `${location.pathname}?${searchParams.toString()}`);
			//url.searchParams
		}
	};

	highlightProperties = (features: __esri.Graphic[]) => {
		console.log(features);
		const selectionLayer = this.view.map.findLayerById('selection-layer') as FeatureLayer;
		features.forEach((feature) => {
			feature.setAttribute('selected', 0);
		});
		if (features.length === 1) {
			features[0].setAttribute('selected', 1);
		}
		selectionLayer
			.queryFeatures({ where: '1=1', outFields: ['OBJECTID'], returnGeometry: false })
			.then((featureSet) => {
				selectionLayer.applyEdits({ deleteFeatures: featureSet.features }).then(() => {
					selectionLayer.applyEdits({ addFeatures: features });
					selectionLayer.refresh();
				});
			});
	};

	highlightSelected = (feature: __esri.Graphic) => {
		const selectionLayer = this.view.map.findLayerById('selection-layer') as FeatureLayer;
		selectionLayer.queryFeatures({ where: 'selected = 1' }).then((featureSet) => {
			featureSet.features.forEach((f) => {
				f.setAttribute('selected', 0);
			});
			selectionLayer.applyEdits({ updateFeatures: featureSet.features }).then(() => {
				selectionLayer
					.queryFeatures({ where: `PIN_NUM = '${feature.getAttribute('PIN_NUM')}'` })
					.then((featureSet) => {
						featureSet.features.forEach((f) => {
							f.setAttribute('selected', 1);
							selectionLayer.applyEdits({ updateFeatures: featureSet.features });
						});
					});
			});
		});
	};

	geometryChanged = (geometry: __esri.Geometry) => {
		this.propertyLayer
			.queryFeatures({
				geometry: geometry,
				outFields: ['OBJECTID', 'PIN_NUM'],
				returnGeometry: true,
				returnCentroid: true,
			})
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
							this.highlightProperties(featureSet.features);
							this.setSearchParams(featureSet.features);
						});
				}
			});
	};

	buildTabNav = (tab: string) => {
		const nav = document.querySelector('calcite-tab-nav') as HTMLElement;
		const parent = nav.parentElement;
		nav.remove();
		const newnav = document.createElement('calcite-tab-nav');
		newnav.setAttribute('slot', 'tab-nav');
		const tab1 = document.createElement('calcite-tab-title');
		tab1.setAttribute('name', 'list');

		tab1.textContent = 'List';
		const tab2 = document.createElement('calcite-tab-title');
		tab2.setAttribute('name', 'details');

		tab2.textContent = 'Details';

		if (tab === 'list') {
			tab1.setAttribute('active', '');
		}
		if (tab === 'details') {
			tab2.setAttribute('active', '');
		}

		newnav?.appendChild(tab1);
		newnav?.appendChild(tab2);
		parent?.appendChild(newnav);
	};

	activateTab = (tab: string) => {
		console.log(tab);
		const action = document.querySelector('calcite-action[text="Property Search"]');
		const panel = action?.closest('.panel')?.querySelector('calcite-panel[dismissed]');

		if (!action?.classList.contains('active')) {
			action?.closest('calcite-action.active')?.classList.remove('active');
			action?.classList.add('active');
			action?.closest('.panel')?.querySelector('calcite-panel:not([dismissed])')?.setAttribute('dismissed', '');
			panel?.removeAttribute('dismissed');
		}
		document?.querySelector('calcite-tab-title[disabled]')?.removeAttribute('disabled');

		this.buildTabNav(tab);
	};
	selectFeature = (feature: __esri.Graphic): void => {
		feature.layer = this.condoTable;
		this.featureWidget.propertyFeature = feature;
		this.highlightSelected(feature);
		this.activateTab('details');
	};
	viewDefined = (view: MapView) => {
		const selectionLayer: FeatureLayer = new FeatureLayer({
			source: [],
			editingEnabled: true,
			listMode: 'hide',
			geometryType: 'polygon',
			id: 'selection-layer',
			objectIdField: 'OBJECTID',
			fields: [
				{ name: 'OBJECTID', type: 'oid' },
				{ name: 'selected', type: 'small-integer' },
				{ name: 'PIN_NUM', type: 'string' },
			],
			renderer: new UniqueValueRenderer({
				field: 'selected',
				defaultSymbol: new SimpleFillSymbol({
					style: 'none',
					outline: {
						color: [255, 255, 0],
						width: 2,
					},
				}),
				uniqueValueInfos: [
					{
						value: 1,
						symbol: new SimpleFillSymbol({
							style: 'none',
							outline: {
								color: [255, 255, 0],
								width: 2,
							},
						}),
						label: 'single',
					},
					{
						value: 0,
						symbol: new SimpleFillSymbol({
							style: 'none',
							outline: {
								color: [0, 206, 209],
								width: 2,
							},
						}),
						label: 'multiple',
					},
				],
			}),
		});
		view.map.add(selectionLayer);
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

		whenDefinedOnce(this, 'where', (where: string) => {
			search.where = where;
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
				this.highlightProperties(properties);

				this.setSearchParams(properties);
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
