"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingTemplateEntry = void 0;
const client_1 = require("../client/client");
//methods class
class ShippingTemplateEntry {
    /**
     * Creates a new ShippingTemplateEntry
     */
    static createShippingTemplateEntry(parameters, options) {
        return client_1.request("/shipping/templates/entries", parameters, "POST", options);
    }
    /**
     * Retrieves a ShippingTemplateEntry by id.
     */
    static getShippingTemplateEntry(parameters, options) {
        return client_1.request("/shipping/templates/entries/:shipping_template_entry_id", parameters, "GET", options);
    }
    /**
     * Updates a ShippingTemplateEntry
     */
    static updateShippingTemplateEntry(parameters, options) {
        return client_1.request("/shipping/templates/entries/:shipping_template_entry_id", parameters, "PUT", options);
    }
    /**
     * Deletes the ShippingTemplateEntry
     */
    static deleteShippingTemplateEntry(parameters, options) {
        return client_1.request("/shipping/templates/entries/:shipping_template_entry_id", parameters, "DELETE", options);
    }
}
exports.ShippingTemplateEntry = ShippingTemplateEntry;
