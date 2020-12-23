import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
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
export interface IGetProductParameters extends IStandardParameters {
    listing_id: number;
    product_id: number;
}
export declare class ListingProduct {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Get a specific offering for a listing
     */
    getProduct(parameters: IGetProductParameters, options?: IAuthOptions): Promise<any>;
}
