/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import esri = __esri;

import Widget from '@arcgis/core/widgets/Widget';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';
import LayerSearchSource from '@arcgis/core/widgets/Search/LayerSearchSource';
import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';
import * as promiseUtils from '@arcgis/core/core/promiseUtils';

import Search from '@arcgis/core/widgets/Search';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
@subclass('app.widgets.PropertySearch.PropertySearchViewModel')
export default class PropertySearchViewModel extends Widget {
	@property() view!: esri.MapView | esri.SceneView;
	@property() propertyLayer!: esri.FeatureLayer;
	@property() condoTable!: esri.FeatureLayer;
	@property() addressTable!: esri.FeatureLayer;
	searchWidget!: Search;
	constructor(params?: any) {
		super(params);
		whenDefinedOnce(this, 'view', this.init.bind(this));
	}
	getSuggestions = (
		params: any,
		name: string,
		layer: esri.FeatureLayer,
		outFields: string[],
		orderByFields: string[],
		searchFields: string[],
		startsWith: boolean,
	) => {
		const whereArray: string[] = [];
		searchFields.forEach((field) => {
			if (startsWith) {
				whereArray.push(`${field} LIKE '${params.suggestTerm.toUpperCase()}%'`);
			} else {
				whereArray.push(`${field} LIKE '%${params.suggestTerm.toUpperCase()}%'`);
			}
		});
		return layer
			.queryFeatures({
				returnDistinctValues: true,
				outFields: outFields,
				returnGeometry: false,
				orderByFields: orderByFields,
				where: whereArray.join(' OR '),
			})
			.then((results) => {
				return results.features.map((feature) => {
					return {
						key: name,
						text: feature.getAttribute(outFields[0]),
						sourceIndex: params.sourceIndex,
					};
				});
			});
	};

	getLayerSource = (
		placeholder: string,
		name: string,
		table: FeatureLayer,
		outFields: string[],
		orderByFields: string[],
		searchFields: string[],
		startsWith: boolean,
		resultFields: string[],
	) => {
		return new LayerSearchSource({
			placeholder: placeholder,
			name: name,
			maxResults: 10,
			getSuggestions: (params: any) => {
				return this.getSuggestions(params, name, table, outFields, orderByFields, searchFields, startsWith);
			},
			getResults: (params: any) => {
				return table
					.queryFeatures({
						where: `${orderByFields[0]} = '${params.suggestResult.text.toUpperCase()}'`,
						outFields: resultFields,
					})
					.then((results) => {
						return results.features.map((feature) => {
							return {
								feature: feature,
								name: name,
							};
						});
					}) as any;
			},
		});
	};

