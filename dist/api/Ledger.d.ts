import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
export interface ILedger {
    /**
     * The ledger's numeric ID.
     */
    ledger_id: number;
    /**
     * The shop's numeric ID.
     */
    shop_id: string;
    /**
     * The currency code of the shop.
     */
    currency: string;
    /**
     * The date and time the ledger was created in Epoch seconds.
     */
    create_date: number;
    /**
     * The date and time the ledger was last updated in Epoch seconds.
     */
    update_date: number;
}
export interface IFindLedgerParameters extends IStandardParameters {
    shop_id: string | number;
}
export declare class Ledger {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Get a Shop Payment Account Ledger
     */
    findLedger(parameters: IFindLedgerParameters, options?: IAuthOptions): Promise<any>;
}
