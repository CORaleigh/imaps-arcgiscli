import esri = __esri;
import Widget from '@arcgis/core/widgets/Widget';
export default class DrawViewModel extends Widget {
    view: esri.MapView | esri.SceneView;
    label: string;
    fill: string;
    outline: string;
    constructor(params?: any);
    sketchWidgetCreated: () => void;
    init(view: esri.MapView | esri.SceneView): void;
}
