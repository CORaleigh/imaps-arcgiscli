import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import PropertyPanelViewModel from './PropertyPanel/PropertyPanelViewModel';
import './PropertyPanel/styles/PropertyPanel.scss';
export interface PropertyPanelProperties extends __esri.WidgetProperties {
	view?: __esri.MapView | __esri.SceneView;
	propertyLayer?: __esri.FeatureLayer;
	condoTable?: __esri.FeatureLayer;
	addressTable?: __esri.FeatureLayer;
	geometry?: __esri.Geometry;
}

const CSS = {
	base: 'esri-widget propertypanel-base',
};

@subclass('app.widgets.PropertyPanel')
export default class PropertyPanel extends Widget {
	@aliasOf('viewModel.view')
	view!: __esri.MapView | __esri.SceneView;
	@aliasOf('viewModel.propertyLayer')
	propertyLayer!: __esri.FeatureLayer;
	@aliasOf('viewModel.condoTable')
	condoTable!: __esri.FeatureLayer;
	@aliasOf('viewModel.addressTable')
	addressTable!: __esri.FeatureLayer;
	@aliasOf('viewModel.geometry')
	geometry!: __esri.Geometry;
	@aliasOf('viewModel.maximized')
	maximized!: boolean;
	@property({
		type: PropertyPanelViewModel,
	})
	@renderable()
	viewModel: PropertyPanelViewModel = new PropertyPanelViewModel();

	constructor(properties?: PropertyPanelProperties) {
		super(properties);
	}

	scrollArrowCreated = (element: Element): void => {
		const container = this.viewModel.featureWidget.container as HTMLElement;
		element?.addEventListener(
			'click',
			() => {
				container?.parentElement?.scrollBy({
					top: container.offsetHeight,
					behavior: 'smooth',
				});
			},
			{ passive: true },
		);
		container?.addEventListener(
			'scroll',
			() => {
				if (container.scrollTop >= container.scrollHeight - container.offsetHeight - 1) {
					document.querySelector('#scrollArrow')?.classList.add('hidden');
				} else {
					document.querySelector('#scrollArrow')?.classList.remove('hidden');
				}
			},
			{ passive: true },
		);
	};

	render(): tsx.JSX.Element {
		return (
			<div class={CSS.base}>
				<div id="searchDiv" afterCreate={this.viewModel.searchDivCreated}></div>
				<calcite-tabs layout="center" position="below" calcite-hydrated="">
					<calcite-tab-nav slot="tab-nav" role="tablist" layout="center" position="below" calcite-hydrated="">
						<calcite-tab-title
							active
							name="list"
							aria-expanded="true"
							dir="ltr"
							hastext=""
							id="listTabTitle"
							role="tab"
							tabindex="0"
							layout="center"
							position="below"
							calcite-hydrated=""
						>
							List
						</calcite-tab-title>
						<calcite-tab-title
							name="details"
							aria-expanded="false"
							dir="ltr"
							hastext=""
							id="detailsTabTitle"
							role="tab"
							tabindex="0"
							layout="center"
							position="below"
							calcite-hydrated=""
							disabled
						>
							Details
						</calcite-tab-title>
					</calcite-tab-nav>

					<calcite-tab aria-expanded="true" id="listTab" role="tabpanel" calcite-hydrated="">
						<div id="table"></div>
					</calcite-tab>
					<calcite-tab aria-expanded="false" id="detailsTab" role="tabpanel" calcite-hydrated="">
						<div id="featureDiv" afterCreate={this.viewModel.featureDivCreated}></div>
						<div
							afterCreate={this.scrollArrowCreated}
							id="scrollArrow"
							class="home-page__scroll-down-arrow home-page__scroll-down-arrow--black"
							data-dojo-attach-point="arrowContainer"
						>
							<svg viewBox="0 0 32 32" width="32" height="32" class="icon-inline  ">
								<path
									id="arrowPath"
									stroke="black"
									stroke-opacity="0.5"
									d="M16.5 27.207l-4.854-4.854.707-.707L16 25.293V5h1v20.293l3.646-3.646.707.707z"
								></path>
							</svg>
						</div>
					</calcite-tab>
				</calcite-tabs>
			</div>
		);
	}
}
