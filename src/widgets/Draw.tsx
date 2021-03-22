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
	fill = '#FFFFFF';
	@renderable()
	@aliasOf('viewModel.fill')
	outline = '#FFFFFF';
	@renderable()
	@aliasOf('viewModel.outlineOpacity')
	outlineOpacity = 0.5;
	@renderable()
	@aliasOf('viewModel.fillOpacity')
	fillOpacity = 0.5;
	@renderable()
	@aliasOf('viewModel.outlineWidth')
	outlineWidth = 1;
	@renderable()
	@aliasOf('viewModel.geometryType')
	geometryType!: string;
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

				{this.geometryType === 'point' ? (
					<div>
						<calcite-block key="symbol" heading="Symbol" open collapsible>
							<calcite-block-section text="Size">
								<calcite-slider
									min="0"
									max="1"
									value={this.fillOpacity}
									bind={this}
									step="0.1"
									label="Size"
									label-handles=""
									ticks="0"
									page-step="5"
									name="fill-opacity"
									afterCreate={this.viewModel.fillOpacityCreated}
									snap=""
								></calcite-slider>
							</calcite-block-section>
						</calcite-block>
						<calcite-block key="fill" heading="Fill" open collapsible>
							<calcite-label
								layout="inline-space-between"
								class="sc-calcite-label-h sc-calcite-label-s"
								dir="ltr"
								alignment="start"
								status="idle"
								scale="m"
								calcite-hydrated=""
							>
								<label class="sc-calcite-label-h sc-calcite-label-s sc-calcite-label">
									Enable fill
									<calcite-switch
										name="setting"
										value="enabled"
										switched=""
										aria-checked="true"
										dir="ltr"
										tabindex="0"
										scale="m"
										calcite-hydrated=""
									>
										<input type="checkbox" checked="" name="setting" value="enabled" />
									</calcite-switch>
								</label>
							</calcite-label>
							<calcite-block-section text="Color">
								<calcite-color-picker
									dir="ltr"
									hide-channels=""
									hide-saved=""
									scale="m"
									value={this.fill}
									appearance="default"
									name="fill"
									calcite-hydrated=""
									afterCreate={this.viewModel.fillCreated}
								></calcite-color-picker>
							</calcite-block-section>
							<calcite-block-section text="Fill transparency">
								<calcite-slider
									min="0"
									max="1"
									value={this.fillOpacity}
									bind={this}
									step="0.1"
									label="Opacity"
									label-handles=""
									ticks="0"
									page-step="5"
									name="fill-opacity"
									afterCreate={this.viewModel.fillOpacityCreated}
									snap=""
								></calcite-slider>
							</calcite-block-section>
						</calcite-block>
						<calcite-block key="outline" heading="Outline" open collapsible>
							<calcite-block-section text="Color">
								<calcite-color-picker
									dir="ltr"
									hide-channels=""
									hide-saved=""
									scale="m"
									value={this.outline}
									appearance="default"
									name="outline"
									calcite-hydrated=""
									afterCreate={this.viewModel.outlineCreated}
								></calcite-color-picker>
							</calcite-block-section>
							<calcite-block-section text="Outline transparency">
								<calcite-slider
									min="0"
									max="1"
									value={this.outlineOpacity}
									bind={this}
									step="0.1"
									label="Opacity"
									label-handles=""
									ticks="0"
									page-step="5"
									name="outline-opacity"
									afterCreate={this.viewModel.outlineOpacityCreated}
									snap=""
								></calcite-slider>
							</calcite-block-section>
							<calcite-block-section text="Stroke">
								<calcite-slider
									min="0"
									max="10"
									value={this.outlineWidth}
									bind={this}
									step="0.1"
									label="Width"
									label-handles=""
									ticks="0"
									page-step="5"
									name="width"
									afterCreate={this.viewModel.outlineWidthCreated}
									snap=""
								></calcite-slider>
							</calcite-block-section>
						</calcite-block>
					</div>
				) : (
					''
				)}
				{this.geometryType === 'polyline' ? (
					<div>
						<calcite-block key="line" heading="Line" open collapsible>
							<calcite-block-section text="Color">
								<calcite-color-picker
									dir="ltr"
									hide-channels=""
									hide-saved=""
									scale="m"
									value={this.outline}
									appearance="default"
									name="outline"
									calcite-hydrated=""
									afterCreate={this.viewModel.outlineCreated}
								></calcite-color-picker>
							</calcite-block-section>

							<calcite-block-section text="Line transparency">
								<calcite-slider
									min="0"
									max="1"
									value={this.outlineOpacity}
									bind={this}
									step="0.1"
									label="Opacity"
									label-handles=""
									ticks="0"
									page-step="5"
									name="outline-opacity"
									afterCreate={this.viewModel.outlineOpacityCreated}
									snap=""
								></calcite-slider>
							</calcite-block-section>
							<calcite-block-section text="Stroke">
								<calcite-slider
									min="0"
									max="10"
									value={this.outlineWidth}
									bind={this}
									step="0.1"
									label="Width"
									label-handles=""
									ticks="0"
									page-step="5"
									name="width"
									afterCreate={this.viewModel.outlineWidthCreated}
									snap=""
								></calcite-slider>
							</calcite-block-section>
						</calcite-block>
					</div>
				) : (
					''
				)}
				{this.geometryType === 'polygon' ? (
					<div>
						<calcite-block key="fill" heading="Fill" open collapsible>
							<calcite-label
								layout="inline-space-between"
								class="sc-calcite-label-h sc-calcite-label-s"
								dir="ltr"
								alignment="start"
								status="idle"
								scale="m"
								calcite-hydrated=""
							>
								<label class="sc-calcite-label-h sc-calcite-label-s sc-calcite-label">
									Enable fill
									<calcite-switch
										name="setting"
										value="enabled"
										switched=""
										aria-checked="true"
										dir="ltr"
										tabindex="0"
										scale="m"
										calcite-hydrated=""
									>
										<input type="checkbox" checked="" name="setting" value="enabled" />
									</calcite-switch>
								</label>
							</calcite-label>
							<calcite-block-section text="Color">
								<calcite-color-picker
									dir="ltr"
									hide-channels=""
									hide-saved=""
									scale="m"
									value={this.fill}
									appearance="default"
									name="fill"
									calcite-hydrated=""
									afterCreate={this.viewModel.fillCreated}
								></calcite-color-picker>
							</calcite-block-section>
							<calcite-block-section text="Fill transparency">
								<calcite-slider
									min="0"
									max="1"
									value={this.fillOpacity}
									bind={this}
									step="0.1"
									label="Opacity"
									label-handles=""
									ticks="0"
									page-step="5"
									name="fill-opacity"
									afterCreate={this.viewModel.fillOpacityCreated}
									snap=""
								></calcite-slider>
							</calcite-block-section>
						</calcite-block>
						<calcite-block key="outline" heading="Outline" open collapsible>
							<calcite-block-section text="Color">
								<calcite-color-picker
									dir="ltr"
									hide-channels=""
									hide-saved=""
									scale="m"
									value={this.outline}
									appearance="default"
									name="outline"
									calcite-hydrated=""
									afterCreate={this.viewModel.outlineCreated}
								></calcite-color-picker>
							</calcite-block-section>
							<calcite-block-section text="Outline transparency">
								<calcite-slider
									min="0"
									max="1"
									value={this.outlineOpacity}
									bind={this}
									step="0.1"
									label="Opacity"
									label-handles=""
									ticks="0"
									page-step="5"
									name="outline-opacity"
									afterCreate={this.viewModel.outlineOpacityCreated}
									snap=""
								></calcite-slider>
							</calcite-block-section>
							<calcite-block-section text="Stroke">
								<calcite-slider
									min="0"
									max="10"
									value={this.outlineWidth}
									bind={this}
									step="0.1"
									label="Width"
									label-handles=""
									ticks="0"
									page-step="5"
									name="width"
									afterCreate={this.viewModel.outlineWidthCreated}
									snap=""
								></calcite-slider>
							</calcite-block-section>
						</calcite-block>
					</div>
				) : (
					''
				)}
				{/* <calcite-accordion
					dir="ltr"
					scale="m"
					theme="light"
					appearance="default"
					icon-position="end"
					icon-type="chevron"
					selection-mode="single"
				>
					{this.geometryType === 'polygon' || this.geometryType === 'point' ? (
						<calcite-accordion-item key="fill" item-title="Fill Color">
							<calcite-color-picker
								dir="ltr"
								hide-channels=""
								hide-saved=""
								scale="m"
								value={this.fill}
								appearance="default"
								name="fill"
								calcite-hydrated=""
								afterCreate={this.viewModel.fillCreated}
							></calcite-color-picker>
							<calcite-slider
								min="0"
								max="1"
								value={this.fillOpacity}
								bind={this}
								step="0.1"
								label="Opacity"
								label-handles=""
								ticks="0"
								page-step="5"
								name="fill-opacity"
								afterCreate={this.viewModel.fillOpacityCreated}
								snap=""
							></calcite-slider>
						</calcite-accordion-item>
					) : (
						''
					)}
					{['point', 'polyline', 'polygon'].includes(this.geometryType) ? (
						<calcite-accordion-item key="outline" item-title="Outline Color">
							<calcite-color-picker
								dir="ltr"
								hide-channels=""
								hide-saved=""
								scale="m"
								value={this.outline}
								appearance="default"
								name="outline"
								calcite-hydrated=""
								afterCreate={this.viewModel.outlineCreated}
							></calcite-color-picker>
							<calcite-slider
								min="0"
								max="1"
								value={this.outlineOpacity}
								bind={this}
								step="0.1"
								label="Opacity"
								label-handles=""
								ticks="0"
								page-step="5"
								name="outline-opacity"
								afterCreate={this.viewModel.outlineOpacityCreated}
								snap=""
							></calcite-slider>
						</calcite-accordion-item>
					) : (
						''
					)}
					{['point', 'polyline', 'polygon'].includes(this.geometryType) ? (
						<calcite-accordion-item key="width" item-title="Outline Width">
							<calcite-slider
								min="0"
								max="10"
								value={this.outlineWidth}
								bind={this}
								step="0.1"
								label="Width"
								label-handles=""
								ticks="0"
								page-step="5"
								name="width"
								afterCreate={this.viewModel.outlineWidthCreated}
								snap=""
							></calcite-slider>
						</calcite-accordion-item>
					) : (
						''
					)}
					{this.geometryType === 'point' ? (
						<calcite-accordion-item key="size" item-title="Marker Size"></calcite-accordion-item>
					) : (
						''
					)}
				</calcite-accordion> */}
			</div>
		);
	}
}
