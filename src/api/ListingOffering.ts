import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';

//fields
export interface IListingOffering {
    /**
     * The numeric ID of this offering.
     */
    offering_id: number;
    /**
     * The price of the product
     */
    price: any;
    /**
     * How many of this product are available?
     */
    quantity: number;
    /**
     * Is the offering shown to buyers?
     */
    is_enabled: boolean;
    /**
     * Has the offering been deleted?
     */
    is_deleted: boolean;
}

//parameters types
export interface IGetOfferingParameters extends IStandardParameters {
    listing_id: number;
    product_id: number;
    offering_id: number;
}

//methods class
export class ListingOffering {
    constructor(private readonly client: ClientOauth) {}

    /**
     * Get a specific offering for a listing
     */
    async getOffering(parameters: IGetOfferingParameters, options?: IAuthOptions) {
        return this.client.request(
            '/listings/:listing_id/products/:product_id/offerings/:offering_id',
            parameters,
            'GET',
            options,
        );
    }
}
