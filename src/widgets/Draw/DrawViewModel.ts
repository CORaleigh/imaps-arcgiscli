/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import esri = __esri;

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';
import Widget from '@arcgis/core/widgets/Widget';
import Sketch from '@arcgis/core/widgets/Sketch';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
import Color from '@arcgis/core/Color';

@subclass('app.widgets.Draw.DrawViewModel')
export default class DrawViewModel extends Widget {
	@property() view!: esri.MapView | esri.SceneView;
	@property() label = '';
	@property() fill!: string;
	@property() outline!: string;

	constructor(params?: any) {
		super(params);
	}

	sketchWidgetCreated = () => {
		whenDefinedOnce(this, 'view', this.init.bind(this));
	};

	init(view: esri.MapView | esri.SceneView): void {
		const graphics = new GraphicsLayer({ listMode: 'hide' });
		const labelClass = new LabelClass({
			labelExpressionInfo: { expression: '$feature.label' },
			symbol: {
				type: 'text', // autocasts as new TextSymbol()
				color: 'black',
				haloSize: 1,
				haloColor: 'white',
			} as any,
		});
		const points = new FeatureLayer({
			source: [],
			fields: [
				{ type: 'oid', name: 'OBJECTID' },
				{ type: 'string', name: 'label' },
			],
			objectIdField: 'OBJECTID',
			geometryType: 'point',
			listMode: 'hide',
			renderer: { type: 'simple', symbol: { type: 'simple-marker', color: [255, 255, 255, 1] } } as any,
			labelingInfo: [labelClass],
		});
		const lines = new FeatureLayer({
			source: [],
			fields: [
				{ type: 'oid', name: 'OBJECTID' },
				{ type: 'string', name: 'label' },
			],
			objectIdField: 'OBJECTID',
			geometryType: 'polyline',
			listMode: 'hide',
			labelingInfo: [labelClass],
		});
		const polygons = new FeatureLayer({
			source: [],
			fields: [
				{ type: 'oid', name: 'OBJECTID' },
				{ type: 'string', name: 'label' },
			],
			objectIdField: 'OBJECTID',
			geometryType: 'polygon',
			listMode: 'hide',
			labelingInfo: [labelClass],
		});
		this.view.map.addMany([points, lines, polygons, graphics]);

		document.querySelectorAll('calcite-color-picker').forEach((picker) => {
			picker.addEventListener(
				'calciteColorChange',
				(e: any) => {
					this.set(e.target.name, e.target.value);
					const color = Color.fromHex(e.target.value);
					if (e.target.name === 'fill') {
						((points.renderer as esri.SimpleRenderer).symbol as esri.SimpleMarkerSymbol).color = color;
						((polygons.renderer as esri.SimpleRenderer).symbol as esri.SimpleFillSymbol).color = color;
					}
					if (e.target.name === 'outline') {
						((points.renderer as esri.SimpleRenderer)
							.symbol as esri.SimpleMarkerSymbol).outline.color = color;
						((polygons.renderer as esri.SimpleRenderer)
							.symbol as esri.SimpleFillSymbol).outline.color = color;
						((lines.renderer as esri.SimpleRenderer).symbol as esri.SimpleLineSymbol).color = color;
					}
				},
				{ passive: true },
			);
		});

		const sketch = new Sketch({ view: view, container: 'sketchWidget', layer: graphics });
		sketch.on('create', (event: __esri.SketchCreateEvent) => {
			if (event.state === 'start') {
				this.view.popup.autoOpenEnabled = false;
			}
			if (event.state === 'complete') {
				if (event.graphic.geometry.type === 'point') {
					event.graphic.setAttribute('label', this.label);
					points.applyEdits({ addFeatures: [event.graphic] }).then(() => {
						points.refresh();
					});
				}
				if (event.graphic.geometry.type === 'polyline') {
					event.graphic.setAttribute('label', this.label);
					lines.applyEdits({ addFeatures: [event.graphic] }).then(() => {
						lines.refresh();
					});
				}
				if (event.graphic.geometry.type === 'polygon') {
					event.graphic.setAttribute('label', this.label);
					polygons.applyEdits({ addFeatures: [event.graphic] }).then(() => {
						polygons.refresh();
					});
				}
				this.view.popup.autoOpenEnabled = true;
			}
		});
		//@ts-ignore
		sketch.on('update', (event: __esri.SketchUpdateEvent) => {
			if (event.state === 'complete') {
				if (event.graphics[0].geometry.type === 'point') {
					points.applyEdits({ updateFeatures: event.graphics }).then(() => {
						points.refresh();
					});
				}
				if (event.graphics[0].geometry.type === 'polyline') {
					lines.applyEdits({ updateFeatures: event.graphics }).then(() => {
						lines.refresh();
					});
				}
				if (event.graphics[0].geometry.type === 'polygon') {
					polygons.applyEdits({ updateFeatures: event.graphics }).then(() => {
						polygons.refresh();
					});
				}
			}
		});
		sketch.on('delete', (event: __esri.SketchDeleteEvent) => {
			if (event.graphics[0].geometry.type === 'point') {
				points.applyEdits({ deleteFeatures: event.graphics }).then(() => {
					points.refresh();
				});
			}
			if (event.graphics[0].geometry.type === 'polyline') {
				lines.applyEdits({ deleteFeatures: event.graphics }).then(() => {
					lines.refresh();
				});
			}
			if (event.graphics[0].geometry.type === 'polygon') {
				polygons.applyEdits({ deleteFeatures: event.graphics }).then(() => {
					polygons.refresh();
				});
			}
		});
	}
}
