import esri = __esri;
import Accessor from '@arcgis/core/core/Accessor';
import Feature from '@arcgis/core/widgets/Feature';
export default class PropertyInfoViewModel extends Accessor {
    view: esri.MapView | esri.SceneView;
    propertyFeature: esri.Graphic;
    featureWidget: Feature;
    constructor(params?: any);
    getPhotos: (feature: __esri.Graphic) => Promise<any>;
    propertyUpdated: () => void;
    featureWidgetCreated: () => void;
}
