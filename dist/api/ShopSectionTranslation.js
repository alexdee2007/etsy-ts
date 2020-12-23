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
exports.ShopSectionTranslation = void 0;
//methods class
class ShopSectionTranslation {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    getShopSectionTranslation(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/sections/:shop_section_id/translations/:language', parameters, 'GET', options);
        });
    }
    /**
     * Creates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    createShopSectionTranslation(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/sections/:shop_section_id/translations/:language', parameters, 'POST', options);
        });
    }
    /**
     * Updates a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    updateShopSectionTranslation(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/sections/:shop_section_id/translations/:language', parameters, 'PUT', options);
        });
    }
    /**
     * Deletes a ShopSectionTranslation by shop_id, shop_section_id and language
     */
    deleteShopSectionTranslation(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/sections/:shop_section_id/translations/:language', parameters, 'DELETE', options);
        });
    }
}
exports.ShopSectionTranslation = ShopSectionTranslation;
