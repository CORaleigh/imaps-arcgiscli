import { Tip } from './Tip';
declare class Action {
    title: string;
    widget: any;
    icon: string;
    container: string;
    tool: boolean;
    tips: Tip[];
    constructor(title: string, widget: any, icon: string, container: string, tool: boolean, tips: Tip[]);
}
export { Action };
