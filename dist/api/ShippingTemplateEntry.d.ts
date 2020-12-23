import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
export interface IShippingTemplateEntry {
    /**
     * The numeric ID of this shipping template entry.
     */
    shipping_template_entry_id: number;
    /**
     * The numeric ID of the template this entry belongs to.
     */
    shipping_template_id: number;
    /**
     * The currency code for the prices in this template entry.
     */
    currency_code: string;
    /**
     * The numeric ID of the country from which the listing ships.
     */
    origin_country_id: number;
    /**
     * The numeric ID of the country to which the listing ships (optional).  If missing, these fees apply to all destinations.
     */
    destination_country_id: number;
    /**
     * The numeric ID of the region to which the listing ships (optional).  Regions are collections of countries.
     */
    destination_region_id: number;
    /**
     * The shipping fee for this item, if shipped alone.
     */
    primary_cost: number;
    /**
     * The shipping fee for this item, if shipped with another item.
     */
    secondary_cost: number;
}
export interface ICreateShippingTemplateEntryParameters extends IStandardParameters {
    shipping_template_id: number;
    destination_country_id?: number;
    primary_cost: number;
    secondary_cost: number;
    destination_region_id?: number;
}
export interface IGetShippingTemplateEntryParameters extends IStandardParameters {
    shipping_template_entry_id: number[];
}
export interface IUpdateShippingTemplateEntryParameters extends IStandardParameters {
    shipping_template_entry_id: number;
    destination_country_id?: number;
    primary_cost?: number;
    secondary_cost?: number;
}
export interface IDeleteShippingTemplateEntryParameters extends IStandardParameters {
    shipping_template_entry_id: number;
}
export declare class ShippingTemplateEntry {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Creates a new ShippingTemplateEntry
     */
    createShippingTemplateEntry(parameters: ICreateShippingTemplateEntryParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Retrieves a ShippingTemplateEntry by id.
     */
    getShippingTemplateEntry(parameters: IGetShippingTemplateEntryParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Updates a ShippingTemplateEntry
     */
    updateShippingTemplateEntry(parameters: IUpdateShippingTemplateEntryParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Deletes the ShippingTemplateEntry
     */
    deleteShippingTemplateEntry(parameters: IDeleteShippingTemplateEntryParameters, options?: IAuthOptions): Promise<any>;
}
