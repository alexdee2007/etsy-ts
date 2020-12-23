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
exports.Cart = void 0;
//methods class
class Cart {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a user's Carts
     */
    getAllUserCarts(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/carts', parameters, 'GET', options);
        });
    }
    /**
     * Add a listing to a cart
     */
    addToCart(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/carts', parameters, 'POST', options);
        });
    }
    /**
     * Update a cart listing purchase quantity
     */
    updateCartListingQuantity(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/carts', parameters, 'PUT', options);
        });
    }
    /**
     * Remove a listing from a cart
     */
    removeCartListing(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/carts', parameters, 'DELETE', options);
        });
    }
    /**
     * Get a cart
     */
    getUserCart(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/carts/:cart_id', parameters, 'GET', options);
        });
    }
    /**
     * Update a cart
     */
    updateCart(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/carts/:cart_id', parameters, 'PUT', options);
        });
    }
    /**
     * Delete a cart
     */
    deleteCart(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/carts/:cart_id', parameters, 'DELETE', options);
        });
    }
    /**
     * Saves and selects a shipping address for apple pay
     */
    addAndSelectShippingForApplePay(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/carts/:cart_id/add_and_select_shipping_for_apple', parameters, 'POST', options);
        });
    }
    /**
     * Move a listing to Saved for Later
     */
    saveListingForLater(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/carts/save', parameters, 'DELETE', options);
        });
    }
    /**
     * Get a cart from a shop ID
     */
    getUserCartForShop(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/carts/shop/:shop_id', parameters, 'GET', options);
        });
    }
    /**
     * Create a single-listing cart from a listing
     */
    createSingleListingCart(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/carts/single_listing', parameters, 'POST', options);
        });
    }
}
exports.Cart = Cart;
