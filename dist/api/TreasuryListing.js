"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreasuryListing = void 0;
const client_1 = require("../client/client");
//methods class
class TreasuryListing {
    /**
     * Add listing to a Treasury
     */
    static addTreasuryListing(parameters, options) {
        return client_1.request("/treasuries/:treasury_key/listings", parameters, "POST", options);
    }
    /**
     * Remove listing from a Treasury
     */
    static removeTreasuryListing(parameters, options) {
        return client_1.request("/treasuries/:treasury_key/listings/:listing_id", parameters, "DELETE", options);
    }
}
exports.TreasuryListing = TreasuryListing;
