import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
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

//parameters types
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

//methods class
export class ShippingTemplateEntry {
    constructor(private readonly client: Client) {}

    /**
     * Creates a new ShippingTemplateEntry
     */
    async createShippingTemplateEntry(
        parameters: ICreateShippingTemplateEntryParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<ICreateShippingTemplateEntryParameters, IShippingTemplateEntry>> {
        return this.client.request('/shipping/templates/entries', parameters, 'POST', options);
    }

    /**
     * Retrieves a ShippingTemplateEntry by id.
     */
    async getShippingTemplateEntry(
        parameters: IGetShippingTemplateEntryParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IGetShippingTemplateEntryParameters, IShippingTemplateEntry>> {
        return this.client.request(
            '/shipping/templates/entries/:shipping_template_entry_id',
            parameters,
            'GET',
            options,
        );
    }

    /**
     * Updates a ShippingTemplateEntry
     */
    async updateShippingTemplateEntry(
        parameters: IUpdateShippingTemplateEntryParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IUpdateShippingTemplateEntryParameters, IShippingTemplateEntry>> {
        return this.client.request(
            '/shipping/templates/entries/:shipping_template_entry_id',
            parameters,
            'PUT',
            options,
        );
    }

    /**
     * Deletes the ShippingTemplateEntry
     */
    async deleteShippingTemplateEntry(
        parameters: IDeleteShippingTemplateEntryParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IDeleteShippingTemplateEntryParameters, IShippingTemplateEntry>> {
        return this.client.request(
            '/shipping/templates/entries/:shipping_template_entry_id',
            parameters,
            'DELETE',
            options,
        );
    }
}
