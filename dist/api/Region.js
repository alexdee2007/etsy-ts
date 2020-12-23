"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = void 0;
const client_1 = require("../client/client");
//methods class
class Region {
    /**
     * Finds all Region.
     */
    static findAllRegion(parameters, options) {
        return client_1.request("/regions", parameters, "GET", options);
    }
    /**
     * Retrieves a Region by id.
     */
    static getRegion(parameters, options) {
        return client_1.request("/regions/:region_id", parameters, "GET", options);
    }
    /**
     *
     */
    static findEligibleRegions(parameters, options) {
        return client_1.request("/regions/eligible", parameters, "GET", options);
    }
}
exports.Region = Region;
