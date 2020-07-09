"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class APOD {
    constructor(key) {
        if (!key)
            throw new Error('No Nasa Api key was provided');
        this.key = key;
    }
    async getImage() {
        const { data: res } = await axios_1.default.get(`https://api.nasa.gov/planetary/apod?api_key=${this.key}`);
        return res.url;
    }
    async getData() {
        const { data: res } = await axios_1.default.get(`https://api.nasa.gov/planetary/apod?api_key=${this.key}`);
        return res;
    }
}
exports.default = APOD;
//# sourceMappingURL=apod.js.map