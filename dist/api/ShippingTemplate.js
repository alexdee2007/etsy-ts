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
exports.ShippingTemplate = void 0;
//methods class
class ShippingTemplate {
    constructor(client) {
        this.client = client;
    }
    /**
     * Creates a new ShippingTemplate
     */
    createShippingTemplate(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shipping/templates', parameters, 'POST', options);
        });
    }
    /**
     * Retrieves a ShippingTemplate by id.
     */
    getShippingTemplate(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shipping/templates/:shipping_template_id', parameters, 'GET', options);
        });
    }
    /**
     * Updates a ShippingTemplate
     */
    updateShippingTemplate(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shipping/templates/:shipping_template_id', parameters, 'PUT', options);
        });
    }
    /**
     * Deletes the ShippingTemplate with the given id.
     */
    deleteShippingTemplate(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shipping/templates/:shipping_template_id', parameters, 'DELETE', options);
        });
    }
    /**
     * Retrieves a set of ShippingTemplateEntry objects associated to a ShippingTemplate.
     */
    findAllShippingTemplateEntries(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shipping/templates/:shipping_template_id/entries', parameters, 'GET', options);
        });
    }
    /**
     * Retrieves a set of ShippingTemplate objects associated to a User.
     */
    findAllUserShippingProfiles(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/shipping/templates', parameters, 'GET', options);
        });
    }
}
exports.ShippingTemplate = ShippingTemplate;
