import esri = __esri;
import Accessor from '@arcgis/core/core/Accessor';
export default class LocationSearchViewModel extends Accessor {
    view: esri.MapView | esri.SceneView;
    constructor(params?: any);
    init(view: esri.MapView | esri.SceneView): void;
}
