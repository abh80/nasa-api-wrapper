"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Tle {
    constructor(key) {
        if (!key)
            console.log('WARN:NO Key was provided this will affect other functions');
        this.key = key;
    }
    async search(q) {
        if (!q)
            throw new Error('No Search query was provided');
        const { data: res } = await axios_1.default.get(`https://data.ivanstanojevic.me/api/tle?search=${q}`);
        return res;
    }
    async get(q) {
        if (!q)
            throw new Error('No ID was provided');
        const { data: res } = await axios_1.default.get(`http://data.ivanstanojevic.me/api/tle/${q}`);
        return res;
    }
}
exports.default = Tle;
//# sourceMappingURL=tle.js.map