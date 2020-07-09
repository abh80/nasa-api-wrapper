"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class NIVL {
    constructor(key) {
        this.key = key;
        this.base = 'https://images-api.nasa.gov/';
    }
    async search(q) {
        if (!q)
            throw new Error('No query was provided');
        const { data: res } = await axios_1.default.get(this.base + `search?q=${q}`);
        return res;
    }
    async asset(id) {
        if (!id)
            throw new Error('No Nasa ID was provided');
        const { data: res } = await axios_1.default.get(this.base + `asset/${id}`);
        return res;
    }
    async metadata(id) {
        if (!id)
            throw new Error('No Nasa ID was provided');
        const { data: res } = await axios_1.default.get(this.base + `metadata/${id}`);
        return res;
    }
    async captions(id) {
        if (!id)
            throw new Error('No Nasa ID was provided');
        const { data: res } = await axios_1.default.get(this.base + `captions/${id}`);
        return res;
    }
}
exports.default = NIVL;
//# sourceMappingURL=nivl.js.map