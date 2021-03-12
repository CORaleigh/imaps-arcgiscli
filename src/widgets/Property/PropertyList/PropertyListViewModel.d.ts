import esri = __esri;
import Widget from '@arcgis/core/widgets/Widget';
export default class PropertyListViewModel extends Widget {
    view: esri.MapView | esri.SceneView;
    condoTable: esri.FeatureLayer;
    propertyLayer: esri.FeatureLayer;
    definitionExpression: string;
    constructor(params?: any);
    getProperty: (oids: number[]) => void;
    featureTableCreated: () => void;
    init(view: esri.MapView | esri.SceneView): void;
}
