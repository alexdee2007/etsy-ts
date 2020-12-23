import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
export interface ITreasuryListing {
    /**
     * The detailed fields of the listing
     */
    data: any;
    /**
     * Time the listing was added to this Treasury, in epoch seconds
     */
    creation_tsz: number;
}
export interface IAddTreasuryListingParameters extends IStandardParameters {
    treasury_key: string;
    listing_id: number;
}
export interface IRemoveTreasuryListingParameters extends IStandardParameters {
    treasury_key: string;
    listing_id: number;
}
export declare class TreasuryListing {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Add listing to a Treasury
     */
    addTreasuryListing(parameters: IAddTreasuryListingParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Remove listing from a Treasury
     */
    removeTreasuryListing(parameters: IRemoveTreasuryListingParameters, options?: IAuthOptions): Promise<any>;
}
