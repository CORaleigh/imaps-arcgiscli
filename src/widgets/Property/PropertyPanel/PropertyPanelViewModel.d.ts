import Accessor from '@arcgis/core/core/Accessor';
import PropertyInfo from '../PropertyInfo';
import FeatureLayerView from '@arcgis/core/views/layers/FeatureLayerView';
import MapView from '@arcgis/core/views/MapView';
import PropertyTable from '../PropertyTable';
export default class PropertySearchViewModel extends Accessor {
    view: __esri.MapView | __esri.SceneView;
    propertyLayer: __esri.FeatureLayer;
    condoTable: __esri.FeatureLayer;
    addressTable: __esri.FeatureLayer;
    geometry: __esri.Geometry;
    featureWidget: PropertyInfo;
    propertyList: PropertyTable;
    highlights: any;
    layerView: FeatureLayerView;
    constructor(params?: any);
    geometryChanged: (geometry: __esri.Geometry) => void;
    selectFeature: (feature: __esri.Graphic) => void;
    viewDefined: (view: MapView) => void;
    searchDivCreated: () => void;
    featureDivCreated: () => void;
    tableCreated: () => PropertyTable;
    init(view: __esri.MapView | __esri.SceneView): void;
}
