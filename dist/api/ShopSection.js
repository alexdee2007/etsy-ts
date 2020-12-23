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
exports.ShopSection = void 0;
//methods class
class ShopSection {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a set of ShopSection objects associated to a Shop.
     */
    findAllShopSections(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/sections', parameters, 'GET', options);
        });
    }
    /**
     * Creates a new ShopSection.
     */
    createShopSection(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/sections', parameters, 'POST', options);
        });
    }
    /**
     * Retrieves a ShopSection by id and shop_id
     */
    getShopSection(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/sections/:shop_section_id', parameters, 'GET', options);
        });
    }
    /**
     * Updates a ShopSection with the given id.
     */
    updateShopSection(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/sections/:shop_section_id', parameters, 'PUT', options);
        });
    }
    /**
     * Deletes the ShopSection with the given id.
     */
    deleteShopSection(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/sections/:shop_section_id', parameters, 'DELETE', options);
        });
    }
}
exports.ShopSection = ShopSection;
