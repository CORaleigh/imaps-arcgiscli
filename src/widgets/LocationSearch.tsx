/* eslint-disable @typescript-eslint/no-explicit-any */

import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import LocationSearchViewModel from './LocationSearch/LocationSearchViewModel';
import './LocationSearch/styles/LocationSearch.scss';
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
	@aliasOf('viewModel.search')
	search!: esri.widgetsSearch;
	@aliasOf('viewModel.feature')
	feature!: esri.Feature;
	@property({
		type: LocationSearchViewModel,
	})
	@renderable()
	viewModel: LocationSearchViewModel = new LocationSearchViewModel();

	constructor(properties?: LocationSearchProperties) {
		super(properties);
	}
	_searchCreate = (): void => {
		if (this.search) {
			this.search.container = 'locationSearch';
		}
	};
	_locationCreate = (): void => {
		if (this.feature) {
			this.feature.container = 'locationFeature';
		}
	};
	render(): tsx.JSX.Element {
		return (
			<div class={CSS.base}>
				<div afterCreate={this._searchCreate} id="locationSearch"></div>
				<div afterCreate={this._locationCreate} id="locationFeature"></div>
			</div>
		);
	}
}
