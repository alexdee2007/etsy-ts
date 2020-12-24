import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
export interface ITreasuryListing {
    /**
     * The detailed fields of the listing
     */
    data: ITreasuryListingData;
    /**
     * Time the listing was added to this Treasury, in epoch seconds
     */
    creation_tsz: number;
}

export interface ITreasuryListingData {
    /**
     * The numeric ID of the user who posted the item
     */
    user_id: number;
    /**
     * The listing's title
     */
    title: string;
    /**
     * The item's price (private for sold listings)
     */
    price: number;
    /**
     * The ISO (alphabetic) code for the listing's currency
     */
    currency_code: string;
    /**
     * The ID of the listing
     */
    listing_id: number;
    /**
     * Whether the listing is active or not
     */
    state: string;
    /**
     * The shop to which the listing belongs
     */
    shop_name: string;
    /**
     * The ID of the main image of the listing
     */
    image_id: number;
    /**
     * The url to a 75x75 thumbnail of the main image.
     */
    image_url_75x75: string;
    /**
     * The url to a 170x135 thumbnail of the main image.
     */
    image_url_170x135: string;
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
    constructor(private readonly client: Client) {}

    /**
     * Add listing to a Treasury
     */
    async addTreasuryListing(
        parameters: IAddTreasuryListingParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IAddTreasuryListingParameters, ITreasuryListing>> {
        return this.client.request('/treasuries/:treasury_key/listings', parameters, 'POST', options);
    }

    /**
     * Remove listing from a Treasury
     */
    async removeTreasuryListing(
        parameters: IRemoveTreasuryListingParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IRemoveTreasuryListingParameters, ITreasuryListing>> {
        return this.client.request('/treasuries/:treasury_key/listings/:listing_id', parameters, 'DELETE', options);
    }
}
