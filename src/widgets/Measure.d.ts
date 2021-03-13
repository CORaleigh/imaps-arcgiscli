import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import MeasureViewModel from './Measure/MeasureViewModel';
import './Measure/styles/Measure.scss';
export interface MeasureProperties extends esri.WidgetProperties {
    name?: string;
    view?: esri.MapView | esri.SceneView;
    state?: string;
}
export default class Measure extends Widget {
    view: esri.MapView | esri.SceneView;
    state: string;
    viewModel: MeasureViewModel;
    radioItemCreated: (element: Element) => void;
    constructor(properties?: MeasureProperties);
    render(): tsx.JSX.Element;
}
