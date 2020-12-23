"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillPayment = void 0;
const client_1 = require("../client/client");
//methods class
class BillPayment {
    /**
     * Retrieves a set of BillPayment objects associated to a User.
     */
    static findAllUserPayments(parameters, options) {
        return client_1.request("/users/:user_id/payments", parameters, "GET", options);
    }
}
exports.BillPayment = BillPayment;
