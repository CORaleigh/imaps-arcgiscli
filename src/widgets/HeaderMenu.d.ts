import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import HeaderMenuViewModel from './HeaderMenu/HeaderMenuViewModel';
import './HeaderMenu/styles/HeaderMenu.scss';
export interface HeaderMenuProperties extends esri.WidgetProperties {
    name?: string;
    view?: esri.MapView | esri.SceneView;
}
export default class HeaderMenu extends Widget {
    view: esri.MapView | esri.SceneView;
    viewModel: HeaderMenuViewModel;
    setTheme: (value: string) => void;
    menuCreated: () => void;
    theme: string;
    constructor(properties?: HeaderMenuProperties);
    render(): tsx.JSX.Element;
}
