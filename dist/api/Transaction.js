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
const client_1 = require("../client/client");
//methods class
class Transaction {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a Shop_Transaction by id.
     */
    static getShop_Transaction(parameters, options) {
        return client_1.request('/transactions/:transaction_id', parameters, 'GET', options);
    }
    /**
     * Retrieves a set of Transaction objects associated to a Listing.
     */
    static findAllListingTransactions(parameters, options) {
        return client_1.request('/listings/:listing_id/transactions', parameters, 'GET', options);
    }
    /**
     * Retrieves a set of Transaction objects associated to a Shop_Receipt2.
     */
    static findAllShop_Receipt2Transactions(parameters, options) {
        return client_1.request('/receipts/:receipt_id/transactions', parameters, 'GET', options);
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
    static findAllUserBuyerTransactions(parameters, options) {
        return client_1.request('/users/:user_id/transactions', parameters, 'GET', options);
    }
}
exports.Transaction = Transaction;
