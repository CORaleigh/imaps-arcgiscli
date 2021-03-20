import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import PropertySearchViewModel from './PropertySearch/PropertySearchViewModel';
export interface PropertySearchProperties extends esri.WidgetProperties {
    view?: esri.MapView | esri.SceneView;
    propertyLayer?: esri.FeatureLayer;
    condoTable?: esri.FeatureLayer;
    addressTable?: esri.FeatureLayer;
    where?: string;
}
export default class PropertySearch extends Widget {
    view: esri.MapView | esri.SceneView;
    propertyLayer: esri.FeatureLayer;
    condoTable: esri.FeatureLayer;
    addressTable: esri.FeatureLayer;
    where: string;
    viewModel: PropertySearchViewModel;
    constructor(properties?: PropertySearchProperties);
    render(): tsx.JSX.Element;
}
