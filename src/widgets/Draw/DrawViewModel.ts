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
	@property() fill = '#FFFFFF';
	@property() outline = '#FFFFFF';
	@property() fillOpacity = 0.5;
	@property() outlineOpacity = 1;
	@property() outlineWidth = 1;
	@property() geometryType!: string;
	@property() pointFillEnabled = true;
	@property() polygonFillEnabled = true;

	sketch!: Sketch;
	constructor(params?: any) {
		super(params);
	}

	sketchWidgetCreated = () => {
		whenDefinedOnce(this, 'view', this.init.bind(this));
	};
	pointFillCreated = (picker: Element) => {
		picker.addEventListener('calciteColorPickerChange', (e: any) => {
			const points: esri.FeatureLayer = this.view.map.findLayerById('sketch-points') as esri.FeatureLayer;
			this.fill = e.target.value;
			const color = Color.fromHex(this.fill);
			color.a = this.outlineOpacity;
			const pointRenderer = (points.renderer as esri.SimpleRenderer).clone();
			(pointRenderer.symbol as esri.SimpleMarkerSymbol).color = color;
			points.renderer = pointRenderer;
		});
	};
	polygonFillCreated = (picker: Element) => {
		picker.addEventListener('calciteColorPickerChange', (e: any) => {
			const polygons: esri.FeatureLayer = this.view.map.findLayerById('sketch-polygons') as esri.FeatureLayer;
			this.fill = e.target.value;
			const color = Color.fromHex(this.fill);
			color.a = this.outlineOpacity;
			const polygonRender = (polygons.renderer as esri.SimpleRenderer).clone();
			(polygonRender.symbol as esri.SimpleFillSymbol).color = color;
			polygons.renderer = polygonRender;
		});
	};
	pointOutlineCreated = (picker: Element) => {
		picker.addEventListener('calciteColorPickerChange', (e: any) => {
			const points: esri.FeatureLayer = this.view.map.findLayerById('sketch-points') as esri.FeatureLayer;
			this.outline = e.target.value;
			const color = Color.fromHex(this.outline);
			color.a = this.outlineOpacity;
			const pointRenderer = (points.renderer as esri.SimpleRenderer).clone();
			(pointRenderer.symbol as esri.SimpleMarkerSymbol).outline.color = color;
			points.renderer = pointRenderer;
		});
	};
	lineOutlineCreated = (picker: Element) => {
		picker.addEventListener('calciteColorPickerChange', (e: any) => {
			const lines: esri.FeatureLayer = this.view.map.findLayerById('sketch-lines') as esri.FeatureLayer;
			this.outline = e.target.value;
			const color = Color.fromHex(this.outline);
			color.a = this.outlineOpacity;
			const lineRenderer = (lines.renderer as esri.SimpleRenderer).clone();
			lineRenderer.symbol.color = color;
			lines.renderer = lineRenderer;
		});
	};
	polygonOutlineCreated = (picker: Element) => {
		picker.addEventListener('calciteColorPickerChange', (e: any) => {
			const polygons: esri.FeatureLayer = this.view.map.findLayerById('sketch-polygons') as esri.FeatureLayer;
			this.outline = e.target.value;
			const color = Color.fromHex(this.outline);
			color.a = this.outlineOpacity;
			const polygonRender = (polygons.renderer as esri.SimpleRenderer).clone();
			(polygonRender.symbol as esri.SimpleFillSymbol).outline.color = color;
			polygons.renderer = polygonRender;
		});
	};
	pointFillOpacityCreated = (slider: Element) => {
		const points: esri.FeatureLayer = this.view.map.findLayerById('sketch-points') as esri.FeatureLayer;

		slider.addEventListener(
			'calciteSliderChange',
			(e: any) => {
				this.fillOpacity = parseFloat(e.target.value);
				const pointRenderer = (points.renderer as esri.SimpleRenderer).clone();
				pointRenderer.symbol.color.a = this.fillOpacity;
				points.renderer = pointRenderer;
			},
			{ passive: true },
		);
	};
	polygonFillOpacityCreated = (slider: Element) => {
		const polygons: esri.FeatureLayer = this.view.map.findLayerById('sketch-polygons') as esri.FeatureLayer;

		slider.addEventListener(
			'calciteSliderChange',
			(e: any) => {
				this.fillOpacity = parseFloat(e.target.value);
				const polygonRender = (polygons.renderer as esri.SimpleRenderer).clone();
				polygonRender.symbol.color.a = this.fillOpacity;
				polygons.renderer = polygonRender;
			},
			{ passive: true },
		);
	};
	pointOutlineOpacityCreated = (slider: Element) => {
		const points: esri.FeatureLayer = this.view.map.findLayerById('sketch-points') as esri.FeatureLayer;

		slider.addEventListener(
			'calciteSliderChange',
			(e: any) => {
				this.outlineOpacity = parseFloat(e.target.value);
				const pointRenderer = (points.renderer as esri.SimpleRenderer).clone();

				(pointRenderer.symbol as esri.SimpleMarkerSymbol).outline.color.a = this.outlineOpacity;

				points.renderer = pointRenderer;
			},
			{ passive: true },
		);
	};
	lineOutlineOpacityCreated = (slider: Element) => {
		const lines: esri.FeatureLayer = this.view.map.findLayerById('sketch-lines') as esri.FeatureLayer;

		slider.addEventListener(
			'calciteSliderChange',
			(e: any) => {
				this.outlineOpacity = parseFloat(e.target.value);
				const lineRenderer = (lines.renderer as esri.SimpleRenderer).clone();

				lineRenderer.symbol.color.a = this.outlineOpacity;

				lines.renderer = lineRenderer;
			},
			{ passive: true },
		);
	};
	polygonOutlineOpacityCreated = (slider: Element) => {
		const polygons: esri.FeatureLayer = this.view.map.findLayerById('sketch-polygons') as esri.FeatureLayer;

		slider.addEventListener(
			'calciteSliderChange',
			(e: any) => {
				this.outlineOpacity = parseFloat(e.target.value);
				const polygonRender = (polygons.renderer as esri.SimpleRenderer).clone();

				(polygonRender.symbol as esri.SimpleMarkerSymbol).outline.color.a = this.outlineOpacity;

				polygons.renderer = polygonRender;
			},
			{ passive: true },
		);
	};
	pointOutlineWidthCreated = (slider: Element) => {
		const points: esri.FeatureLayer = this.view.map.findLayerById('sketch-points') as esri.FeatureLayer;

		slider.addEventListener(
			'calciteSliderChange',
			(e: any) => {
				this.outlineWidth = parseFloat(e.target.value);
				const pointRenderer = (points.renderer as esri.SimpleRenderer).clone();

				(pointRenderer.symbol as esri.SimpleMarkerSymbol).outline.width = this.outlineWidth;

				points.renderer = pointRenderer;
			},
			{ passive: true },
		);
	};
	lineOutlineWidthCreated = (slider: Element) => {
		const lines: esri.FeatureLayer = this.view.map.findLayerById('sketch-lines') as esri.FeatureLayer;

		slider.addEventListener(
			'calciteSliderChange',
			(e: any) => {
				this.outlineWidth = parseFloat(e.target.value);
				const lineRenderer = (lines.renderer as esri.SimpleRenderer).clone();

				(lineRenderer.symbol as esri.SimpleLineSymbol).width = this.outlineWidth;

				lines.renderer = lineRenderer;
			},
			{ passive: true },
		);
	};
	polygonOutlineWidthCreated = (slider: Element) => {
		const polygons: esri.FeatureLayer = this.view.map.findLayerById('sketch-polygons') as esri.FeatureLayer;

		slider.addEventListener(
			'calciteSliderChange',
			(e: any) => {
				this.outlineWidth = parseFloat(e.target.value);
				const polygonRender = (polygons.renderer as esri.SimpleRenderer).clone();
				(polygonRender.symbol as esri.SimpleMarkerSymbol).outline.width = this.outlineWidth;
				polygons.renderer = polygonRender;
			},
			{ passive: true },
		);
	};
	pointSizeCreated = (slider: Element) => {
		const points: esri.FeatureLayer = this.view.map.findLayerById('sketch-points') as esri.FeatureLayer;

		slider.addEventListener(
			'calciteSliderChange',
			(e: any) => {
				const pointRenderer = (points.renderer as esri.SimpleRenderer).clone();

				(pointRenderer.symbol as esri.SimpleMarkerSymbol).size = parseFloat(e.target.value);

				points.renderer = pointRenderer;
			},
			{ passive: true },
		);
	};

	pointFillEnabledCreated = (element: Element) => {
		const points: esri.FeatureLayer = this.view.map.findLayerById('sketch-points') as esri.FeatureLayer;

		element.addEventListener('calciteSwitchChange', (event) => {
			this.pointFillEnabled = (event as any).detail.switched;
			const pointRenderer = (points.renderer as esri.SimpleRenderer).clone();
			if (!this.pointFillEnabled) {
				(pointRenderer.symbol as esri.SimpleMarkerSymbol).color.a = 0;
			} else {
				(pointRenderer.symbol as esri.SimpleMarkerSymbol).color.a = parseFloat(
					document.getElementById('pointFillOpacity')?.getAttribute('value') as string,
				);
			}

			points.renderer = pointRenderer;
		});
	};
	polygonFillEnabledCreated = (element: Element) => {
		const polygons: esri.FeatureLayer = this.view.map.findLayerById('sketch-polygons') as esri.FeatureLayer;

		element.addEventListener('calciteSwitchChange', (event) => {
			this.polygonFillEnabled = (event as any).detail.switched;
			const polygonRender = (polygons.renderer as esri.SimpleRenderer).clone();
			if (!this.polygonFillEnabled) {
				(polygonRender.symbol as esri.SimpleFillSymbol).style = 'none';
			} else {
				(polygonRender.symbol as esri.SimpleFillSymbol).style = 'solid';
			}
			polygons.renderer = polygonRender;
		});
	};

	init(view: esri.MapView | esri.SceneView): void {
		const graphics = new GraphicsLayer({ listMode: 'hide', opacity: 0 });
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
			id: 'sketch-points',
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
			id: 'sketch-lines',
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
			id: 'sketch-polygons',
			renderer: {
				type: 'simple',
				symbol: {
					type: 'simple-fill',
					color: [255, 255, 255, 0.5],
					outline: {
						type: 'simple-line',
						color: [255, 255, 255, 1],
					},
				},
			} as any,

			labelingInfo: [labelClass],
		});
		this.view.map.addMany([points, lines, polygons, graphics]);

		this.sketch = new Sketch({
			view: view,
			container: 'sketchWidget',
			layer: graphics,
			creationMode: 'single',
			defaultCreateOptions: { mode: 'hybrid' },
			visibleElements: { undoRedoMenu: false },
		});
		this.sketch.watch('activeTool', (activeTool: string) => {
			this.geometryType = activeTool;
			if (['circle', 'rectangle'].includes(this.geometryType)) {
				this.geometryType = 'polygon';
			}
		});
		this.sketch.on('create', (event: __esri.SketchCreateEvent) => {
			if (event.state === 'start') {
				this.view.popup.autoOpenEnabled = false;
			}
			if (event.state === 'complete') {
				const graphic: esri.Graphic = event.graphic;

				const fillColor = Color.fromHex(this.fill);
				fillColor.a = this.fillOpacity;
				const outlineColor = Color.fromHex(this.fill);
				outlineColor.a = this.outlineOpacity;
				if (graphic.geometry.type === 'point') {
					(graphic.symbol as esri.SimpleMarkerSymbol).color = fillColor;
					(graphic.symbol as esri.SimpleMarkerSymbol).outline.color = outlineColor;

					graphic.setAttribute('label', this.label);
					points.applyEdits({ addFeatures: [graphic] }).then(() => {
						points.refresh();
					});
				}
				if (graphic.geometry.type === 'polyline') {
					graphic.setAttribute('label', this.label);
					(graphic.symbol as esri.SimpleLineSymbol).color = outlineColor;
					lines.applyEdits({ addFeatures: [graphic] }).then(() => {
						lines.refresh();
					});
				}
				if (graphic.geometry.type === 'polygon') {
					graphic.setAttribute('label', this.label);
					(graphic.symbol as esri.SimpleFillSymbol).color = fillColor;
					(graphic.symbol as esri.SimpleFillSymbol).outline.color = outlineColor;
					polygons.applyEdits({ addFeatures: [graphic] }).then(() => {
						polygons.refresh();
					});
				}
				this.view.popup.autoOpenEnabled = true;
			}
		});
		//@ts-ignore
		this.sketch.on('update', (event: __esri.SketchUpdateEvent) => {
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
		this.sketch.on('delete', (event: __esri.SketchDeleteEvent) => {
			const pointFeatures: esri.Graphic[] = [];
			const lineFeatures: esri.Graphic[] = [];
			const polygonFeatures: esri.Graphic[] = [];
			event.graphics.forEach((graphic) => {
				if (graphic.geometry.type === 'point') {
					pointFeatures.push(graphic);
				}
				if (graphic.geometry.type === 'polyline') {
					lineFeatures.push(graphic);
				}
				if (graphic.geometry.type === 'polygon') {
					polygonFeatures.push(graphic);
				}
			});
			points.applyEdits({ deleteFeatures: pointFeatures }).then((results) => {
				console.log(results);
				points.refresh();
			});
			lines.applyEdits({ deleteFeatures: lineFeatures }).then((results) => {
				console.log(results);
				lines.refresh();
			});
			polygons.applyEdits({ deleteFeatures: polygonFeatures }).then((results) => {
				console.log(results);
				polygons.refresh();
			});
		});
	}
}
