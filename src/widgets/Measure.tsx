/* eslint-disable @typescript-eslint/no-explicit-any */
import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import MeasureViewModel from './Measure/MeasureViewModel';
import './Measure/styles/Measure.scss';
export interface MeasureProperties extends esri.WidgetProperties {
	name?: string;
	view?: esri.MapView | esri.SceneView;
}

const CSS = {
	base: 'esri-widget esri-component measure-base',
};

@subclass('app.widgets.Measure')
export default class Measure extends Widget {
	@aliasOf('viewModel.view')
	view!: esri.MapView | esri.SceneView;

	@aliasOf('viewModel.name')
	@renderable()
	name = '';

	@property({
		type: MeasureViewModel,
	})
	@renderable()
	viewModel: MeasureViewModel = new MeasureViewModel();

	radioItemCreated = (element: Element): void => {
		const observer: MutationObserver = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				(mutation.addedNodes[0] as HTMLElement)
					?.querySelector('calcite-icon')
					?.setAttribute('part', 'radio-icon');
				(mutation.addedNodes[0] as HTMLElement)?.setAttribute('part', 'radio-label');
			});
			observer.disconnect();
		});
		observer.observe(element.shadowRoot as Node, { childList: true });
	};
	constructor(properties?: MeasureProperties) {
		super(properties);
	}

	render(): tsx.JSX.Element {
		return (
			<div class={CSS.base}>
				<calcite-radio-group width="full" afterCreate={this.viewModel.measureToggleCreated}>
					<calcite-radio-group-item
						title="distance"
						value="distance"
						id="distanceItem"
						icon="measure"
						afterCreate={this.radioItemCreated}
					>
						Distance
					</calcite-radio-group-item>
					<calcite-radio-group-item
						title="area"
						value="area"
						id="areaItem"
						icon="measure-area"
						afterCreate={this.radioItemCreated}
					>
						Area
					</calcite-radio-group-item>
					<calcite-radio-group-item
						title="coordinates"
						value="coordinates"
						id="coordinateItem"
						icon="pin"
						afterCreate={this.radioItemCreated}
					>
						Coordinates
					</calcite-radio-group-item>
					<calcite-radio-group-item
						title="clear"
						value="clear"
						id="clearItem"
						icon="trash"
						afterCreate={this.radioItemCreated}
					>
						Clear
					</calcite-radio-group-item>
				</calcite-radio-group>
				<div afterCreate={this.viewModel.measureCreated} id="measureWidget"></div>
				<div id="coordinateWidget" afterCreate={this.viewModel.coordinateCreated} hidden></div>
			</div>
		);
	}
}
