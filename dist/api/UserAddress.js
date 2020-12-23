"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAddress = void 0;
const client_1 = require("../client/client");
//methods class
class UserAddress {
    /**
     * Retrieves a set of UserAddress objects associated to a User.
     */
    static findAllUserAddresses(parameters, options) {
        return client_1.request("/users/:user_id/addresses", parameters, "GET", options);
    }
    /**
     * Creates a new UserAddress. Note: state is required when the country is US, Canada, or Australia. See section above about valid codes.
     */
    static createUserAddress(parameters, options) {
        return client_1.request("/users/:user_id/addresses/", parameters, "POST", options);
    }
    /**
     * Retrieves a UserAddress by id.
     */
    static getUserAddress(parameters, options) {
        return client_1.request("/users/:user_id/addresses/:user_address_id", parameters, "GET", options);
    }
    /**
     * Deletes the UserAddress with the given id.
     */
    static deleteUserAddress(parameters, options) {
        return client_1.request("/users/:user_id/addresses/:user_address_id", parameters, "DELETE", options);
    }
}
exports.UserAddress = UserAddress;
