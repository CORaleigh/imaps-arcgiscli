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

export function initView(shell: AppShell, map: __esri.Map | __esri.WebMap): void {
	let propertyPanel: PropertyPanel;
	const view: MapView = new MapView({ map: map, container: 'viewDiv' });
	view.when((view: MapView) => {
		const propertyLayer = view.map.allLayers.find((layer) => {
			return layer.title.includes('Property') && layer.type === 'feature';
		}) as FeatureLayer;
		const condoTable = view.map.allTables.find((layer) => {
			return layer.title.includes('Condo');
		}) as FeatureLayer;
		condoTable.popupTemplate = createTemplate(view);
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
		});
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
