import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx, vmEvent } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';
import AppShellViewModel from './AppShell/AppShellViewModel';
import { Action } from './Action';
import './AppShell/styles/AppShell.scss';
import HeaderMenu from './HeaderMenu';
export interface AppShellProperties extends esri.WidgetProperties {
	name?: string;
	view?: esri.MapView | esri.SceneView;
	map?: esri.Map | esri.WebMap;
}

const CSS = {
	base: 'esri-widget appshell-base',
};

@subclass('app.widgets.AppShell')
export default class AppShell extends Widget {
	@aliasOf('viewModel.view')
	view!: esri.MapView | esri.SceneView;
	@aliasOf('viewModel.map')
	map!: esri.Map | esri.WebMap;
	@aliasOf('viewModel.leftActions')
	leftActions!: Action[];
	@aliasOf('viewModel.rightActions')
	rightActions!: Action[];

	@renderable()
	@aliasOf('viewModel.selectedAction')
	selectedAction!: Action;
	@vmEvent(['ui-loaded'])
	@property({
		type: AppShellViewModel,
	})
	@renderable()
	viewModel: AppShellViewModel = new AppShellViewModel();

	constructor(properties?: AppShellProperties) {
		super(properties);
	}
	shellPanelCreated = (elm: Element): void => {
		setTimeout(() => {
			elm.shadowRoot?.querySelector('.content')?.setAttribute('part', 'content');
		}, 100);
	};
	maximizedClicked = (event: Event): void => {
		const panel = (event.target as HTMLElement).closest('calcite-panel');

		if (panel?.classList.contains('maximized')) {
			(event.target as HTMLElement)?.shadowRoot?.querySelector('calcite-icon')?.setAttribute('icon', 'left-edge');

			panel?.classList.remove('maximized');
		} else {
			(event.target as HTMLElement)?.shadowRoot
				?.querySelector('calcite-icon')
				?.setAttribute('icon', 'right-edge');
			panel?.classList.add('maximized');
		}
		//workaround to handle tab indicator not repositioning after resize of panel
		document.querySelector('calcite-tab:not([active])')?.classList.add('esri-hidden');
		document.querySelector('calcite-tab:not([active])')?.toggleAttribute('disabled');

		//document.querySelector('calcite-tab-title:not([active])')?.dispatchEvent(new MouseEvent('click'));

		requestAnimationFrame(() => {
			document.querySelector('calcite-tab:not([active])')?.toggleAttribute('disabled');

			document.querySelector('calcite-tab-title:not([active])')?.dispatchEvent(new MouseEvent('click'));
			document.querySelector('calcite-tab.esri-hidden')?.classList.remove('esri-hidden');
		});
	};
	panelCreated = (elm: Element): void => {
		const observer: MutationObserver = new MutationObserver((mutations) => {
			if (mutations.length) {
				(mutations[0].target as HTMLElement)?.shadowRoot
					?.querySelector('.content')
					?.setAttribute('part', 'content');
				observer.disconnect();
			} else {
				observer.disconnect();
			}
		});
		observer.observe(elm as Node, { attributes: true });
	};

	headerCreated = (): void => {
		new HeaderMenu({ view: this.view, container: 'header' });
	};

	render(): tsx.JSX.Element {
		window.onresize = () => {
			if (window.innerWidth >= 1000) {
				const actionbar = document?.querySelector('calcite-action-bar:first-child');
				document
					?.querySelector('calcite-action-bar:last-child')
					?.querySelectorAll('.tool-action')
					?.forEach((action) => {
						actionbar?.append(action);
					});
				const panel = document?.querySelector('.panel:first-child');
				document?.querySelectorAll('calcite-panel.tool-container')?.forEach((container) => {
					panel?.append(container);
				});
			} else {
				const actionbar = document?.querySelector('calcite-action-bar:last-child');
				document
					?.querySelector('calcite-action-bar:first-child')
					?.querySelectorAll('.tool-action')
					?.forEach((action) => {
						actionbar?.append(action);
						action.addEventListener('click', this.viewModel.actionClicked);
					});
				const panel = document?.querySelector('.panel:last-child');
				document?.querySelectorAll('calcite-panel.tool-container')?.forEach((container) => {
					panel?.insertBefore(container, panel.querySelector('calcite-action-bar'));
				});
			}
		};

		return (
			<div class={CSS.base}>
				<div id="header" afterCreate={this.headerCreated}></div>
				<div id="container">
					<div id="leftPanel" class="panel">
						<calcite-action-bar theme="light" slot="action-bar">
							{this.leftActions?.map((action) => {
								return (
									<calcite-action
										text={action.title}
										label={action.title}
										icon={action.icon}
										value={action.container}
										key={action.title}
										afterCreate={this.viewModel.actionCreated}
										bind={this}
										onclick={this.viewModel.actionClicked}
										class="tool-action"
									></calcite-action>
								);
							})}
						</calcite-action-bar>
						{this.leftActions?.map((action: Action) => {
							return (
								<calcite-panel
									key={this.container + ' Flow'}
									dir="ltr"
									dismissible=""
									intl-close="Close"
									theme="light"
									calcite-hydrated=""
									afterCreate={this.viewModel.actionPanelCreated}
									class="tool-container"
									dismissed
								>
									<h3 class="heading" slot="header-content">
										{action.title}
									</h3>
									<calcite-action
										class="maximize"
										text="Action"
										label="Action"
										slot="header-actions-end"
										icon="left-edge"
										bind={this}
										onclick={this.maximizedClicked}
										hidden={action.title != 'Property Search'}
									></calcite-action>
									<calcite-action
										text="Action"
										label="Action"
										slot="header-actions-end"
										icon="lightbulb"
										appearance="solid"
										scale="m"
										calcite-hydrated=""
										hidden={!action.tips.length}
									></calcite-action>
									<div id={action.container} key={action.container} class="action-panel"></div>
								</calcite-panel>
							);
						})}
					</div>
					<div id="viewDiv" afterCreate={this.viewModel.viewCreated}></div>
					<div id="rightPanel" class="panel">
						{this.rightActions?.map((action: Action) => {
							return (
								<calcite-panel
									key={this.container + ' Flow'}
									dir="ltr"
									dismissible=""
									intl-close="Close"
									theme="light"
									calcite-hydrated=""
									afterCreate={this.viewModel.actionPanelCreated}
									dismissed
								>
									<h3 class="heading" slot="header-content">
										{action.title}
									</h3>
									<calcite-action
										class="maximize"
										text="Action"
										label="Action"
										slot="header-actions-end"
										icon="left-edge"
										bind={this}
										onclick={this.maximizedClicked}
										hidden={action.title != 'Property Search'}
									></calcite-action>
									<calcite-action
										text="Action"
										label="Action"
										slot="header-actions-end"
										icon="lightbulb"
										appearance="solid"
										scale="m"
										calcite-hydrated=""
										hidden={!action.tips.length}
									></calcite-action>
									<div id={action.container} key={action.container} class="action-panel"></div>
								</calcite-panel>
							);
						})}
						<calcite-action-bar theme="light" slot="action-bar">
							{this.rightActions?.map((action) => {
								return (
									<calcite-action
										text={action.title}
										label={action.title}
										icon={action.icon}
										value={action.container}
										key={action.title}
										afterCreate={this.viewModel.actionCreated}
										bind={this}
										onclick={this.viewModel.actionClicked}
									></calcite-action>
								);
							})}
						</calcite-action-bar>
					</div>
				</div>
			</div>
		);
	}
}
