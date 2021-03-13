import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import LayersViewModel from './Layers/LayersViewModel';
import LayerList from '@arcgis/core/widgets/LayerList';
import './Layers/styles/Layers.scss';
export interface LayersProperties extends esri.WidgetProperties {
    name?: string;
    view?: esri.MapView | esri.SceneView;
}
export default class Layers extends Widget {
    view: esri.MapView | esri.SceneView;
    layerList: LayerList;
    viewModel: LayersViewModel;
    constructor(properties?: LayersProperties);
    filterLayers: (value: string) => void;
    _createSearch: (input: HTMLElement) => void;
    clearClick: () => void;
    _reset: () => void;
    render(): tsx.JSX.Element;
}
