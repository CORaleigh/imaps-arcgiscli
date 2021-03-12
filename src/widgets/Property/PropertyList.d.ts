import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import PropertyListViewModel from './PropertyList/PropertyListViewModel';
import './PropertyList/styles/PropertyList.scss';
export interface PropertyListProperties extends esri.WidgetProperties {
    condoTable?: esri.FeatureLayer;
    propertyLayer?: esri.FeatureLayer;
    view?: esri.MapView | esri.SceneView;
    definitionExpression?: string;
}
export default class PropertyList extends Widget {
    view: esri.MapView | esri.SceneView;
    condoTable: esri.FeatureLayer;
    propertyLayer: esri.FeatureLayer;
    definitionExpression: string;
    viewModel: PropertyListViewModel;
    constructor(properties?: PropertyListProperties);
    render(): tsx.JSX.Element;
}
