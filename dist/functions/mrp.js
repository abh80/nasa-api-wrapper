"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class MarsRoverImage {
    constructor(key) {
        if (!key)
            throw new Error('No Nasa Api key was provided');
        this.key = key;
    }
    async curiosity(sols, camera) {
        if (!sols)
            sols = Math.floor(Math.random() * 2000);
        if (!camera)
            camera = 'fhaz';
        const { data: res } = await axios_1.default.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sols}&camera=${camera}&api_key=${this.key}`);
        return res;
    }
    async spirit(sols, camera) {
        if (!sols)
            sols = Math.floor(Math.random() * 2000);
        if (!camera)
            camera = 'fhaz';
        const { data: res } = await axios_1.default.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=${sols}&camera=${camera}&api_key=${this.key}`);
        if (res.photos.length === 0)
            throw new Error('No image found for selected sol');
        return res;
    }
    async opportunity(sols, camera) {
        if (!sols)
            sols = Math.floor(Math.random() * 2000);
        if (!camera)
            camera = 'fhaz';
        const { data: res } = await axios_1.default.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=${sols}&camera=${camera}&api_key=${this.key}`);
        if (res.photos.length === 0)
            throw new Error('No image found for selected sol');
        return res;
    }
}
exports.default = MarsRoverImage;
//# sourceMappingURL=mrp.js.map