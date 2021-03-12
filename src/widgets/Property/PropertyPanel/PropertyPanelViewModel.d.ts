import Accessor from '@arcgis/core/core/Accessor';
import PropertyInfo from '../PropertyInfo';
import PropertyList from '../PropertyList';
import FeatureLayerView from '@arcgis/core/views/layers/FeatureLayerView';
import MapView from '@arcgis/core/views/MapView';
export default class PropertySearchViewModel extends Accessor {
    view: __esri.MapView | __esri.SceneView;
    propertyLayer: __esri.FeatureLayer;
    condoTable: __esri.FeatureLayer;
    addressTable: __esri.FeatureLayer;
    geometry: __esri.Geometry;
    featureWidget: PropertyInfo;
    propertyList: PropertyList;
    highlights: any;
    layerView: FeatureLayerView;
    constructor(params?: any);
    geometryChanged: (geometry: __esri.Geometry) => void;
    selectFeature: (feature: __esri.Graphic) => void;
    viewDefined: (view: MapView) => void;
    searchDivCreated: () => void;
    featureDivCreated: () => void;
    tableCreated: () => PropertyList;
    init(view: __esri.MapView | __esri.SceneView): void;
}
