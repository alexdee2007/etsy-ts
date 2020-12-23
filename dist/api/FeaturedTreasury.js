"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturedTreasury = void 0;
const client_1 = require("../client/client");
//methods class
class FeaturedTreasury {
    /**
     * Finds all FeaturedTreasuries.
     */
    static findAllFeaturedTreasuries(parameters, options) {
        return client_1.request("/featured_treasuries", parameters, "GET", options);
    }
    /**
     * Finds FeaturedTreasury by numeric ID.
     */
    static getFeaturedTreasuryById(parameters, options) {
        return client_1.request("/featured_treasuries/:featured_treasury_id", parameters, "GET", options);
    }
    /**
     * Finds all FeaturedTreasury by numeric owner_id.
     */
    static findAllFeaturedTreasuriesByOwner(parameters, options) {
        return client_1.request("/featured_treasuries/owner/:owner_id", parameters, "GET", options);
    }
}
exports.FeaturedTreasury = FeaturedTreasury;
