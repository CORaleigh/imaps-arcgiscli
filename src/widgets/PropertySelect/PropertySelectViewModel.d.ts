import esri = __esri;
import Widget from '@arcgis/core/widgets/Widget';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
export default class PropertySelectViewModel extends Widget {
    view: esri.MapView | esri.SceneView;
    bufferDistance: number;
    constructor(params?: any);
    sketchCreated: () => void;
    sketchComplete: (event: any, layer: GraphicsLayer) => void;
    init(view: esri.MapView | esri.SceneView): void;
}
