"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LedgerEntry = void 0;
const client_1 = require("../client/client");
//methods class
class LedgerEntry {
    /**
     * Get a Shop Payment Account Ledger's Entries
     */
    static findLedgerEntries(parameters, options) {
        return client_1.request("/shops/:shop_id/ledger/entries", parameters, "GET", options);
    }
    /**
     * Get a Shop Payment Account Ledger Entry
     */
    static findLedgerEntry(parameters, options) {
        return client_1.request("/shops/:shop_id/ledger/entries/:ledger_entry_id", parameters, "GET", options);
    }
}
exports.LedgerEntry = LedgerEntry;
