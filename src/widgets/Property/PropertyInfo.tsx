import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import PropertyInfoViewModel from './PropertyInfo/PropertyInfoViewModel';
import './PropertyInfo/styles/PropertyInfo.scss';
export interface PropertyInfoProperties extends esri.WidgetProperties {
	view?: esri.MapView | esri.SceneView;
	propertyFeature?: esri.Graphic;
}

const CSS = {
	base: 'esri-widget propertyinfo-base',
};

@subclass('app.widgets.PropertyInfo')
export default class PropertyInfo extends Widget {
	@aliasOf('viewModel.view')
	view!: esri.MapView | esri.SceneView;
	@aliasOf('viewModel.propertyFeature')
	propertyFeature!: esri.Graphic;
	@property({
		type: PropertyInfoViewModel,
	})
	@renderable()
	viewModel: PropertyInfoViewModel = new PropertyInfoViewModel();

	constructor(properties?: PropertyInfoProperties) {
		super(properties);
	}

	render(): tsx.JSX.Element {
		return <div id="featureWidget" afterCreate={this.viewModel.featureWidgetCreated} class={CSS.base}></div>;
	}
}
