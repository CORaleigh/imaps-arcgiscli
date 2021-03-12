/* eslint-disable @typescript-eslint/no-explicit-any */

import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import LocationSearchViewModel from './LocationSearch/LocationSearchViewModel';

export interface LocationSearchProperties extends esri.WidgetProperties {
	name?: string;
	view?: esri.MapView | esri.SceneView;
}

const CSS = {
	base: 'esri-widget locationsearch-base',
};

@subclass('app.widgets.LocationSearch')
export default class LocationSearch extends Widget {
	@aliasOf('viewModel.view')
	view!: esri.MapView | esri.SceneView;

	@property({
		type: LocationSearchViewModel,
	})
	@renderable()
	viewModel: LocationSearchViewModel = new LocationSearchViewModel();

	constructor(properties?: LocationSearchProperties) {
		super(properties);
	}

	render(): tsx.JSX.Element {
		return <div class={CSS.base}></div>;
	}
}
