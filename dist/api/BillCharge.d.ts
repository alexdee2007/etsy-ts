import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
export interface IBillCharge {
    /**
     * The numeric ID for this bill charge record.
     */
    bill_charge_id: number;
    /**
     * Creation time, in epoch seconds.
     */
    creation_tsz: number;
    /**
     * The name of the type of charge.
     */
    type: string;
    /**
     * The Listing, Transaction or Shipping Label ID to which the charge applies.
     */
    type_id: number;
    /**
     * The user's numeric ID.
     */
    user_id: number;
    /**
     * The amount charged.
     */
    amount: number;
    /**
     * The currency of the charge.
     */
    currency_code: string;
    /**
     * Year that the charge was created.
     */
    creation_year: number;
    /**
     * Month that the charge was created.
     */
    creation_month: number;
    /**
     * Time when charge was last modified.
     */
    last_modified_tsz: number;
}
export interface IGetUserChargesMetadataParameters extends IStandardParameters {
    user_id: string | number;
}
export interface IFindAllUserChargesParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
    user_id: string | number;
    sort_order?: 'up' | 'down';
    min_created?: number;
    max_created?: number;
}
export declare class BillCharge {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Metadata for the set of BillCharges objects associated to a User
     */
    getUserChargesMetadata(parameters: IGetUserChargesMetadataParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Retrieves a set of BillCharge objects associated to a User. NOTE: from 8/8/12 the min_created and max_created arguments will be mandatory and can be no more than 31 days apart.
     */
    findAllUserCharges(parameters: IFindAllUserChargesParameters, options?: IAuthOptions): Promise<any>;
}
