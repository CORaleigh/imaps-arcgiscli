/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import esri = __esri;

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';
import Measurement from '@arcgis/core/widgets/Measurement';
import CoordinateConversion from '@arcgis/core/widgets/CoordinateConversion';

import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';
import Widget from '@arcgis/core/widgets/Widget';

@subclass('app.widgets.Measure.MeasureViewModel')
export default class MeasureViewModel extends Widget {
	@property() view!: esri.MapView | esri.SceneView;
	@property() state!: string;
	measurement!: Measurement;
	constructor(params?: any) {
		super(params);
		whenDefinedOnce(this, 'view', this.init.bind(this));
	}

	measureCreated = (): void => {
		whenDefinedOnce(this, 'view', this.init.bind(this));
	};

	coordinateCreated = (): void => {
		new CoordinateConversion({ view: this.view, container: 'coordinateWidget' });
	};
	measureToggleCreated = (element: Element) => {
		element?.addEventListener(
			'calciteRadioGroupItemChange',
			(e: any) => {
				if (!e.target.hasAttribute('checked')) {
					if (e.target?.title === 'clear') {
						this.measurement.clear();
						this.state = 'inactive';
						document.querySelector('#coordinateWidget')?.setAttribute('hidden', '');
					} else if (e.target?.title === 'coordinates') {
						document.querySelector('#coordinateWidget')?.toggleAttribute('hidden');
						this.state = 'inactive';
					} else {
						this.measurement.activeTool = e.target?.title;
						document.querySelector('#coordinateWidget')?.setAttribute('hidden', '');
						this.state = 'active';
					}
				}
				if (this.state === 'active') {
					this.emit('activated', null);
				}
			},
			{ passive: true },
		);
	};
	init(view: esri.MapView | esri.SceneView) {
		this.measurement = new Measurement({ view: view, container: 'measureWidget' });
		this.watch('state', (state: string) => {
			if (state === 'inactive') {
				this.measurement.clear();
			}
		});
	}
}
