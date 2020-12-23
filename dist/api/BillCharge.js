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
exports.BillCharge = void 0;
//methods class
class BillCharge {
    constructor(client) {
        this.client = client;
    }
    /**
     * Metadata for the set of BillCharges objects associated to a User
     */
    getUserChargesMetadata(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/charges/meta', parameters, 'GET', options);
        });
    }
    /**
     * Retrieves a set of BillCharge objects associated to a User. NOTE: from 8/8/12 the min_created and max_created arguments will be mandatory and can be no more than 31 days apart.
     */
    findAllUserCharges(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/users/:user_id/charges', parameters, 'GET', options);
        });
    }
}
exports.BillCharge = BillCharge;
