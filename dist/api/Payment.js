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
exports.Payment = void 0;
//methods class
class Payment {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get an Etsy Payments Transaction
     */
    findPayment(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/payments/:payment_id', parameters, 'GET', options);
        });
    }
    /**
     * Get a Payment from a Ledger Entry ID, if applicable
     */
    findPaymentForLedgerEntry(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/ledger/entries/:ledger_entry_id/payment', parameters, 'GET', options);
        });
    }
    /**
     * Get a Payment from a PaymentAccount Ledger Entry ID, if applicable
     */
    findPaymentForPaymentAccountLedgerEntry(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/payment_account/entries/:ledger_entry_id/payment', parameters, 'GET', options);
        });
    }
    /**
     * Get a Payment by Shop Receipt ID
     */
    findShopPaymentByReceipt(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/receipts/:receipt_id/payments', parameters, 'GET', options);
        });
    }
}
exports.Payment = Payment;
