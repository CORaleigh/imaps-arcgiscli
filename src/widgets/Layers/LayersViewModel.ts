/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import esri = __esri;

import Accessor from '@arcgis/core/core/Accessor';
import LayerList from '@arcgis/core/widgets/LayerList';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';

@subclass('app.widgets.Layers.LayersViewModel')
export default class LayersViewModel extends Accessor {
	@property() view!: esri.MapView | esri.SceneView;
	@property() layerList!: LayerList;
	constructor(params?: any) {
		super(params);
	}
	opacityChanged = (value: number, id: string) => {
		this.view.map.findLayerById(id).opacity = value;
	};
	layerListDivCreated = () => {
		whenDefinedOnce(this, 'view', this.init.bind(this));
	};

	init(view: esri.MapView | esri.SceneView) {
		this.layerList = new LayerList({
			view: view,
			container: 'layerListDiv',
			selectionEnabled: true,
			multipleSelectionEnabled: false,
			listItemCreatedFunction: function (event: any) {
				const item = event.item;
				if (item.layer.type != 'group') {
					const slider = document.createElement('calcite-slider');
					slider.setAttribute('min', '0');
					slider.setAttribute('max', '100');
					slider.setAttribute('min-label', '0%');
					slider.setAttribute('max-label', '100%');
					slider.setAttribute('label-handles', '');
					slider.setAttribute('value', Math.round(item?.layer.opacity * 100).toString());
					slider.setAttribute('data', item.layer.id);
					slider.addEventListener(
						'calciteSliderUpdate',
						(event) => {
							view.map.findLayerById((event.target as any).getAttribute('data')).opacity =
								Math.round(parseInt((event?.target as any)?.getAttribute('value'))) / 100;
						},
						{ passive: true },
					);
					item.panel = {
						content: [slider, 'legend'],
						open: item.layer.visible,
					};
				}
			},
		});
	}
}
