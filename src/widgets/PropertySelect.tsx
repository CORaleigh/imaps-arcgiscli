/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx, vmEvent } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import PropertySelectViewModel from './PropertySelect/PropertySelectViewModel';
import './PropertySelect/styles/PropertySelect.scss';
export interface PropertySelectProperties extends esri.WidgetProperties {
	name?: string;
	view?: esri.MapView | esri.SceneView;
}

const CSS = {
	base: 'esri-widget propertyselect-base',
};

@subclass('app.widgets.PropertySelect')
export default class PropertySelect extends Widget {
	@aliasOf('viewModel.view')
	view!: esri.MapView | esri.SceneView;
	@renderable()
	@aliasOf('viewModel.bufferDistance')
	bufferDistance!: number;
	@property({
		type: PropertySelectViewModel,
	})
	@vmEvent(['selection-complete', 'activated'])
	@renderable()
	viewModel: PropertySelectViewModel = new PropertySelectViewModel();

	constructor(properties?: PropertySelectProperties) {
		super(properties);
	}

	bufferDistanceCreated = (element: Element) => {
		element.addEventListener('calciteInputInput', (event: Event) => {
			this.bufferDistance = parseInt((event.target as any).value);
		});
	};

	render(): tsx.JSX.Element {
		return (
			<div class={CSS.base}>
				<div id="sketchDiv" afterCreate={this.viewModel.sketchCreated}></div>
				<calcite-label scale="s">
					Buffer Distance (feet)
					<calcite-input
						scale="s"
						type="number"
						min="0"
						max="2000"
						step="50"
						value={this.bufferDistance}
						afterCreate={this.bufferDistanceCreated}
						bind={this}
					></calcite-input>
				</calcite-label>
			</div>
		);
	}
}
