import esri = __esri;
import Accessor from '@arcgis/core/core/Accessor';
import Search from '@arcgis/core/widgets/Search';
import Feature from '@arcgis/core/widgets/Feature';
export default class LocationSearchViewModel extends Accessor {
    view: esri.MapView | esri.SceneView;
    search: Search;
    feature: Feature;
    constructor(params?: any);
    init(view: esri.MapView | esri.SceneView): void;
}
