import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
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

//parameters types
export interface IFindLedgerParameters extends IStandardParameters {
    shop_id: string | number;
}

//methods class
export class Ledger {
    constructor(private readonly client: Client) {}

    /**
     * Get a Shop Payment Account Ledger
     */
    async findLedger(
        parameters: IFindLedgerParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IFindLedgerParameters, ILedger>> {
        return this.client.request('/shops/:shop_id/ledger/', parameters, 'GET', options);
    }
}
