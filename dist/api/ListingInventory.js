"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingInventory = void 0;
const client_1 = require("../client/client");
//methods class
class ListingInventory {
    /**
     * Get the inventory for a listing
     */
    static getInventory(parameters, options) {
        return client_1.request("/listings/:listing_id/inventory", parameters, "GET", options);
    }
    /**
     * Update the inventory for a listing
     */
    static updateInventory(parameters, options) {
        return client_1.request("/listings/:listing_id/inventory", parameters, "PUT", options);
    }
}
exports.ListingInventory = ListingInventory;
