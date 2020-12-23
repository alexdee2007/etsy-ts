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
exports.LedgerEntry = void 0;
//methods class
class LedgerEntry {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get a Shop Payment Account Ledger's Entries
     */
    findLedgerEntries(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/ledger/entries', parameters, 'GET', options);
        });
    }
    /**
     * Get a Shop Payment Account Ledger Entry
     */
    findLedgerEntry(parameters, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.request('/shops/:shop_id/ledger/entries/:ledger_entry_id', parameters, 'GET', options);
        });
    }
}
exports.LedgerEntry = LedgerEntry;
