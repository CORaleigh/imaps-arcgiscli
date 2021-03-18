/* eslint-disable @typescript-eslint/no-explicit-any */
import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import TipManagerViewModel from './TipManager/TipManagerViewModel';
import { Tip } from './Tip';
import './TipManager/styles/TipManager.scss';
export interface TipManagerProperties extends esri.WidgetProperties {
	title?: string;
	tips?: Tip[];
}

const CSS = {
	base: 'tipmanager-base',
};

@subclass('app.widgets.TipManager')
export default class TipManager extends Widget {
	@aliasOf('viewModel.title')
	@renderable()
	title!: string;
	@renderable()
	@aliasOf('viewModel.tips')
	tips!: Tip[];

	@property({
		type: TipManagerViewModel,
	})
	@renderable()
	viewModel: TipManagerViewModel = new TipManagerViewModel();

	constructor(properties?: TipManagerProperties) {
		super(properties);

		this.watch('tips', (tips) => {
			if (tips.length) {
				(document.querySelector('calcite-tip-manager') as any).closed = false;
			}
		});
	}
	tipManagerCreated = (element: Element): void => {
		element?.addEventListener('calciteTipManagerToggle', (event) => {
			if ((event.target as any).closed) {
				this.tips = [];
			}
		});
	};

	render(): tsx.JSX.Element {
		return (
			<div class={CSS.base}>
				<calcite-tip-manager
					dir="ltr"
					intl-close="Close"
					intl-default-title={this.title}
					intl-pagination-label="Tip"
					intl-next="Next"
					intl-previous="Previous"
					theme="light"
					afterCreate={this.tipManagerCreated}
					closed
				>
					{this.tips.map((tip) => {
						return (
							<calcite-tip heading={tip.title} key={tip.title}>
								{tip.description}
							</calcite-tip>
						);
					})}
				</calcite-tip-manager>
			</div>
		);
	}
}
