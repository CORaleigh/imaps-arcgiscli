/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import esri = __esri;

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';
import { Action } from '../Action';
import Widget from '@arcgis/core/widgets/Widget';

@subclass('app.widgets.AppShell.AppShellViewModel')
export default class AppShellViewModel extends Widget {
	@property() view!: esri.MapView | esri.SceneView;
	@property() map!: esri.Map | esri.WebMap;
	@property() leftActions!: Action[];
	@property() rightActions!: Action[];
	@property()
	selectedAction!: Action;
	@property()
	title!: string;
	@property()
	container!: string;
	constructor(params?: any) {
		super(params);
	}
	viewCreated = (): void => {
		whenDefinedOnce(this, 'view', this.init.bind(this));
		whenDefinedOnce(this, 'rightActions', this.rightActionsInit.bind(this));
	};

	actionClicked = (event: Event) => {
		const clicked = (event as MouseEvent).screenX > 0;

		let action = this.rightActions.find((action: Action) => {
			return action.container === (event.currentTarget as any).value;
		}) as Action;

		if (!action) {
			action = this.leftActions.find((action: Action) => {
				return action.container === (event.currentTarget as any).value;
			}) as Action;
		}
		if ((event.target as HTMLElement).classList.contains('active')) {
			if (clicked) {
				document.getElementById(action.container)?.closest('calcite-panel')?.setAttribute('dismissed', '');

				(event.target as HTMLElement).classList.remove('active');
			}
		} else {
			action.widget.container = action.container;
			(event.target as any)
				?.closest('.panel')
				?.querySelectorAll('calcite-panel')
				.forEach((panel: any) => {
					panel.setAttribute('dismissed', '');
				});

			action.widget.container
				.closest('.panel')
				?.querySelector(`calcite-action.active`)
				?.classList.remove('active');
			(event.target as HTMLElement).classList.add('active');
			document.getElementById(action.container)?.closest('calcite-panel')?.removeAttribute('dismissed');
		}
	};

	actionCreated = (element: Element): void => {
		// const observer: MutationObserver = new MutationObserver((mutations) => {
		// 	mutations.forEach((mutation) => {
		// 		(mutation.addedNodes[0] as HTMLElement)
		// 			?.querySelector('calcite-icon')
		// 			?.setAttribute('part', 'actionicon');
		// 	});
		// 	observer.disconnect();
		// });
		element.addEventListener('click', this.actionClicked);
		setTimeout(() => {
			element.shadowRoot?.querySelector('calcite-icon')?.setAttribute('part', 'actionicon');
			//observer.observe(element.shadowRoot as Node, { childList: true });
		}, 1000);
	};
	panelDismissed = (event: Event) => {
		if ((event.target as any).dismissed) {
			(event.target as HTMLElement)?.parentElement
				?.querySelector('calcite-action-bar calcite-action.active')
				?.classList.remove('active');
		}
	};
	actionPanelCreated = (element: Element) => {
		element.addEventListener('calcitePanelDismissedChange', this.panelDismissed);
		const observer: MutationObserver = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				(mutation.addedNodes[0] as HTMLElement)
					.querySelector('.content-container')
					?.setAttribute('style', 'height: 100%');
			});
			observer.disconnect();
		});
		setTimeout(() => {
			observer.observe(element?.shadowRoot as Node, { childList: true });

			this.resize();
		}, 1000);
	};

	init(view: esri.MapView | esri.SceneView) {
		view.container = document.querySelector('#viewDiv') as HTMLDivElement;
	}
	rightActionsInit() {
		this.emit('ui-loaded', null);
		setTimeout(() => {
			const action = document.querySelector('calcite-action[text="Property Search"]');
			(action as HTMLElement).click();
			//
			// const action = document.querySelector('calcite-action[text="Property Search"]');
			// if (!action?.classList.contains('active')) {
			// 	action?.closest('calcite-action.active')?.classList.remove('active');
			// 	action?.classList.add('active');
			// 	const panel = action?.closest('.panel')?.querySelector('calcite-panel[dismissed]');
			// 	action
			// 		?.closest('.panel')
			// 		?.querySelector('calcite-panel:not([dismissed])')
			// 		?.setAttribute('dismissed', '');
			// 	panel?.removeAttribute('dismissed');

			// }
		}, 1000);
	}

	resize = () => {
		if (window.innerWidth >= 1000) {
			const actionbar = document?.querySelector('calcite-action-bar:first-child');
			document
				?.querySelector('calcite-action-bar:last-child')
				?.querySelectorAll('.tool-action')
				?.forEach((action) => {
					actionbar?.appendChild(action);
				});
			const panel = document?.querySelector('.panel:first-child');
			document?.querySelectorAll('calcite-panel.tool-container')?.forEach((container) => {
				panel?.appendChild(container);
			});
		} else {
			const actionbar = document?.querySelector('calcite-action-bar:last-child');
			document
				?.querySelector('calcite-action-bar:first-child')
				?.querySelectorAll('.tool-action')
				?.forEach((action) => {
					actionbar?.appendChild(action);
				});
			const panel = document?.querySelector('.panel:last-child');
			document?.querySelectorAll('calcite-panel.tool-container')?.forEach((container) => {
				panel?.insertBefore(container, panel.querySelector('calcite-action-bar'));
			});
		}
	};
}
