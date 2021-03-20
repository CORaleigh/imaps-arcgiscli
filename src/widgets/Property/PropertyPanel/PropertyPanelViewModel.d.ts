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
    where: __esri.Geometry;
    featureWidget: PropertyInfo;
    propertyList: PropertyTable;
    highlights: any;
    layerView: FeatureLayerView;
    maximized: boolean;
    constructor(params?: any);
    setSearchParams: (features: __esri.Graphic[]) => void;
    geometryChanged: (geometry: __esri.Geometry) => void;
    buildTabNav: (tab: string) => void;
    activateTab: (tab: string) => void;
    selectFeature: (feature: __esri.Graphic) => void;
    viewDefined: (view: MapView) => void;
    searchDivCreated: () => void;
    featureDivCreated: () => void;
    tableCreated: () => PropertyTable;
}
