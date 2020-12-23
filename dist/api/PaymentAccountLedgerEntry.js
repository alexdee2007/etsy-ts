"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAccountLedgerEntry = void 0;
const client_1 = require("../client/client");
//methods class
class PaymentAccountLedgerEntry {
    /**
     * Get a Shop Payment Account Ledger's Entries
     */
    static findPaymentAccountEntries(parameters, options) {
        return client_1.request("/shops/:shop_id/payment_account/entries", parameters, "GET", options);
    }
}
exports.PaymentAccountLedgerEntry = PaymentAccountLedgerEntry;
