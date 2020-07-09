"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Earth {
    constructor(key) {
        if (!key)
            throw new Error('No Nasa Api key was provided');
        this.key = key;
    }
    async getImage(lat, lon, date) {
        if (!lat)
            throw new Error('No latitude was provided');
        if (!lon)
            throw new Error('No longitude was provided');
        const { data: res } = await axios_1.default.get(`https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&&dim=0.10&api_key=${this.key}`);
        return res.url;
    }
    async getData(lat, lon, date) {
        if (!lat)
            throw new Error('No latitude was provided');
        if (!lon)
            throw new Error('No longitude was provided');
        if (!date)
            throw new Error('No date was provided');
        const { data: res } = await axios_1.default.get(`https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&&dim=0.10&api_key=${this.key}`);
        return res;
    }
}
exports.default = Earth;
//# sourceMappingURL=earth.js.map