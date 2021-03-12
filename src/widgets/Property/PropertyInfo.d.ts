import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import PropertyInfoViewModel from './PropertyInfo/PropertyInfoViewModel';
import './PropertyInfo/styles/PropertyInfo.scss';
export interface PropertyInfoProperties extends esri.WidgetProperties {
    view?: esri.MapView | esri.SceneView;
    propertyFeature?: esri.Graphic;
}
export default class PropertyInfo extends Widget {
    view: esri.MapView | esri.SceneView;
    propertyFeature: esri.Graphic;
    viewModel: PropertyInfoViewModel;
    constructor(properties?: PropertyInfoProperties);
    render(): tsx.JSX.Element;
}
