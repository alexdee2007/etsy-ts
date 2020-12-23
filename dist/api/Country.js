"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
const client_1 = require("../client/client");
//methods class
class Country {
    /**
     * Finds all Country.
     */
    static findAllCountry(parameters, options) {
        return client_1.request("/countries", parameters, "GET", options);
    }
    /**
     * Retrieves a Country by id.
     */
    static getCountry(parameters, options) {
        return client_1.request("/countries/:country_id", parameters, "GET", options);
    }
    /**
     * Get the country info for the given ISO code.
     */
    static findByIsoCode(parameters, options) {
        return client_1.request("/countries/iso/:iso_code", parameters, "GET", options);
    }
}
exports.Country = Country;
