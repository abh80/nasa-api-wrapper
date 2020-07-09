"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Techport {
    constructor(key) {
        this.key = key;
    }
    async get(id) {
        if (!id)
            throw new Error('No ID Parameter was provided');
        const { data: res } = await axios_1.default.get(`https://api.nasa.gov/techport/api/projects/${id}?api_key=${this.key}`);
        return res;
    }
}
exports.default = Techport;
//# sourceMappingURL=techport.js.map