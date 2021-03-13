/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import esri = __esri;

import Sketch from '@arcgis/core/widgets/Sketch';
import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';
import Widget from '@arcgis/core/widgets/Widget';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import * as geometryEngine from '@arcgis/core/geometry/geometryEngine';
@subclass('app.widgets.PropertySelect.PropertySelectViewModel')
export default class PropertySelectViewModel extends Widget {
	@property() view!: esri.MapView | esri.SceneView;
	@property() bufferDistance!: number;

	constructor(params?: any) {
		super(params);
	}
	sketchCreated = () => {
		whenDefinedOnce(this, 'view', this.init.bind(this));
	};
	sketchComplete = (event: any, layer: GraphicsLayer) => {
		layer.removeAll();
		if (event.state === 'complete') {
			if (this.bufferDistance) {
				event.graphic.geometry = geometryEngine.geodesicBuffer(
					event.graphic.geometry,
					this.bufferDistance,
					'feet',
					false,
				) as __esri.Geometry;
				event.graphic.symbol = {
					type: 'simple-fill',
					outline: {
						style: 'dash',
						cap: 'square',
						join: 'bevel',
						width: 3,
						color: [248, 236, 12, 1],
					},
					color: [248, 255, 10, 0.25],
				};

				layer.add(event.graphic);
			}
			this.emit('selection-complete', event.graphic);
		}
	};
	init(view: esri.MapView | esri.SceneView): void {
		const sketchGraphics = new GraphicsLayer({ id: 'select-graphics', listMode: 'hide', visible: true });
		view.map.add(sketchGraphics);
		const sketch: Sketch = new Sketch({
			view: view,
			container: 'sketchDiv',
			layer: sketchGraphics,
			visibleElements: {
				undoRedoMenu: false,
				selectionTools: {
					'lasso-selection': false,
					'rectangle-selection': false,
				},
			},
			creationMode: 'single',
			defaultCreateOptions: {
				mode: 'hybrid',
			},
		});
		sketch.watch('activeTool', (activeTool: string) => {
			this.emit('activated', activeTool);
		});
		sketch.on('create' as any, (event: any) => {
			this.sketchComplete(event, sketchGraphics);
		});
	}
}
