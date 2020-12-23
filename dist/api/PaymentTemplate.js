"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTemplate = void 0;
const client_1 = require("../client/client");
//methods class
class PaymentTemplate {
    /**
     * Retrieves the PaymentTemplate associated with the Shop
     */
    static findShopPaymentTemplates(parameters, options) {
        return client_1.request("/shops/:shop_id/payment_templates", parameters, "GET", options);
    }
    /**
     * Creates a new PaymentTemplate
     */
    static createShopPaymentTemplate(parameters, options) {
        return client_1.request("/shops/:shop_id/payment_templates", parameters, "POST", options);
    }
    /**
     * Updates a PaymentTemplate
     */
    static updateShopPaymentTemplate(parameters, options) {
        return client_1.request("/shops/:shop_id/payment_templates/:payment_template_id", parameters, "PUT", options);
    }
    /**
     * Retrieves a set of PaymentTemplate objects associated to a User.
     */
    static findAllUserPaymentTemplates(parameters, options) {
        return client_1.request("/users/:user_id/payments/templates", parameters, "GET", options);
    }
}
exports.PaymentTemplate = PaymentTemplate;
