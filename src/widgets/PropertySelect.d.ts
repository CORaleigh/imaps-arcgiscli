import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import PropertySelectViewModel from './PropertySelect/PropertySelectViewModel';
import './PropertySelect/styles/PropertySelect.scss';
export interface PropertySelectProperties extends esri.WidgetProperties {
    name?: string;
    view?: esri.MapView | esri.SceneView;
}
export default class PropertySelect extends Widget {
    view: esri.MapView | esri.SceneView;
    bufferDistance: number;
    viewModel: PropertySelectViewModel;
    constructor(properties?: PropertySelectProperties);
    bufferDistanceCreated: (element: Element) => void;
    render(): tsx.JSX.Element;
}
