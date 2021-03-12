import esri = __esri;
import Accessor from '@arcgis/core/core/Accessor';
import LayerList from '@arcgis/core/widgets/LayerList';
export default class LayersViewModel extends Accessor {
    view: esri.MapView | esri.SceneView;
    layerList: LayerList;
    constructor(params?: any);
    opacityChanged: (value: number, id: string) => void;
    layerListDivCreated: () => void;
    init(view: esri.MapView | esri.SceneView): void;
}
