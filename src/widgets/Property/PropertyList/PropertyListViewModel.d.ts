import esri = __esri;
import Widget from '@arcgis/core/widgets/Widget';
import FieldColumnConfig from '@arcgis/core/widgets/FeatureTable/FieldColumnConfig';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
export default class PropertyListViewModel extends Widget {
    view: esri.MapView | esri.SceneView;
    condoTable: esri.FeatureLayer;
    propertyLayer: esri.FeatureLayer;
    definitionExpression: string;
    constructor(params?: any);
    getProperty: (oids: number[]) => void;
    getColumns: (layer: FeatureLayer) => FieldColumnConfig[];
    featureTableCreated: () => void;
}
