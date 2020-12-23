"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taxonomy = void 0;
const client_1 = require("../client/client");
//methods class
class Taxonomy {
    /**
     * Retrieve the entire taxonomy as seen by buyers in search.
     */
    static getBuyerTaxonomy(parameters, options) {
        return client_1.request("/taxonomy/buyer/get", parameters, "GET", options);
    }
    /**
     * Retrieve the entire taxonomy as used by sellers in the listing process.
     */
    static getSellerTaxonomy(parameters, options) {
        return client_1.request("/taxonomy/seller/get", parameters, "GET", options);
    }
    /**
     * Get the current version of the seller taxonomy
     */
    static getSellerTaxonomyVersion(parameters, options) {
        return client_1.request("/taxonomy/seller/version", parameters, "GET", options);
    }
}
exports.Taxonomy = Taxonomy;
