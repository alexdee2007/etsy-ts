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
exports.Receipt = void 0;
//methods class
class Receipt {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a Shop_Receipt2 by id.
     */
    getShop_Receipt2(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/receipts/:receipt_id', parameters, 'GET', options);
        });
    }
    /**
     * Updates a Shop_Receipt2
     */
    updateReceipt(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/receipts/:receipt_id', parameters, 'PUT', options);
        });
    }
    /**
     * Retrieves a set of Receipt objects associated to a Shop.
     */
    findAllShopReceipts(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/receipts', parameters, 'GET', options);
        });
    }
    /**
     * Submits tracking information and sends a shipping notification email to the buyer. If send_bcc is true, the shipping notification will be sent to the seller as well. Refer to additional documentation.
     */
    submitTracking(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/receipts/:receipt_id/tracking', parameters, 'POST', options);
        });
    }
    /**
     * Retrieves a set of Receipt objects associated to a Shop based on the status.
     */
    findAllShopReceiptsByStatus(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/receipts/:status', parameters, 'GET', options);
        });
    }
    /**
     * Searches the set of Receipt objects associated to a Shop by a query
     */
    searchAllShopReceipts(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/receipts/search', parameters, 'GET', options);
        });
    }
    /**
     * Retrieves a set of Receipt objects associated to a User.
     */
    findAllUserBuyerReceipts(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/receipts', parameters, 'GET', options);
        });
    }
}
exports.Receipt = Receipt;
