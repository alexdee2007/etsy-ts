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
exports.Country = void 0;
//methods class
class Country {
    constructor(client) {
        this.client = client;
    }
    /**
     * Finds all Country.
     */
    findAllCountry(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/countries', parameters, 'GET', options);
        });
    }
    /**
     * Retrieves a Country by id.
     */
    getCountry(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/countries/:country_id', parameters, 'GET', options);
        });
    }
    /**
     * Get the country info for the given ISO code.
     */
    findByIsoCode(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/countries/iso/:iso_code', parameters, 'GET', options);
        });
    }
}
exports.Country = Country;
