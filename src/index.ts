// Map data
import { map } from './data/app';

// widget utils
import { initWidgets, initView } from './widgets';
import AppShell from './widgets/AppShell';

/**
 * Initialize application
 */
// const view = new MapView({
// 	map,
// });

const shell = new AppShell({ container: 'shell', map: map });
initWidgets(shell);
shell.on('ui-loaded', () => {
	//view.when(() => {
	initView(shell, map);
	//});
});
