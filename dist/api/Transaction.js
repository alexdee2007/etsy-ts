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
exports.Transaction = void 0;
//methods class
class Transaction {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a Shop_Transaction by id.
     */
    getShop_Transaction(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/transactions/:transaction_id', parameters, 'GET', options);
        });
    }
    /**
     * Retrieves a set of Transaction objects associated to a Listing.
     */
    findAllListingTransactions(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/listings/:listing_id/transactions', parameters, 'GET', options);
        });
    }
    /**
     * Retrieves a set of Transaction objects associated to a Shop_Receipt2.
     */
    findAllShop_Receipt2Transactions(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/receipts/:receipt_id/transactions', parameters, 'GET', options);
        });
    }
    /**
     * Retrieves a set of Transaction objects associated to a Shop.
     */
    findAllShopTransactions(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/transactions', parameters, 'GET', options);
        });
    }
    /**
     * Retrieves a set of Transaction objects associated to a User.
     */
    findAllUserBuyerTransactions(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/transactions', parameters, 'GET', options);
        });
    }
}
exports.Transaction = Transaction;
