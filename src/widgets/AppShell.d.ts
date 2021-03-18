import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import AppShellViewModel from './AppShell/AppShellViewModel';
import { Action } from './Action';
import './AppShell/styles/AppShell.scss';
export interface AppShellProperties extends esri.WidgetProperties {
    name?: string;
    view?: esri.MapView | esri.SceneView;
    map?: esri.Map | esri.WebMap;
}
export default class AppShell extends Widget {
    view: esri.MapView | esri.SceneView;
    map: esri.Map | esri.WebMap;
    leftActions: Action[];
    rightActions: Action[];
    selectedAction: Action;
    viewModel: AppShellViewModel;
    constructor(properties?: AppShellProperties);
    shellPanelCreated: (elm: Element) => void;
    maximizedClicked: (event: Event) => void;
    panelCreated: (elm: Element) => void;
    headerCreated: () => void;
    tipClicked: (action: Action) => void;
    render(): tsx.JSX.Element;
}
