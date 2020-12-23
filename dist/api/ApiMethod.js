"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiMethod = void 0;
const client_1 = require("../client/client");
//methods class
class ApiMethod {
    /**
     * Get a list of all methods available.
     */
    static getMethodTable(parameters, options) {
        return client_1.request("/", parameters, "GET", options);
    }
}
exports.ApiMethod = ApiMethod;
