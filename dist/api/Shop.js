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
exports.Shop = void 0;
//methods class
class Shop {
    constructor(client) {
        this.client = client;
    }
    /**
     * Finds all Shops.  If there is a keywords parameter, finds shops with shop_name starting with keywords.
     */
    findAllShops(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops', parameters, 'GET', options);
        });
    }
    /**
     * Retrieves a Shop by id.
     */
    getShop(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id', parameters, 'GET', options);
        });
    }
    /**
     * Updates a Shop
     */
    updateShop(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id', parameters, 'PUT', options);
        });
    }
    /**
     * Upload a new shop banner image
     */
    uploadShopBanner(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/appearance/banner', parameters, 'POST', options);
        });
    }
    /**
     * Deletes a shop banner image
     */
    deleteShopBanner(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/appearance/banner', parameters, 'DELETE', options);
        });
    }
    /**
     * Retrieves a shop by a listing id.
     */
    getListingShop(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/listing/:listing_id', parameters, 'GET', options);
        });
    }
    /**
     * Retrieves a set of Shop objects associated to a User.
     */
    findAllUserShops(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/shops', parameters, 'GET', options);
        });
    }
}
exports.Shop = Shop;
