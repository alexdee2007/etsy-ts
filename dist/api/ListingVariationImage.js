"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingVariationImage = void 0;
const client_1 = require("../client/client");
//methods class
class ListingVariationImage {
    /**
     * Gets all variation images on a listing
     */
    static getVariationImages(parameters, options) {
        return client_1.request("/listings/:listing_id/variation-images", parameters, "GET", options);
    }
    /**
     * Creates variation images on a listing
     */
    static updateVariationImages(parameters, options) {
        return client_1.request("/listings/:listing_id/variation-images", parameters, "POST", options);
    }
}
exports.ListingVariationImage = ListingVariationImage;
