import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import PropertyPanelViewModel from './PropertyPanel/PropertyPanelViewModel';
import './PropertyPanel/styles/PropertyPanel.scss';
export interface PropertyPanelProperties extends __esri.WidgetProperties {
    view?: __esri.MapView | __esri.SceneView;
    propertyLayer?: __esri.FeatureLayer;
    condoTable?: __esri.FeatureLayer;
    addressTable?: __esri.FeatureLayer;
    geometry?: __esri.Geometry;
    where?: string;
}
export default class PropertyPanel extends Widget {
    view: __esri.MapView | __esri.SceneView;
    propertyLayer: __esri.FeatureLayer;
    condoTable: __esri.FeatureLayer;
    addressTable: __esri.FeatureLayer;
    geometry: __esri.Geometry;
    maximized: boolean;
    where: string;
    viewModel: PropertyPanelViewModel;
    constructor(properties?: PropertyPanelProperties);
    scrollArrowCreated: (element: Element) => void;
    render(): tsx.JSX.Element;
}
