"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopSection = void 0;
const client_1 = require("../client/client");
//methods class
class ShopSection {
    /**
     * Retrieves a set of ShopSection objects associated to a Shop.
     */
    static findAllShopSections(parameters, options) {
        return client_1.request("/shops/:shop_id/sections", parameters, "GET", options);
    }
    /**
     * Creates a new ShopSection.
     */
    static createShopSection(parameters, options) {
        return client_1.request("/shops/:shop_id/sections", parameters, "POST", options);
    }
    /**
     * Retrieves a ShopSection by id and shop_id
     */
    static getShopSection(parameters, options) {
        return client_1.request("/shops/:shop_id/sections/:shop_section_id", parameters, "GET", options);
    }
    /**
     * Updates a ShopSection with the given id.
     */
    static updateShopSection(parameters, options) {
        return client_1.request("/shops/:shop_id/sections/:shop_section_id", parameters, "PUT", options);
    }
    /**
     * Deletes the ShopSection with the given id.
     */
    static deleteShopSection(parameters, options) {
        return client_1.request("/shops/:shop_id/sections/:shop_section_id", parameters, "DELETE", options);
    }
}
exports.ShopSection = ShopSection;