	getProperty = (oids: number[]): Promise<esri.Graphic[]> => {
		return promiseUtils.create((resolve) => {
			const relationship = this.condoTable.relationships.find((r) => {
				return r.name === 'CONDO_PROPERTY';
			});
			this.condoTable
				.queryRelatedFeatures({
					relationshipId: relationship?.id,
					objectIds: oids,
					outFields: ['OBJECTID', 'REID'],
					returnGeometry: false,
				})
				.then((result) => {
					const oids: number[] = [];
					for (const key in result) {
						result[key].features.forEach((feature: esri.Graphic) => {
							oids.push(feature.getAttribute('OBJECTID'));
						});
					}
					this.propertyLayer
						.queryFeatures({
							objectIds: oids,
							outFields: ['*'],
							returnGeometry: true,
							outSpatialReference: { wkid: 102100 },
						})
						.then((result) => {
							this.view.goTo(result.features);
							resolve(result.features);
						});
				});
		});
	};
	searchRelatedCondos = (oids: number[]): void => {
		const relationship = this.addressTable.relationships.find((r) => {
			return r.name === 'ADDRESSES_CONDO';
		});
		const params: any = { outFields: ['*'], objectIds: oids, relationshipId: relationship?.id };

		this.addressTable.queryRelatedFeatures(params).then((result) => {
			const oids: number[] = [];
			const features: esri.Graphic[] = [];
			for (const key in result) {
				result[key].features.forEach((feature: esri.Graphic) => {
					oids.push(feature.getAttribute('OBJECTID'));
					features.push(feature);
				});
			}
			this.getProperty(oids).then((properties) => {
				this.emit('properties-selected', properties);

				if (features.length > 1) {
					this.emit('features-selected', features);
				}
				if (features.length === 1) {
					const feature = features[0];
					feature.geometry = properties[0].geometry;
					console.log(feature.geometry);
					this.emit('feature-selected', feature);
				}
			});
		});
	};
	searchCondos = (where: string, oids: number[]): void => {
		console.log(where, oids);
		const params: any = { outFields: ['*'] };
		if (where != '') {
			params.where = where;
		} else {
			params.objectIds = oids;
		}
		this.condoTable.queryFeatures(params).then((result) => {
			const oids: number[] = [];
			result.features.forEach((feature: esri.Graphic) => {
				oids.push(feature.getAttribute('OBJECTID'));
			});
			this.getProperty(oids).then((properties: esri.Graphic[]) => {
				if (result.features.length > 1) {
					this.emit('features-selected', result.features);
				}
				if (result.features.length === 1) {
					const feature = result.features[0];
					feature.geometry = properties[0].geometry;
					console.log(feature.geometry);
					this.emit('feature-selected', feature);
				}
			});
		});
	};
	searchResultSelected = (layer: FeatureLayer, source: string, results: any, term: string) => {
		if (!layer && source === 'Owner') {
			layer = this.condoTable;
		}
		if (!layer && ['Site Address', 'Street Name'].includes(source)) {
			layer = this.addressTable;
		}
		const oids: number[] = [];
		results.forEach((r: any) => {
			oids.push(r.feature.getAttribute('OBJECTID'));
		});
		let where = '';
		console.log(layer);

		if (layer?.layerId === 4) {
			where = `${source === 'Street Name' ? 'FULL_STREET_NAME' : 'SITE_ADDRESS'} = '${term}'`;
			this.searchRelatedCondos(oids);
		} else {
			this.searchCondos(where, oids);
		}
	};
	wildcardSearch = (where: string, condoTable: FeatureLayer) => {
		const oids: number[] = [];
		condoTable.queryFeatures({ where: where, outFields: ['*'] }).then((result) => {
			result.features.forEach((f) => {
				oids.push(f.getAttribute('OBJECTID'));
			});
			this.getProperty(oids);
			if (result.features.length > 1) {
				this.emit('features-selected', result.features);
			}
			if (result.features.length === 1) {
				this.emit('feature-selected', result.features[0]);
			}
			document.querySelector('.esri-search--show-suggestions')?.classList.remove('esri-search--show-suggestions');
		});
	};
	getWildcardSearchWhere = (searchFields: string[], term: string): string => {
		let where = '';
		if (!searchFields.length) {
			where = `OWNER like '%${term.toUpperCase()}%' OR REID like '${term.toUpperCase()}%' OR PIN_NUM like '${term.toUpperCase()}%'`;
		} else {
			if (searchFields.includes('OWNER')) {
				where = `OWNER like '_%${term.toUpperCase()}%'`;
			}
			if (searchFields.includes('PIN_NUM')) {
				where = `PIN_NUM like '%${term.toUpperCase()}%'`;
			}
			if (searchFields.includes('REID')) {
				where = `REID like '%${term.toUpperCase()}%'`;
			}
		}
		return where;
	};

	searchComplete = (event: esri.SearchSearchCompleteEvent): void => {
		if (!this.searchWidget.viewModel.selectedSuggestion) {
			let searchFields: string[] = [];
			if (this.searchWidget.activeSource) {
				searchFields = (this.searchWidget.activeSource as LayerSearchSource)?.searchFields;
			}
			const where = this.getWildcardSearchWhere(searchFields, event.searchTerm);
			this.wildcardSearch(where, this.condoTable);
		}
		if (event.numResults) {
			this.searchResultSelected(
				(event.results[0].source as LayerSearchSource).layer as FeatureLayer,
				event.results[0].source.name,
				event.results[0].results,
				event.searchTerm,
			);
		}
	};

	searchWidgetCreated = () => {
		this.searchWidget = new Search({
			container: 'searchWidget',
			view: this.view,
			allPlaceholder: 'Address, owner, PIN, or REID',
			includeDefaultSources: false,
			popupEnabled: false,
			sources: [
				this.getLayerSource(
					'example: 222 W HARGETT ST',
					'Site Address',
					this.addressTable,
					['ADDRESS'],
					['ADDRESS'],
					['ADDRESS'],
					true,
					['ADDRESS', 'REA_REID', 'OBJECTID'],
				),
				this.getLayerSource(
					'example: SMITH, JOHN',
					'Owner',
					this.condoTable,
					['OWNER'],
					['OWNER'],
					['OWNER'],
					false,
					['OWNER', 'OBJECTID'],
				),
				this.getLayerSource('PIN', 'PIN', this.condoTable, ['PIN_NUM'], ['PIN_NUM'], ['PIN_NUM'], true, [
					'PIN_NUM',
					'OBJECTID',
				]),
				this.getLayerSource('REID', 'REID', this.condoTable, ['REID'], ['REID'], ['REID'], true, [
					'REID',
					'OBJECTID',
				]),
				this.getLayerSource(
					'example: W HARGETT ST',
					'Street Name',
					this.addressTable,
					['STREET', 'ADDR_LIST'],
					['STREET'],
					['STREET', 'STREET_NODIR'],
					false,
					['STREET', 'REA_REID', 'OBJECTID'],
				),
			],
		});
		this.searchWidget.on('search-complete', this.searchComplete);
	};

	init(view: esri.MapView | esri.SceneView) {
		console.log(view.scale);
	}
}
