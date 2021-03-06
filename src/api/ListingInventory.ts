import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
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

//parameters types
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

//methods class
export class ListingInventory {
    constructor(private readonly client: Client) {}

    /**
     * Get the inventory for a listing
     */
    async getInventory(
        parameters: IGetInventoryParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IGetInventoryParameters, IListingInventory>> {
        return this.client.request('/listings/:listing_id/inventory', parameters, 'GET', options);
    }

    /**
     * Update the inventory for a listing
     */
    async updateInventory(
        parameters: IUpdateInventoryParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IUpdateInventoryParameters, IListingInventory>> {
        return this.client.request('/listings/:listing_id/inventory', parameters, 'PUT', options);
    }
}
