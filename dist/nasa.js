"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apod_1 = __importDefault(require("./functions/apod"));
const mrp_1 = __importDefault(require("./functions/mrp"));
const earth_1 = __importDefault(require("./functions/earth"));
const insight_1 = __importDefault(require("./functions/insight"));
const techport_1 = __importDefault(require("./functions/techport"));
const nivl_1 = __importDefault(require("./functions/nivl"));
const tle_1 = __importDefault(require("./functions/tle"));
class default_1 {
    constructor(key) {
        if (!key)
            throw new Error('No Nasa Api key was provided');
        this.key = key;
        this.apod = new apod_1.default(key);
        this.MarsRoverImage = new mrp_1.default(key);
        this.Earth = new earth_1.default(key);
        this.Insight = new insight_1.default(key);
        this.NIVL = new nivl_1.default(key);
        this.Techport = new techport_1.default(key);
        this.Tle = new tle_1.default(key);
    }
}
exports.default = default_1;
//# sourceMappingURL=nasa.js.map