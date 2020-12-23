"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAdjustment = void 0;
//methods class
class PaymentAdjustment {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a Payment Adjustments from a Payment Id
     */
    findPaymentAdjustments(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/payments/:payment_id/adjustments', parameters, 'GET', options);
        });
    }
    /**
     * Get an Etsy Payments Transaction Adjustment
     */
    findPaymentAdjustment(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/payments/:payment_id/adjustments/:payment_adjustment_id', parameters, 'GET', options);
        });
    }
    /**
     * Get a Payment Adjustment from a Ledger Entry ID, if applicable
     */
    findPaymentAdjustmentForLedgerEntry(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/ledger/entries/:ledger_entry_id/adjustment', parameters, 'GET', options);
        });
    }
    /**
     * Get a Payment Adjustment from a Payment Account Ledger Entry ID, if applicable
     */
    findPaymentAdjustmentForPaymentAccountLedgerEntry(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/payment_account/entries/:ledger_entry_id/adjustment', parameters, 'GET', options);
        });
    }
}
exports.PaymentAdjustment = PaymentAdjustment;
