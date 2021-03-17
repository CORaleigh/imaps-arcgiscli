// Widgets
import Legend from '@arcgis/core/widgets/Legend';
import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import Print from '@arcgis/core/widgets/Print';

import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import AppShell from './widgets/AppShell';
import PropertyPanel from './widgets/Property/PropertyPanel';
import { createTemplate } from './data/PropertyInfoTemplate';
import PropertySelect from './widgets/PropertySelect';
import Layers from './widgets/Layers';
import Measure from './widgets/Measure';
import { Tip } from './widgets/Tip';
import LocationSearch from './widgets/LocationSearch';
import { Action } from './widgets/Action';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';

export function initView(shell: AppShell, map: __esri.Map | __esri.WebMap): void {
	let propertyPanel: PropertyPanel;
	const view: MapView = new MapView({ map: map, container: 'viewDiv' });
	view.when((view: MapView) => {
		checkLocalStorage(view);
		const propertyLayer = view.map.allLayers.find((layer) => {
			return layer.title.includes('Property') && layer.type === 'feature';
		}) as FeatureLayer;
		const condoTable = view.map.allTables.find((layer) => {
			return layer.title.includes('Condo');
		}) as FeatureLayer;
		condoTable.load().then(() => {
			condoTable.popupTemplate = createTemplate(view, condoTable);
		});
		const addressTable = view.map.allTables.find((layer) => {
			return layer.title.includes('Addresses');
		}) as FeatureLayer;

		shell.leftActions.forEach((action) => {
			action.widget.view = view;
		});
		shell.rightActions.forEach((action) => {
			if (action.title === 'Property Search') {
				action.widget.propertyLayer = propertyLayer;
				action.widget.condoTable = condoTable;
				action.widget.addressTable = addressTable;
				propertyPanel = action.widget;
			}
			action.widget.view = view;
		});
		view.on('hold', (event) => {
			propertyPanel.geometry = event.mapPoint;
			// const action = document.querySelector('.panel:last-child calcite-action-bar calcite-action');
			// if (!action?.classList.contains('active')) {
			// 	action?.dispatchEvent(new MouseEvent('click'));
			// }
		});
	});
	document.addEventListener('visibilitychange', function () {
		// fires when user switches tabs, apps, goes to homescreen, etc.
		if (document.visibilityState == 'hidden') {
			view.map.removeMany(
				view.map.allLayers
					.filter((layer) => {
						return layer.type === 'group' && !(layer as __esri.GroupLayer).layers.length;
					})
					.toArray(),
			);
			const json = (view.map as any).toJSON();
			json.initialState.viewpoint.targetGeometry = view.extent;
			window.localStorage.setItem('imaps', JSON.stringify(json));
		}

		// fires when app transitions from prerender, user returns to the app / tab.
		if (document.visibilityState == 'visible') {
		}
	});
}

export function initWidgets(shell: AppShell): void {
	const legend = new Legend();
	const layerList = new Layers();
	const print = new Print();
	const select = new PropertySelect();
	const bookmarks = new Bookmarks({ editingEnabled: true });
	const measure = new Measure({});
	const basemaps = new BasemapGallery({});
	const location = new LocationSearch({});
	// view.ui.add(legend, 'bottom-left');
	// view.ui.add(layerList, 'top-right');
	// const propertyLayer = view.map.allLayers.find((layer) => {
	// 	return layer.title.includes('Property') && layer.type === 'feature';
	// }) as FeatureLayer;
	// const condoTable = view.map.allTables.find((layer) => {
	// 	return layer.title.includes('Condo');
	// }) as FeatureLayer;
	// condoTable.popupTemplate = createTemplate(view);
	// const addressTable = view.map.allTables.find((layer) => {
	// 	return layer.title.includes('Addresses');
	// }) as FeatureLayer;
	// const propertyPanel = new PropertyPanel({
	// 	view: view,
	// 	propertyLayer: propertyLayer,
	// 	condoTable: condoTable,
	// 	addressTable,
	// });
	const propertyPanel = new PropertyPanel({});
	let activetool = '';
	select.on('selection-complete', (graphic: __esri.Graphic) => {
		propertyPanel.geometry = graphic.geometry;

		const action = document.querySelector('.panel:last-child calcite-action-bar calcite-action');
		if (!action?.classList.contains('active')) {
			action?.dispatchEvent(new MouseEvent('click'));
		}
	});
	select.on('activated', () => {
		if (activetool === 'measure') {
			measure.state = 'inactive';
		}
		activetool = 'select';
	});
	measure.on('activated', () => {
		activetool = 'measure';
	});
	shell.rightActions = [
		new Action('Property Search', propertyPanel, 'search', 'propertySearchDiv', false, [
			new Tip(
				'Wildcard Search',
				'To search by a portion of an owner name or address, hit enter without selecting form the list of suggestions.',
			),
			new Tip(
				'Wildcard Search',
				'To search by a portion of an owner name or address, hit enter without selecting form the list of suggestions.',
			),
		]),
		new Action('Location Search', location, 'pin', 'locationSearchDiv', false, []),
		new Action('Layers', layerList, 'layers', 'layerListDiv', false, []),
		new Action('Legend', legend, 'legend', 'legendDiv', false, []),
		new Action('Basemaps', basemaps, 'basemap', 'basemapDiv', false, []),
	];
	shell.leftActions = [
		new Action('Select', select, 'selection', 'selectDiv', true, []),
		new Action('Measure', measure, 'measure', 'measureDiv', true, []),
		new Action('Bookmarks', bookmarks, 'bookmark', 'bookmarksDiv', true, []),
		new Action('Print', print, 'print', 'printDiv', true, []),
	];
	//return view;
}

function checkLocalStorage(view: MapView): void {
	if (window.localStorage.getItem('imaps')) {
		const webmap: WebMap = WebMap.fromJSON(JSON.parse(window.localStorage.getItem('imaps') as string));
		webmap.load().then(() => {
			view.map.allLayers.forEach((layer) => {
				const lyr = webmap.allLayers.find((l) => {
					return layer.id === l.id;
				});
				layer.visible = lyr?.visible;
				layer.opacity = lyr?.opacity;
			});
			view.map.basemap = webmap.basemap;
			view.extent = webmap.initialViewProperties.viewpoint.targetGeometry.extent;
		});
	}
}
