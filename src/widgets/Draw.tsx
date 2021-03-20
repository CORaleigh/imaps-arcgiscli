/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import DrawViewModel from './Draw/DrawViewModel';
import './Draw/styles/Draw.scss';
export interface DrawProperties extends esri.WidgetProperties {
	view?: esri.MapView | esri.SceneView;
}

const CSS = {
	base: 'esri-widget draw-base',
};

@subclass('app.widgets.Draw')
export default class Draw extends Widget {
	@aliasOf('viewModel.view')
	view!: esri.MapView | esri.SceneView;
	@renderable()
	@aliasOf('viewModel.label')
	label = 'test';
	@renderable()
	@aliasOf('viewModel.fill')
	fill = '#b33f33';
	@renderable()
	@aliasOf('viewModel.fill')
	outline = '#b33f33';
	@property({
		type: DrawViewModel,
	})
	@renderable()
	viewModel: DrawViewModel = new DrawViewModel();

	constructor(properties?: DrawProperties) {
		super(properties);
	}

	textAreaCreated = (element: Element) => {
		element.addEventListener('calciteInputInput', (event: any) => {
			this.label = event.target.value;
		});
	};

	render(): tsx.JSX.Element {
		return (
			<div class={CSS.base}>
				<div id="sketchWidget" afterCreate={this.viewModel.sketchWidgetCreated}></div>
				<calcite-input
					type="textarea"
					status="idle"
					alignment="start"
					number-button-type="horizontal"
					min="0"
					max="50"
					step="1"
					prefix-text=""
					suffix-text=""
					value={this.label}
					placeholder="Label text"
					class="sc-calcite-input-h sc-calcite-input-s"
					dir="ltr"
					scale="m"
					calcite-hydrated=""
					bind={this}
					afterCreate={this.textAreaCreated}
				></calcite-input>
				<calcite-color-picker
					dir="ltr"
					hide-channels=""
					hide-saved=""
					scale="m"
					value={this.fill}
					appearance="default"
					theme="light"
					name="fill"
					calcite-hydrated=""
				></calcite-color-picker>
				<calcite-color-picker
					dir="ltr"
					hide-channels=""
					hide-saved=""
					scale="m"
					value={this.outline}
					appearance="default"
					theme="light"
					name="outline"
					calcite-hydrated=""
				></calcite-color-picker>
			</div>
		);
	}
}
