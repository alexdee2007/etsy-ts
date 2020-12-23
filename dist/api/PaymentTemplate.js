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
exports.PaymentTemplate = void 0;
//methods class
class PaymentTemplate {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves the PaymentTemplate associated with the Shop
     */
    findShopPaymentTemplates(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/payment_templates', parameters, 'GET', options);
        });
    }
    /**
     * Creates a new PaymentTemplate
     */
    createShopPaymentTemplate(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/payment_templates', parameters, 'POST', options);
        });
    }
    /**
     * Updates a PaymentTemplate
     */
    updateShopPaymentTemplate(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/payment_templates/:payment_template_id', parameters, 'PUT', options);
        });
    }
    /**
     * Retrieves a set of PaymentTemplate objects associated to a User.
     */
    findAllUserPaymentTemplates(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/payments/templates', parameters, 'GET', options);
        });
    }
}
exports.PaymentTemplate = PaymentTemplate;
