/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import esri = __esri;

import Widget from '@arcgis/core/widgets/Widget';
import FeatureTable from '@arcgis/core/widgets/FeatureTable';
import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';

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
	featureTableCreated = () => {
		const featureTable = new FeatureTable({
			container: 'featureTable',
			view: this.view,
			layer: this.condoTable,
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
	};
	init(view: esri.MapView | esri.SceneView) {
		console.log(view.scale);
	}
}
