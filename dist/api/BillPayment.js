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
exports.BillPayment = void 0;
//methods class
class BillPayment {
    constructor(client) {
        this.client = client;
    }
    /**
     * Retrieves a set of BillPayment objects associated to a User.
     */
    findAllUserPayments(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/payments', parameters, 'GET', options);
        });
    }
}
exports.BillPayment = BillPayment;
