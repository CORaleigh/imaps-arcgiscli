import esri = __esri;
import Widget from '@arcgis/core/widgets/Widget';
import Search from '@arcgis/core/widgets/Search';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
export default class PropertySearchViewModel extends Widget {
    view: esri.MapView | esri.SceneView;
    propertyLayer: esri.FeatureLayer;
    condoTable: esri.FeatureLayer;
    addressTable: esri.FeatureLayer;
    searchWidget: Search;
    constructor(params?: any);
    getSuggestions: (params: any, name: string, layer: esri.FeatureLayer, outFields: string[], orderByFields: string[], searchFields: string[], startsWith: boolean) => Promise<{
        key: string;
        text: any;
        sourceIndex: any;
    }[]>;
    getLayerSource: (placeholder: string, name: string, table: FeatureLayer, outFields: string[], orderByFields: string[], searchFields: string[], startsWith: boolean, resultFields: string[]) => esri.LayerSearchSource;
    getProperty: (oids: number[]) => Promise<esri.Graphic[]>;
    searchRelatedCondos: (oids: number[]) => void;
    searchCondos: (where: string, oids: number[]) => void;
    searchResultSelected: (layer: FeatureLayer, source: string, results: any, term: string) => void;
    wildcardSearch: (where: string, condoTable: FeatureLayer) => void;
    getWildcardSearchWhere: (searchFields: string[], term: string) => string;
    searchComplete: (event: esri.SearchSearchCompleteEvent) => void;
    searchWidgetCreated: () => void;
}
