/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import esri = __esri;

import Accessor from '@arcgis/core/core/Accessor';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

@subclass('app.widgets.HeaderMenu.HeaderMenuViewModel')
export default class HeaderMenuViewModel extends Accessor {
	@property() view!: esri.MapView | esri.SceneView;

	constructor(params?: any) {
		super(params);
	}
}
