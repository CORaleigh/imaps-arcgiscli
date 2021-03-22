import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import DrawViewModel from './Draw/DrawViewModel';
import './Draw/styles/Draw.scss';
export interface DrawProperties extends esri.WidgetProperties {
    view?: esri.MapView | esri.SceneView;
}
export default class Draw extends Widget {
    view: esri.MapView | esri.SceneView;
    label: string;
    fill: string;
    outline: string;
    outlineOpacity: number;
    fillOpacity: number;
    outlineWidth: number;
    geometryType: string;
    viewModel: DrawViewModel;
    constructor(properties?: DrawProperties);
    textAreaCreated: (element: Element) => void;
    render(): tsx.JSX.Element;
}
