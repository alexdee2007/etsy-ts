"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingOffering = void 0;
const client_1 = require("../client/client");
//methods class
class ListingOffering {
    /**
     * Get a specific offering for a listing
     */
    static getOffering(parameters, options) {
        return client_1.request("/listings/:listing_id/products/:product_id/offerings/:offering_id", parameters, "GET", options);
    }
}
exports.ListingOffering = ListingOffering;
