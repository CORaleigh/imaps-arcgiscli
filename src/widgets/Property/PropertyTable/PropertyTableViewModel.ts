/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import esri = __esri;

import Widget from '@arcgis/core/widgets/Widget';
import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { watch, whenDefinedOnce } from '@arcgis/core/core/watchUtils';
import ButtonMenu from '@arcgis/core/widgets/FeatureTable/Grid/support/ButtonMenu';
import { GridColumnElement } from '@vaadin/vaadin-grid';
@subclass('app.widgets.PropertyTable.PropertyTableViewModel')
export default class PropertyTableViewModel extends Widget {
	@property() view!: esri.MapView | esri.SceneView;
	@property() condoTable!: esri.FeatureLayer;
	@property() propertyLayer!: esri.FeatureLayer;

	@property() definitionExpression!: string;
	@property() grid: any;
	@property() count = 0;
	constructor(params?: any) {
		super(params);
		whenDefinedOnce(this, 'view', this.init.bind(this));
		watch(this, 'definitionExpression', this.definitionUpdated.bind(this));
	}
	getProperty = (oids: number[]): void => {
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
						//this.emit('properties-selected', result.features);
					});
			});
	};

	definitionUpdated = (definitionExpression: string) => {
		if (this.grid) {
			document.querySelector('.esri-feature-table__loader')?.classList.add('loading');

			this.condoTable.queryFeatures({ where: definitionExpression, outFields: ['*'] }).then((featureSet) => {
				this.grid.items = featureSet.features;
				this.count = featureSet.features.length;
				document.querySelector('.esri-feature-table__loader')?.classList.remove('loading');
			});
		}
	};

	featureTableCreated = () => {
		this.condoTable.load().then(() => {
			this.condoTable.popupTemplate.fieldInfos.forEach((field) => {
				if (['SITE_ADDRESS', 'OWNER', 'PIN_NUM', 'PIN_EXT', 'REID'].includes(field.fieldName)) {
					field.visible = true;
				} else {
					field.visible = false;
				}
			});

			customElements.whenDefined('vaadin-grid').then(() => {
				this.createColumns();
				const columns = document.querySelectorAll('vaadin-grid-column');

				new ButtonMenu({
					iconClass: 'esri-icon-handle-horizontal',
					container: 'menuButton',
					items: [
						{
							label: 'Export',
							clickFunction: this.exportTable,
						},
						{
							label: 'Show/Hide Columns',
							iconClass: 'esri-icon-right',
							autoCloseMenu: false,
							items: this.condoTable.popupTemplate.fieldInfos
								.filter((field) => {
									return !['OBJECTID', 'GlobalID'].includes(field.fieldName);
								})
								.map((field) => {
									return {
										label: field.label,
										selectionEnabled: true,
										selected: field.visible,
										iconClass: 'esri-icon-check-mark',
										clickFunction: (event) => {
											const fieldInfo = this.condoTable.popupTemplate.fieldInfos.find((field) => {
												return field.label === event.item.label;
											}) as esri.FieldInfo;
											fieldInfo.visible = event.item.selected;
											//this.createColumns();

											const column = Array.from(columns)?.find((column: GridColumnElement) => {
												console.log(column.getAttribute('name'));
												return column?.getAttribute('name') === fieldInfo.fieldName;
											}) as GridColumnElement;
											column.hidden = !event.item.selected;
										},
									};
								}),
							clickFunction: function (event) {
								event.item.iconClass = 'esri-icon-down';
							},
						},
					],
				});

				columns.forEach((column) => {
					column.headerRenderer = (root: any) => {
						root.innerHTML = `<vaadin-grid-sorter path="${column.path}">${column.header}</vaadin-grid-sorter>`;
					};
				});
			});

			this.grid = document.querySelector('vaadin-grid');

			this.grid.addEventListener('active-item-changed', (event: any) => {
				const item = event.detail.value;
				this.grid.selectedItems = item ? [item] : [];
				this.emit('feature-selected', item as esri.Graphic);
				this.getProperty([item.attributes['OBJECTID']]);
			});
		});
	};
	createColumns = (): void => {
		this.grid.innerHTML = '';
		this.condoTable.popupTemplate.fieldInfos
			.filter((field) => {
				return !['OBJECTID', 'GlobalID'].includes(field.fieldName);
			})
			.forEach((field) => {
				const column = document.createElement('vaadin-grid-column');

				column.path = `attributes.${field.fieldName}`;
				column.header = field.label;
				column.width = '12em';
				column.setAttribute('name', field.fieldName);
				column.id = `${field.fieldName.toLowerCase()}_column`;
				column.setAttribute('key', `${field.fieldName.toLowerCase()}_column`);
				column.hidden = !field.visible;
				column.renderer = (root: any, column: any, rowData: any) => {
					// Check if there is a container generated with the previous renderer call to update its content instead of recreation
					if (!root.firstElementChild) {
						root.innerHTML = '<div style="white-space: normal"></div>';
					}
					root.firstElementChild.textContent = rowData.item.attributes[field.fieldName];
					if (field.fieldName.includes('DATE')) {
						if (rowData.item.attributes[field.fieldName]) {
							root.firstElementChild.textContent = new Date(
								rowData.item.attributes[field.fieldName],
							).toLocaleDateString();
						}
					}
					if (field.fieldName.includes('VAL') || field.fieldName.includes('PRICE')) {
						if (rowData.item.attributes[field.fieldName]) {
							root.firstElementChild.textContent = `$${rowData.item.attributes[
								field.fieldName
							].toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
						}
					}
				};
				this.grid.append(column);
			});
	};
	exportTable = (): void => {
		this.condoTable.queryFeatures({ where: this.definitionExpression, outFields: ['*'] }).then((result) => {
			let csv = '';
			result.fields.forEach((field) => {
				csv += `${field.alias},`;
			});
			csv += '\r\n';
			result.features.forEach((feature) => {
				for (const key in feature.attributes) {
					if (feature.attributes[key]) {
						if (key.toLowerCase().includes('date')) {
							csv += `"${new Date(feature.attributes[key]).toDateString()}",`;
						} else if (key.toLowerCase().includes('acres')) {
							csv += `"${parseFloat(feature.attributes[key]).toFixed(2)}",`;
						} else {
							csv += `"${feature.attributes[key]}",`;
						}
					} else {
						csv += `"",`;
					}
				}
				csv += '\r\n';
			});
			let datestr = new Date().toISOString();
			datestr = datestr.replaceAll(':', '').replaceAll('-', '');
			const exportedFilenmae = `imaps_export_${datestr}.csv`;

			const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
			const link = document.createElement('a');
			if (link.download !== undefined) {
				const url = URL.createObjectURL(blob);
				link.setAttribute('href', url);
				link.setAttribute('download', exportedFilenmae);
				link.style.visibility = 'hidden';
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		});
	};
	init(view: esri.MapView | esri.SceneView) {
		console.log(view.scale);
	}
}
