import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import LocationSearchViewModel from './LocationSearch/LocationSearchViewModel';
export interface LocationSearchProperties extends esri.WidgetProperties {
    name?: string;
    view?: esri.MapView | esri.SceneView;
}
export default class LocationSearch extends Widget {
    view: esri.MapView | esri.SceneView;
    viewModel: LocationSearchViewModel;
    constructor(properties?: LocationSearchProperties);
    render(): tsx.JSX.Element;
}
