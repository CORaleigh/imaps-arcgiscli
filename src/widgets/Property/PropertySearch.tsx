import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx, vmEvent } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import PropertySearchViewModel from './PropertySearch/PropertySearchViewModel';

export interface PropertySearchProperties extends esri.WidgetProperties {
	view?: esri.MapView | esri.SceneView;
	propertyLayer?: esri.FeatureLayer;
	condoTable?: esri.FeatureLayer;
	addressTable?: esri.FeatureLayer;
}

const CSS = {
	base: 'esri-widget propertysearch-base',
};

@subclass('app.widgets.PropertySearch')
export default class PropertySearch extends Widget {
	@aliasOf('viewModel.view')
	view!: esri.MapView | esri.SceneView;
	@aliasOf('viewModel.propertyLayer')
	propertyLayer!: esri.FeatureLayer;
	@aliasOf('viewModel.condoTable')
	condoTable!: esri.FeatureLayer;
	@aliasOf('viewModel.addressTable')
	addressTable!: esri.FeatureLayer;
	@property({
		type: PropertySearchViewModel,
	})
	@renderable()
	@vmEvent(['feature-selected', 'features-selected', 'properties-selected'])
	viewModel: PropertySearchViewModel = new PropertySearchViewModel();

	constructor(properties?: PropertySearchProperties) {
		super(properties);
	}

	render(): tsx.JSX.Element {
		return (
			<div class={CSS.base}>
				<div id="searchWidget" afterCreate={this.viewModel.searchWidgetCreated}></div>
			</div>
		);
	}
}
