"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxonomyNodeProperty = void 0;
const client_1 = require("../client/client");
//methods class
class TaxonomyNodeProperty {
    /**
     * Get the possible properties of a taxonomy node
     */
    static getTaxonomyNodeProperties(parameters, options) {
        return client_1.request("/taxonomy/seller/:taxonomy_id/properties", parameters, "GET", options);
    }
}
exports.TaxonomyNodeProperty = TaxonomyNodeProperty;
