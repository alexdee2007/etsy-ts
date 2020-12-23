"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingInfo = void 0;
const client_1 = require("../client/client");
//methods class
class ShippingInfo {
    /**
     * Retrieves a set of ShippingProfileEntries objects associated to a Listing.
     */
    static findAllListingShippingProfileEntries(parameters, options) {
        return client_1.request("/listings/:listing_id/shipping/info", parameters, "GET", options);
    }
    /**
     * Creates a new ShippingInfo.
     */
    static createShippingInfo(parameters, options) {
        return client_1.request("/listings/:listing_id/shipping/info", parameters, "POST", options);
    }
    /**
     * Retrieves a ShippingInfo by id.
     */
    static getShippingInfo(parameters, options) {
        return client_1.request("/shipping/info/:shipping_info_id", parameters, "GET", options);
    }
    /**
     * Updates a ShippingInfo with the given id.
     */
    static updateShippingInfo(parameters, options) {
        return client_1.request("/shipping/info/:shipping_info_id", parameters, "PUT", options);
    }
    /**
     * Deletes the ShippingInfo with the given id.
     */
    static deleteShippingInfo(parameters, options) {
        return client_1.request("/shipping/info/:shipping_info_id", parameters, "DELETE", options);
    }
}
exports.ShippingInfo = ShippingInfo;
