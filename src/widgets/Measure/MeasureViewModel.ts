/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import esri = __esri;

import Accessor from '@arcgis/core/core/Accessor';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';
import Measurement from '@arcgis/core/widgets/Measurement';
import CoordinateConversion from '@arcgis/core/widgets/CoordinateConversion';

import { whenDefinedOnce } from '@arcgis/core/core/watchUtils';

@subclass('app.widgets.Measure.MeasureViewModel')
export default class MeasureViewModel extends Accessor {
	@property() view!: esri.MapView | esri.SceneView;
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
						document.querySelector('#coordinateWidget')?.setAttribute('hidden', '');
					} else if (e.target?.title === 'coordinates') {
						document.querySelector('#coordinateWidget')?.toggleAttribute('hidden');
					} else {
						this.measurement.activeTool = e.target?.title;
						document.querySelector('#coordinateWidget')?.setAttribute('hidden', '');
					}
				}
			},
			{ passive: true },
		);
	};
	init(view: esri.MapView | esri.SceneView) {
		this.measurement = new Measurement({ view: view, container: 'measureWidget' });
	}
}
