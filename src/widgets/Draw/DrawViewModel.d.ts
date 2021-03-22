import esri = __esri;
import Widget from '@arcgis/core/widgets/Widget';
import Sketch from '@arcgis/core/widgets/Sketch';
export default class DrawViewModel extends Widget {
    view: esri.MapView | esri.SceneView;
    label: string;
    fill: string;
    outline: string;
    fillOpacity: number;
    outlineOpacity: number;
    outlineWidth: number;
    geometryType: string;
    sketch: Sketch;
    constructor(params?: any);
    sketchWidgetCreated: () => void;
    fillCreated: (picker: Element) => void;
    outlineCreated: (picker: Element) => void;
    fillOpacityCreated: (slider: Element) => void;
    outlineOpacityCreated: (slider: Element) => void;
    outlineWidthCreated: (slider: Element) => void;
    init(view: esri.MapView | esri.SceneView): void;
}
