import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx, vmEvent } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import PropertyTableViewModel from './PropertyTable/PropertyTableViewModel';
import './PropertyTable/styles/PropertyTable.scss';

export interface PropertyTableProperties extends esri.WidgetProperties {
	condoTable?: esri.FeatureLayer;
	propertyLayer?: esri.FeatureLayer;

	view?: esri.MapView | esri.SceneView;
	definitionExpression?: string;
}

const CSS = {
	base: 'esri-widget esri-grid PropertyTable-base',
};
@subclass('app.widgets.PropertyTable')
export default class PropertyTable extends Widget {
	@aliasOf('viewModel.view')
	view!: esri.MapView | esri.SceneView;

	@aliasOf('viewModel.condoTable')
	condoTable!: esri.FeatureLayer;
	@aliasOf('viewModel.propertyLayer')
	propertyLayer!: esri.FeatureLayer;
	@aliasOf('viewModel.definitionExpression')
	definitionExpression!: string;
	@renderable()
	@aliasOf('viewModel.fields')
	fields!: esri.FieldInfo[];
	@property({
		type: PropertyTableViewModel,
	})
	@renderable()
	@aliasOf('viewModel.count')
	count!: number;
	@vmEvent(['feature-selected'])
	viewModel: PropertyTableViewModel = new PropertyTableViewModel();

	constructor(properties?: PropertyTableProperties) {
		super(properties);
	}

	render(): tsx.JSX.Element {
		return (
			<div class={CSS.base}>
				<div class="esri-feature-table__header">
					<div class="esri-feature-table__loader-container">
						<div class="esri-feature-table__loader"></div>
					</div>
					<div class="esri-feature-table__title">Features: {this.count}</div>
					<div class="esri-feature-table__menu">
						<div data-node-ref="_rootNode" class="esri-button-menu esri-widget">
							<button
								aria-pressed="false"
								aria-controls="1783678efcd-widget-1-menu"
								aria-haspopup="true"
								aria-label="Options"
								class="esri-button-menu__button "
								id="menuButton"
								title="Options"
								tabindex="0"
								type="button"
							></button>
						</div>
					</div>
				</div>
				<vaadin-grid
					afterCreate={this.viewModel.featureTableCreated}
					aria-label="Sorting Example"
					theme="compact"
					style="min-height: 100%; height: 100%"
					class="esri-widget esri-grid"
				>
					{/* <vaadin-grid-column
						path="attributes.SITE_ADDRESS"
						header="Address"
						id="addresscolumn"
						width="10em"
					></vaadin-grid-column>
					<vaadin-grid-column
						flex-grow="0"
						header="Owner"
						path="attributes.OWNER"
						id="ownercolumn"
						width="10em"
					></vaadin-grid-column>
					<vaadin-grid-column width="8em" path="attributes.PIN_NUM" header="PIN"></vaadin-grid-column>
					<vaadin-grid-column width="4em" path="attributes.PIN_EXT" header="PIN Ext"></vaadin-grid-column>
					<vaadin-grid-column width="6em" path="attributes.REID" header="REID"></vaadin-grid-column> */}
				</vaadin-grid>
			</div>
		);
	}
}
