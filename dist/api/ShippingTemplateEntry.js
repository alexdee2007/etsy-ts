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
exports.ShippingTemplateEntry = void 0;
//methods class
class ShippingTemplateEntry {
    constructor(client) {
        this.client = client;
    }
    /**
     * Creates a new ShippingTemplateEntry
     */
    createShippingTemplateEntry(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shipping/templates/entries', parameters, 'POST', options);
        });
    }
    /**
     * Retrieves a ShippingTemplateEntry by id.
     */
    getShippingTemplateEntry(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shipping/templates/entries/:shipping_template_entry_id', parameters, 'GET', options);
        });
    }
    /**
     * Updates a ShippingTemplateEntry
     */
    updateShippingTemplateEntry(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shipping/templates/entries/:shipping_template_entry_id', parameters, 'PUT', options);
        });
    }
    /**
     * Deletes the ShippingTemplateEntry
     */
    deleteShippingTemplateEntry(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shipping/templates/entries/:shipping_template_entry_id', parameters, 'DELETE', options);
        });
    }
}
exports.ShippingTemplateEntry = ShippingTemplateEntry;
