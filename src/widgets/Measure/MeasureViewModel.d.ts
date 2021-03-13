import esri = __esri;
import Measurement from '@arcgis/core/widgets/Measurement';
import Widget from '@arcgis/core/widgets/Widget';
export default class MeasureViewModel extends Widget {
    view: esri.MapView | esri.SceneView;
    state: string;
    measurement: Measurement;
    constructor(params?: any);
    measureCreated: () => void;
    coordinateCreated: () => void;
    measureToggleCreated: (element: Element) => void;
    init(view: esri.MapView | esri.SceneView): void;
}
