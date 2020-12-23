"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyValue = void 0;
const client_1 = require("../client/client");
//methods class
class PropertyValue {
    /**
     * Get all of the attributes for a listing
     */
    static getAttributes(parameters, options) {
        return client_1.request("/listings/:listing_id/attributes", parameters, "GET", options);
    }
    /**
     * Get an attribute for a listing
     */
    static getAttribute(parameters, options) {
        return client_1.request("/listings/:listing_id/attributes/:property_id", parameters, "GET", options);
    }
    /**
     * Update or populate an attribute for a listing
     */
    static updateAttribute(parameters, options) {
        return client_1.request("/listings/:listing_id/attributes/:property_id", parameters, "PUT", options);
    }
    /**
     * Delete an attribute for a listing
     */
    static deleteAttribute(parameters, options) {
        return client_1.request("/listings/:listing_id/attributes/:property_id", parameters, "DELETE", options);
    }
}
exports.PropertyValue = PropertyValue;
