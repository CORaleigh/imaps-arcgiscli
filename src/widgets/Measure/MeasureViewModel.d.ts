import esri = __esri;
import Accessor from '@arcgis/core/core/Accessor';
import Measurement from '@arcgis/core/widgets/Measurement';
export default class MeasureViewModel extends Accessor {
    view: esri.MapView | esri.SceneView;
    measurement: Measurement;
    constructor(params?: any);
    measureCreated: () => void;
    coordinateCreated: () => void;
    measureToggleCreated: (element: Element) => void;
    init(view: esri.MapView | esri.SceneView): void;
}
