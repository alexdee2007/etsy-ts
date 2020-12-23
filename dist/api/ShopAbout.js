"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopAbout = void 0;
const client_1 = require("../client/client");
//methods class
class ShopAbout {
    /**
     * Retrieves a ShopAbout object associated to a Shop.
     */
    static getShopAbout(parameters, options) {
        return client_1.request("/shops/:shop_id/about", parameters, "GET", options);
    }
}
exports.ShopAbout = ShopAbout;
