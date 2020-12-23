"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ledger = void 0;
const client_1 = require("../client/client");
//methods class
class Ledger {
    /**
     * Get a Shop Payment Account Ledger
     */
    static findLedger(parameters, options) {
        return client_1.request("/shops/:shop_id/ledger/", parameters, "GET", options);
    }
}
exports.Ledger = Ledger;
