import apod from './functions/apod';
import MarsRoverImage from './functions/mrp';
import Earth from './functions/earth';
import Insight from './functions/insight';
import _techport from './functions/techport';
import _Nivl from './functions/nivl';
import _tle from './functions/tle';
export default class {
    key: string;
    apod: apod;
    MarsRoverImage: MarsRoverImage;
    Earth: Earth;
    Insight: Insight;
    NIVL: _Nivl;
    Techport: _techport;
    Tle: _tle;
    constructor(key: string);
}
