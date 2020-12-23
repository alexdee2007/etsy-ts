"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Treasury = void 0;
const client_1 = require("../client/client");
//methods class
class Treasury {
    /**
     * Search Treasuries or else List all Treasuries
     */
    static findAllTreasuries(parameters, options) {
        return client_1.request("/treasuries", parameters, "GET", options);
    }
    /**
     * Get a Treasury
     */
    static getTreasury(parameters, options) {
        return client_1.request("/treasuries/:treasury_key", parameters, "GET", options);
    }
    /**
     * Delete a Treasury
     */
    static deleteTreasury(parameters, options) {
        return client_1.request("/treasuries/:treasury_key", parameters, "DELETE", options);
    }
    /**
     * Get a user's Treasuries. Note: The treasury_r permission scope is required in order to display private Treasuries for a user when the boolean parameter include_private is true.
     */
    static findAllUserTreasuries(parameters, options) {
        return client_1.request("/users/:user_id/treasuries", parameters, "GET", options);
    }
}
exports.Treasury = Treasury;
