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
exports.ShopTranslation = void 0;
//methods class
class ShopTranslation {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a ShopTranslation by shop_id and language
     */
    getShopTranslation(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/translations/:language', parameters, 'GET', options);
        });
    }
    /**
     * Creates a ShopTranslation by shop_id and language
     */
    createShopTranslation(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/translations/:language', parameters, 'POST', options);
        });
    }
    /**
     * Updates a ShopTranslation by shop_id and language
     */
    updateShopTranslation(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/translations/:language', parameters, 'PUT', options);
        });
    }
    /**
     * Deletes a ShopTranslation by shop_id and language
     */
    deleteShopTranslation(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/translations/:language', parameters, 'DELETE', options);
        });
    }
}
exports.ShopTranslation = ShopTranslation;
