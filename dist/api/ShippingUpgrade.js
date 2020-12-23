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
exports.ShippingUpgrade = void 0;
//methods class
class ShippingUpgrade {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get the shipping upgrades available for a listing.
     */
    getListingShippingUpgrades(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/listings/:listing_id/shipping/upgrades', parameters, 'GET', options);
        });
    }
    /**
     * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    createListingShippingUpgrade(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/listings/:listing_id/shipping/upgrades', parameters, 'POST', options);
        });
    }
    /**
     * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    updateListingShippingUpgrade(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/listings/:listing_id/shipping/upgrades', parameters, 'PUT', options);
        });
    }
    /**
     * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    deleteListingShippingUpgrade(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/listings/:listing_id/shipping/upgrades', parameters, 'DELETE', options);
        });
    }
    /**
     * Retrieves a list of shipping upgrades for the parent ShippingTemplate
     */
    findAllShippingTemplateUpgrades(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shipping/templates/:shipping_template_id/upgrades', parameters, 'GET', options);
        });
    }
    /**
     * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    createShippingTemplateUpgrade(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shipping/templates/:shipping_template_id/upgrades', parameters, 'POST', options);
        });
    }
    /**
     * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    updateShippingTemplateUpgrade(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shipping/templates/:shipping_template_id/upgrades', parameters, 'PUT', options);
        });
    }
    /**
     * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    deleteShippingTemplateUpgrade(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shipping/templates/:shipping_template_id/upgrades', parameters, 'DELETE', options);
        });
    }
}
exports.ShippingUpgrade = ShippingUpgrade;
