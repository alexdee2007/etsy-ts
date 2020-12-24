import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
export interface IListingProduct {
    /**
     * The numeric ID of this product.
     */
    product_id: number;
    /**
     * A list of 0-2 properties associated with this product and their values.
     */
    property_values: any[];
    /**
     * The product identifier (if set).
     */
    sku: string;
    /**
     * A JSON list of active offerings for this product.
     */
    offerings: any[];
    /**
     * Has the product been deleted?
     */
    is_deleted: boolean;
}

//parameters types
export interface IGetProductParameters extends IStandardParameters {
    listing_id: number;
    product_id: number;
}

//methods class
export class ListingProduct {
    constructor(private readonly client: Client) {}

    /**
     * Get a specific offering for a listing
     */
    async getProduct(
        parameters: IGetProductParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IGetProductParameters, IListingProduct>> {
        return this.client.request('/listings/:listing_id/products/:product_id', parameters, 'GET', options);
    }
}
