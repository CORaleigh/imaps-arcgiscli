/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import esri = __esri;

import Accessor from '@arcgis/core/core/Accessor';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';
import Search from '@arcgis/core/widgets/Search';
import Feature from '@arcgis/core/widgets/Feature';

@subclass('app.widgets.LocationSearch.LocationSearchViewModel')
export default class LocationSearchViewModel extends Accessor {
	@property() view!: esri.MapView | esri.SceneView;

	search!: Search;
	feature!: Feature;
	constructor(params?: any) {
		super(params);
		whenDefinedOnce(this, 'view', this.init.bind(this));
	}

	init(view: esri.MapView | esri.SceneView): void {
		this.search = new Search({ view: view, maxSuggestions: 30, searchAllEnabled: true, popupEnabled: false });
		this.feature = new Feature({ view: view });
		this.search.on('search-complete', (results) => {
			results.results[0].results.forEach((result) => {
				this.feature.graphic = result.feature;
			});
		});
		this.search.allSources.on('after-add', (e) => {
			if ((e.item as any).layer) {
				e.item.name = (e.item as any).layer.title;
				e.item.placeholder = (e.item as any).layer.title;
			}
			if ((e.item as any).locator) {
				this.search.allSources.remove(e.item);
			}
		});
	}
}
