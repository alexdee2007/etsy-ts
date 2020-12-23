"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingTranslation = void 0;
const client_1 = require("../client/client");
//methods class
class ListingTranslation {
    /**
     * Retrieves a ListingTranslation by listing_id and language
     */
    static getListingTranslation(parameters, options) {
        return client_1.request("/listings/:listing_id/translations/:language", parameters, "GET", options);
    }
    /**
     * Creates a ListingTranslation by listing_id and language
     */
    static createListingTranslation(parameters, options) {
        return client_1.request("/listings/:listing_id/translations/:language", parameters, "POST", options);
    }
    /**
     * Updates a ListingTranslation by listing_id and language
     */
    static updateListingTranslation(parameters, options) {
        return client_1.request("/listings/:listing_id/translations/:language", parameters, "PUT", options);
    }
    /**
     * Deletes a ListingTranslation by listing_id and language
     */
    static deleteListingTranslation(parameters, options) {
        return client_1.request("/listings/:listing_id/translations/:language", parameters, "DELETE", options);
    }
}
exports.ListingTranslation = ListingTranslation;
