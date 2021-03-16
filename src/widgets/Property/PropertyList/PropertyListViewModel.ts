/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import esri = __esri;

import Widget from '@arcgis/core/widgets/Widget';
import FeatureTable from '@arcgis/core/widgets/FeatureTable';
import FieldColumnConfig from '@arcgis/core/widgets/FeatureTable/FieldColumnConfig';
import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

@subclass('app.widgets.PropertyList.PropertyListViewModel')
export default class PropertyListViewModel extends Widget {
	@property() view!: esri.MapView | esri.SceneView;
	@property() condoTable!: esri.FeatureLayer;
	@property() propertyLayer!: esri.FeatureLayer;

	@property() definitionExpression!: string;

	constructor(params?: any) {
		super(params);
		whenDefinedOnce(this, 'view', this.init.bind(this));
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
	getColumns = (layer: FeatureLayer): FieldColumnConfig[] => {
		let fieldConfigs: FieldColumnConfig[] = [];
		layer.fields.forEach((field) => {
			fieldConfigs.push(
				new FieldColumnConfig({
					name: field.name,
					label: field.alias,
					editable: false,
					visible: ['SITE_ADDRESS', 'OWNER', 'PIN_NUM', 'PIN_EXT', 'REID'].includes(field.name),
				}),
			);
		});
		const ext = fieldConfigs.find((fc) => {
			return fc.name === 'PIN_EXT';
		}) as esri.FieldColumnConfig;
		const pin = fieldConfigs.find((fc) => {
			return fc.name === 'PIN_NUM';
		}) as esri.FieldColumnConfig;
		const reid = fieldConfigs.find((fc) => {
			return fc.name === 'REID';
		}) as esri.FieldColumnConfig;
		const owner = fieldConfigs.find((fc) => {
			return fc.name === 'OWNER';
		}) as esri.FieldColumnConfig;
		const address = fieldConfigs.find((fc) => {
			return fc.name === 'SITE_ADDRESS';
		}) as esri.FieldColumnConfig;
		fieldConfigs = fieldConfigs.filter((fc) => {
			return !['SITE_ADDRESS', 'OWNER', 'PIN_NUM', 'PIN_EXT', 'REID'].includes(fc.name);
		});
		fieldConfigs.unshift(ext);
		fieldConfigs.unshift(pin);
		fieldConfigs.unshift(reid);
		fieldConfigs.unshift(owner);
		fieldConfigs.unshift(address);
		return fieldConfigs;
	};
	featureTableCreated = () => {
		this.condoTable.load().then(() => {
			const featureTable = new FeatureTable({
				container: 'featureTable',
				view: this.view,
				layer: this.condoTable,
				fieldConfigs: this.getColumns(this.condoTable),
			});
			featureTable.layer.definitionExpression = this.definitionExpression;
			this.watch('definitionExpression', () => {
				featureTable.layer.definitionExpression = this.definitionExpression;
			});
			featureTable.on('selection-change', (event: any) => {
				console.log(event);
				featureTable.clearSelection();
				if (event.added.length) {
					this.emit('feature-selected', event.added[0].feature);
					this.getProperty([event.added[0].feature.getAttribute('OBJECTID')]);
				}
			});
		});
	};
	init(view: esri.MapView | esri.SceneView) {
		console.log(view.scale);
	}
}
