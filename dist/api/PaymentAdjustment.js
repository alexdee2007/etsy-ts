"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAdjustment = void 0;
const client_1 = require("../client/client");
//methods class
class PaymentAdjustment {
    /**
     * Get a Payment Adjustments from a Payment Id
     */
    static findPaymentAdjustments(parameters, options) {
        return client_1.request("/payments/:payment_id/adjustments", parameters, "GET", options);
    }
    /**
     * Get an Etsy Payments Transaction Adjustment
     */
    static findPaymentAdjustment(parameters, options) {
        return client_1.request("/payments/:payment_id/adjustments/:payment_adjustment_id", parameters, "GET", options);
    }
    /**
     * Get a Payment Adjustment from a Ledger Entry ID, if applicable
     */
    static findPaymentAdjustmentForLedgerEntry(parameters, options) {
        return client_1.request("/shops/:shop_id/ledger/entries/:ledger_entry_id/adjustment", parameters, "GET", options);
    }
    /**
     * Get a Payment Adjustment from a Payment Account Ledger Entry ID, if applicable
     */
    static findPaymentAdjustmentForPaymentAccountLedgerEntry(parameters, options) {
        return client_1.request("/shops/:shop_id/payment_account/entries/:ledger_entry_id/adjustment", parameters, "GET", options);
    }
}
exports.PaymentAdjustment = PaymentAdjustment;
