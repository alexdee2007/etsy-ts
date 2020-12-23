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
exports.ShippingInfo = void 0;
//methods class
class ShippingInfo {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a set of ShippingProfileEntries objects associated to a Listing.
     */
    findAllListingShippingProfileEntries(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/listings/:listing_id/shipping/info', parameters, 'GET', options);
        });
    }
    /**
     * Creates a new ShippingInfo.
     */
    createShippingInfo(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/listings/:listing_id/shipping/info', parameters, 'POST', options);
        });
    }
    /**
     * Retrieves a ShippingInfo by id.
     */
    getShippingInfo(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shipping/info/:shipping_info_id', parameters, 'GET', options);
        });
    }
    /**
     * Updates a ShippingInfo with the given id.
     */
    updateShippingInfo(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shipping/info/:shipping_info_id', parameters, 'PUT', options);
        });
    }
    /**
     * Deletes the ShippingInfo with the given id.
     */
    deleteShippingInfo(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shipping/info/:shipping_info_id', parameters, 'DELETE', options);
        });
    }
}
exports.ShippingInfo = ShippingInfo;
