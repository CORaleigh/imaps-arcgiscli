import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import PropertyTableViewModel from './PropertyTable/PropertyTableViewModel';
import './PropertyTable/styles/PropertyTable.scss';
export interface PropertyTableProperties extends esri.WidgetProperties {
    condoTable?: esri.FeatureLayer;
    propertyLayer?: esri.FeatureLayer;
    view?: esri.MapView | esri.SceneView;
    definitionExpression?: string;
}
export default class PropertyTable extends Widget {
    view: esri.MapView | esri.SceneView;
    condoTable: esri.FeatureLayer;
    propertyLayer: esri.FeatureLayer;
    definitionExpression: string;
    fields: esri.FieldInfo[];
    count: number;
    viewModel: PropertyTableViewModel;
    constructor(properties?: PropertyTableProperties);
    render(): tsx.JSX.Element;
}
