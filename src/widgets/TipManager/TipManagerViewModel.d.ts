import Accessor from '@arcgis/core/core/Accessor';
import { Tip } from '../Tip';
export default class TipManagerViewModel extends Accessor {
    title: string;
    tips: Tip[];
    constructor(params?: any);
}
