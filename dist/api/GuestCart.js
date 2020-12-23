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
exports.GuestCart = void 0;
//methods class
class GuestCart {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get all guest's carts
     */
    findAllGuestCarts(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/guests/:guest_id/carts', parameters, 'GET', options);
        });
    }
    /**
     * Add a listing to guest's cart
     */
    addToGuestCart(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/guests/:guest_id/carts', parameters, 'POST', options);
        });
    }
    /**
     * Update a guest's cart listing purchase quantity
     */
    updateGuestCartListingQuantity(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/guests/:guest_id/carts', parameters, 'PUT', options);
        });
    }
    /**
     * Remove a listing from a guest's cart
     */
    removeGuestCartListing(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/guests/:guest_id/carts', parameters, 'DELETE', options);
        });
    }
    /**
     * Get a guest's cart
     */
    findGuestCart(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/guests/:guest_id/carts/:cart_id', parameters, 'GET', options);
        });
    }
    /**
     * Update a guest's cart
     */
    updateGuestCart(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/guests/:guest_id/carts/:cart_id', parameters, 'PUT', options);
        });
    }
    /**
     * Delete a guest's cart
     */
    deleteGuestCart(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/guests/:guest_id/carts/:cart_id', parameters, 'DELETE', options);
        });
    }
}
exports.GuestCart = GuestCart;
