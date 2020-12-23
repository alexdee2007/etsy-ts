"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingProduct = void 0;
const client_1 = require("../client/client");
//methods class
class ListingProduct {
    /**
     * Get a specific offering for a listing
     */
    static getProduct(parameters, options) {
        return client_1.request("/listings/:listing_id/products/:product_id", parameters, "GET", options);
    }
}
exports.ListingProduct = ListingProduct;
