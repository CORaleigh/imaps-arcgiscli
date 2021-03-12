import esri = __esri;
import { Action } from '../Action';
import Widget from '@arcgis/core/widgets/Widget';
export default class AppShellViewModel extends Widget {
    view: esri.MapView | esri.SceneView;
    map: esri.Map | esri.WebMap;
    leftActions: Action[];
    rightActions: Action[];
    selectedAction: Action;
    title: string;
    container: string;
    constructor(params?: any);
    viewCreated: () => void;
    actionClicked: (event: Event) => void;
    actionCreated: (element: Element) => void;
    actionPanelCreated: (element: Element) => void;
    init(view: esri.MapView | esri.SceneView): void;
    rightActionsInit(): void;
    resize: () => void;
}
