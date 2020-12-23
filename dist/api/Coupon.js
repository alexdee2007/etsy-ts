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
exports.Coupon = void 0;
//methods class
class Coupon {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves all Shop_Coupons by shop_id
     */
    findAllShopCoupons(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/coupons', parameters, 'GET', options);
        });
    }
    /**
     * Creates a new Coupon. May only have one of free_shipping, pct_discount or fixed_discount
     */
    createCoupon(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/coupons', parameters, 'POST', options);
        });
    }
    /**
     * Retrieves a Shop_Coupon by id and shop_id
     */
    findCoupon(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/coupons/:coupon_id', parameters, 'GET', options);
        });
    }
    /**
     * Updates a coupon
     */
    updateCoupon(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/coupons/:coupon_id', parameters, 'PUT', options);
        });
    }
    /**
     * Deletes a coupon
     */
    deleteCoupon(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/coupons/:coupon_id', parameters, 'DELETE', options);
        });
    }
}
exports.Coupon = Coupon;
