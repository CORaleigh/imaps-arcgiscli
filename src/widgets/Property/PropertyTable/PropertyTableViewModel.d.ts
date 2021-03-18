import esri = __esri;
import Widget from '@arcgis/core/widgets/Widget';
export default class PropertyTableViewModel extends Widget {
    view: esri.MapView | esri.SceneView;
    condoTable: esri.FeatureLayer;
    propertyLayer: esri.FeatureLayer;
    definitionExpression: string;
    grid: any;
    count: number;
    constructor(params?: any);
    getProperty: (oids: number[]) => Promise<esri.Graphic[]>;
    definitionUpdated: (definitionExpression: string) => void;
    featureTableCreated: () => void;
    createColumns: () => void;
    exportTable: () => void;
}
