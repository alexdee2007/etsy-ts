"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopTranslation = void 0;
const client_1 = require("../client/client");
//methods class
class ShopTranslation {
    /**
     * Retrieves a ShopTranslation by shop_id and language
     */
    static getShopTranslation(parameters, options) {
        return client_1.request("/shops/:shop_id/translations/:language", parameters, "GET", options);
    }
    /**
     * Creates a ShopTranslation by shop_id and language
     */
    static createShopTranslation(parameters, options) {
        return client_1.request("/shops/:shop_id/translations/:language", parameters, "POST", options);
    }
    /**
     * Updates a ShopTranslation by shop_id and language
     */
    static updateShopTranslation(parameters, options) {
        return client_1.request("/shops/:shop_id/translations/:language", parameters, "PUT", options);
    }
    /**
     * Deletes a ShopTranslation by shop_id and language
     */
    static deleteShopTranslation(parameters, options) {
        return client_1.request("/shops/:shop_id/translations/:language", parameters, "DELETE", options);
    }
}
exports.ShopTranslation = ShopTranslation;
