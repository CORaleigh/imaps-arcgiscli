import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx, vmEvent } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';
import MapView from '@arcgis/core/views/MapView';
import AppShellViewModel from './AppShell/AppShellViewModel';
import { Action } from './Action';
import './AppShell/styles/AppShell.scss';
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
		setTimeout(() => {
			observer.observe(elm as Node, { attributes: true });
		}, 500);
	};
	maximizedClicked = (event: Event): void => {
		const panel = document.querySelector('calcite-shell-panel[slot="contextual-panel"]');

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

		document.querySelector('calcite-tab-title:not([active])')?.dispatchEvent(new MouseEvent('click'));
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

	shellCreated = (): void => {};
	render(): tsx.JSX.Element {
		window.onresize = () => {
			if (window.innerWidth >= 1000) {
				const actionbar = document
					?.querySelector('calcite-shell-panel[position="start"]')
					?.querySelector('calcite-action-bar');
				document
					?.querySelector('calcite-shell-panel[position="end"]')
					?.querySelectorAll('.tool-action')
					?.forEach((action) => {
						actionbar?.append(action);
					});
				const panel = document?.querySelector('calcite-shell-panel[position="start"]');
				document
					?.querySelector('calcite-shell-panel[position="end"]')
					?.querySelectorAll('.tool-container')
					?.forEach((container) => {
						panel?.append(container);
					});
			} else {
				const actionbar = document
					?.querySelector('calcite-shell-panel[position="end"]')
					?.querySelector('calcite-action-bar');
				document
					?.querySelector('calcite-shell-panel[position="start"]')
					?.querySelectorAll('.tool-action')
					?.forEach((action) => {
						actionbar?.append(action);
						action.addEventListener('click', this.viewModel.actionClicked);
					});
				const flow = document
					?.querySelector('calcite-shell-panel[position="end"]')
					?.querySelector('calcite-flow:last-child');
				document
					?.querySelector('calcite-shell-panel[position="start"]')
					?.querySelectorAll('.tool-container')
					?.forEach((container) => {
						flow?.parentElement?.append(container);
					});
			}
		};

		return (
			<div class={CSS.base}>
				<calcite-shell dir="ltr" theme="light">
					<header slot="shell-header" class="heading header" afterCreate={this.shellCreated}>
						<h2>iMAPS</h2>
					</header>
					<calcite-shell-panel
						slot="primary-panel"
						position="start"
						afterCreate={this.shellPanelCreated}
						collapsed=""
					>
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
										class={action.tool ? 'tool-action' : ''}
										onclick={this.viewModel.actionClicked}
									></calcite-action>
								);
							})}
						</calcite-action-bar>
						{this.leftActions?.map((action: Action) => {
							return (
								<calcite-flow
									key={this.container + ' Flow'}
									hidden
									class={action.tool ? 'tool-container' : ''}
								>
									<calcite-panel
										dir="ltr"
										dismissible=""
										height-scale="m"
										intl-close="Close"
										theme="light"
										calcite-hydrated=""
										afterCreate={this.viewModel.actionPanelCreated}
									>
										<h3 class="heading" slot="header-content">
											{action.title}
										</h3>

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
								</calcite-flow>
							);
						})}
					</calcite-shell-panel>
					<div
						style="
    width:100%;
    height:100%;
    background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
      linear-gradient(-45deg, #ccc 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #ccc 75%),
      linear-gradient(-45deg, transparent 75%, #ccc 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    "
					></div>
					<calcite-shell-center-row height-scale="l" position="end" slot="center-row">
						<div
							style="
    width:100vw;
    background-color: var(--calcite-app-background-content);
    padding: var(--calcite-app-cap-spacing) var(--calcite-app-side-spacing);
    "
						>
							<div id="viewDiv" afterCreate={this.viewModel.viewCreated}></div>
						</div>
					</calcite-shell-center-row>
					<calcite-shell-panel
						slot="contextual-panel"
						position="end"
						afterCreate={this.shellPanelCreated}
						collapsed=""
					>
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
						{this.rightActions?.map((action: Action) => {
							return (
								<calcite-flow key={this.container + ' Flow'} hidden>
									<calcite-panel
										dir="ltr"
										dismissible=""
										intl-close="Close"
										theme="light"
										calcite-hydrated=""
										afterCreate={this.viewModel.actionPanelCreated}
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
								</calcite-flow>
							);
						})}
					</calcite-shell-panel>
				</calcite-shell>
			</div>
		);
	}
}
