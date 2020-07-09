"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Insight {
    constructor(key) {
        if (!key)
            throw new Error('No Nasa Api key was provided');
        this.key = key;
    }
    async get() {
        const { data: res } = await axios_1.default.get(`https://api.nasa.gov/insight_weather/?api_key=${this.key}&feedtype=json&ver=1.0`);
        return res;
    }
}
exports.default = Insight;
//# sourceMappingURL=insight.js.map