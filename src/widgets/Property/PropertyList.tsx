import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx, vmEvent } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import PropertyListViewModel from './PropertyList/PropertyListViewModel';
import './PropertyList/styles/PropertyList.scss';

export interface PropertyListProperties extends esri.WidgetProperties {
	condoTable?: esri.FeatureLayer;
	propertyLayer?: esri.FeatureLayer;

	view?: esri.MapView | esri.SceneView;
	definitionExpression?: string;
}

const CSS = {
	base: 'esri-widget propertylist-base',
};
@subclass('app.widgets.PropertyList')
export default class PropertyList extends Widget {
	@aliasOf('viewModel.view')
	view!: esri.MapView | esri.SceneView;

	@aliasOf('viewModel.condoTable')
	condoTable!: esri.FeatureLayer;
	@aliasOf('viewModel.propertyLayer')
	propertyLayer!: esri.FeatureLayer;
	@aliasOf('viewModel.definitionExpression')
	definitionExpression!: string;

	@property({
		type: PropertyListViewModel,
	})
	@renderable()
	@vmEvent(['feature-selected'])
	viewModel: PropertyListViewModel = new PropertyListViewModel();

	constructor(properties?: PropertyListProperties) {
		super(properties);
	}

	render(): tsx.JSX.Element {
		return (
			<div class={CSS.base}>
				<div id="featureTable" afterCreate={this.viewModel.featureTableCreated}></div>
			</div>
		);
	}
}
