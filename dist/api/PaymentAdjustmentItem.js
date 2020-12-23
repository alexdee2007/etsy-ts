"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAdjustmentItem = void 0;
const client_1 = require("../client/client");
//methods class
class PaymentAdjustmentItem {
    /**
     * Get Etsy Payments Transaction Adjustment Items
     */
    static findPaymentAdjustmentItems(parameters, options) {
        return client_1.request("/payments/:payment_id/adjustments/:payment_adjustment_id/items", parameters, "GET", options);
    }
    /**
     * Get an Etsy Payments Transaction Adjustment Item
     */
    static findPaymentAdjustmentItem(parameters, options) {
        return client_1.request("/payments/:payment_id/adjustments/:payment_adjustment_id/items/:payment_adjustment_item_id", parameters, "GET", options);
    }
}
exports.PaymentAdjustmentItem = PaymentAdjustmentItem;
