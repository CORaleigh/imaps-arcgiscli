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
		let action = this.rightActions.find((action: Action) => {
			return action.container === (event.currentTarget as any).value;
		}) as Action;

		if (!action) {
			action = this.leftActions.find((action: Action) => {
				return action.container === (event.currentTarget as any).value;
			}) as Action;
		}

		action.widget.container = action.container;

		setTimeout(() => {
			action.widget.container
				.closest('calcite-shell-panel')
				.querySelector('calcite-flow:not([hidden=""])')
				?.setAttribute('hidden', '');

			action.widget.container.closest('calcite-flow')?.removeAttribute('hidden');

			action.widget.container.closest('calcite-panel')?.removeAttribute('dismissed');
			action.widget.container
				.closest('calcite-shell-panel')
				?.querySelector(`calcite-action.active`)
				?.classList.remove('active');
			(event.target as HTMLElement).classList.add('active');

			action.widget.container.closest('calcite-shell-panel')?.removeAttribute('collapsed');
		});
		// this.selectedAction.widget.container.closest('calcite-flow').setAttribute('hidden', '');
		// this.selectedAction = action;
		// this.selectedAction.widget.container = this.selectedAction.container;
		// this.selectedAction.widget.container.closest('calcite-flow').removeAttribute('hidden');
		// this.selectedAction.widget.container.closest('calcite-panel').removeAttribute('dismissed');

		// (event.currentTarget as HTMLElement).closest('calcite-shell-panel')?.removeAttribute('collapsed');

		// (event.currentTarget as HTMLElement).parentElement?.parentElement
		// 	?.querySelector('calcite-panel')
		// 	?.removeAttribute('dismissed');
	};

	actionCreated = (element: Element): void => {
		const observer: MutationObserver = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				(mutation.addedNodes[0] as HTMLElement)?.setAttribute('part', 'actionicon');
			});
			observer.disconnect();
		});
		requestAnimationFrame(() => {
			observer.observe(element.shadowRoot as Node, { childList: true });
		});
	};

	actionPanelCreated = (element: Element) => {
		element.addEventListener('calcitePanelDismissedChange', () => {
			element.closest('calcite-shell-panel')?.setAttribute('collapsed', '');
		});
		const observer: MutationObserver = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				(mutation.addedNodes[0] as HTMLElement)
					.querySelector('.content-container')
					?.setAttribute('style', 'height: 100%');
			});
			observer.disconnect();
		});
		requestAnimationFrame(() => {
			observer.observe(element?.shadowRoot as Node, { childList: true });

			this.resize();
		});
		//action.widget.container = action.container;
	};

	init(view: esri.MapView | esri.SceneView) {
		view.container = document.querySelector('#viewDiv') as HTMLDivElement;
	}
	rightActionsInit() {
		// const action: Action = actions[0];
		this.emit('ui-loaded', null);
		setTimeout(() => {
			document
				.querySelector('calcite-shell-panel[position="end"]')
				?.querySelector('calcite-action')
				?.dispatchEvent(new MouseEvent('click'));
			// 	action.widget.container = action.container;
			// 	action.widget.container.closest('calcite-flow').removeAttribute('hidden');
			// 	action.widget.container.closest('calcite-panel').removeAttribute('dismissed');
		});
	}

	resize = () => {
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
					action.addEventListener('click', this.actionClicked);
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
}