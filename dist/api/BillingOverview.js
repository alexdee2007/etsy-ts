"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingOverview = void 0;
const client_1 = require("../client/client");
//methods class
class BillingOverview {
    /**
     * Retrieves the user's current balance.
     */
    static getUserBillingOverview(parameters, options) {
        return client_1.request("/users/:user_id/billing/overview", parameters, "GET", options);
    }
}
exports.BillingOverview = BillingOverview;
