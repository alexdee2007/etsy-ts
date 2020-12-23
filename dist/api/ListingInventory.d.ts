import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
export interface IListingInventory {
    /**
     * The products available for this listing.
     */
    products: any[];
    /**
     * Which properties control price?
     */
    price_on_property: number[];
    /**
     * Which properties control quantity?
     */
    quantity_on_property: number[];
    /**
     * Which properties control SKU?
     */
    sku_on_property: number[];
}
export interface IGetInventoryParameters extends IStandardParameters {
    listing_id: number;
    write_missing_inventory?: boolean;
}
export interface IUpdateInventoryParameters extends IStandardParameters {
    listing_id: number;
    products: any;
    price_on_property?: number[];
    quantity_on_property?: number[];
    sku_on_property?: number[];
}
export declare class ListingInventory {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Get the inventory for a listing
     */
    getInventory(parameters: IGetInventoryParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Update the inventory for a listing
     */
    updateInventory(parameters: IUpdateInventoryParameters, options?: IAuthOptions): Promise<any>;
}
