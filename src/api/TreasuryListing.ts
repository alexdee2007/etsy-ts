import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';

//fields
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

//parameters types
export interface IAddTreasuryListingParameters extends IStandardParameters {
    treasury_key: string;
    listing_id: number;
}

export interface IRemoveTreasuryListingParameters extends IStandardParameters {
    treasury_key: string;
    listing_id: number;
}

//methods class
export class TreasuryListing {
    constructor(private readonly client: ClientOauth) {}

    /**
     * Add listing to a Treasury
     */
    async addTreasuryListing(parameters: IAddTreasuryListingParameters, options?: IAuthOptions) {
        return this.client.request('/treasuries/:treasury_key/listings', parameters, 'POST', options);
    }

    /**
     * Remove listing from a Treasury
     */
    async removeTreasuryListing(parameters: IRemoveTreasuryListingParameters, options?: IAuthOptions) {
        return this.client.request('/treasuries/:treasury_key/listings/:listing_id', parameters, 'DELETE', options);
    }
}
