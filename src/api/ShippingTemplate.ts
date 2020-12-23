import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';

//fields
export interface IShippingTemplate {
    /**
     * The numeric ID of this shipping template.
     */
    shipping_template_id: number;
    /**
     * The name of this shipping template.
     */
    title: string;
    /**
     * The numeric ID of the user who owns this shipping template.
     */
    user_id: number;
    /**
     * The minimum number of days for processing the listing.
     */
    min_processing_days: number;
    /**
     * The maximum number of days for processing the listing.
     */
    max_processing_days: number;
    /**
     * Translated display label for processing days.
     */
    processing_days_display_label: string;
    /**
     * The numeric ID of the country from which the listing ships.
     */
    origin_country_id: number;
}

//parameters types
export interface ICreateShippingTemplateParameters extends IStandardParameters {
    title: string;
    origin_country_id: number;
    destination_country_id?: number;
    primary_cost: number;
    secondary_cost: number;
    destination_region_id?: number;
    min_processing_days?: number;
    max_processing_days?: number;
}

export interface IGetShippingTemplateParameters extends IStandardParameters {
    shipping_template_id: number[];
}

export interface IUpdateShippingTemplateParameters extends IStandardParameters {
    shipping_template_id: number;
    title?: string;
    origin_country_id?: number;
    min_processing_days?: number;
    max_processing_days?: number;
}

export interface IDeleteShippingTemplateParameters extends IStandardParameters {
    shipping_template_id: number;
}

export interface IFindAllShippingTemplateEntriesParameters extends IStandardParameters {
    shipping_template_id: number;
    limit?: number;
    offset?: number;
    page?: number;
}

export interface IFindAllUserShippingProfilesParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}

//methods class
export class ShippingTemplate {
    constructor(private readonly client: ClientOauth) {}

    /**
     * Creates a new ShippingTemplate
     */
    async createShippingTemplate(parameters: ICreateShippingTemplateParameters, options?: IAuthOptions) {
        return this.client.request('/shipping/templates', parameters, 'POST', options);
    }

    /**
     * Retrieves a ShippingTemplate by id.
     */
    async getShippingTemplate(parameters: IGetShippingTemplateParameters, options?: IAuthOptions) {
        return this.client.request('/shipping/templates/:shipping_template_id', parameters, 'GET', options);
    }

    /**
     * Updates a ShippingTemplate
     */
    async updateShippingTemplate(parameters: IUpdateShippingTemplateParameters, options?: IAuthOptions) {
        return this.client.request('/shipping/templates/:shipping_template_id', parameters, 'PUT', options);
    }

    /**
     * Deletes the ShippingTemplate with the given id.
     */
    async deleteShippingTemplate(parameters: IDeleteShippingTemplateParameters, options?: IAuthOptions) {
        return this.client.request('/shipping/templates/:shipping_template_id', parameters, 'DELETE', options);
    }

    /**
     * Retrieves a set of ShippingTemplateEntry objects associated to a ShippingTemplate.
     */
    async findAllShippingTemplateEntries(
        parameters: IFindAllShippingTemplateEntriesParameters,
        options?: IAuthOptions,
    ) {
        return this.client.request('/shipping/templates/:shipping_template_id/entries', parameters, 'GET', options);
    }

    /**
     * Retrieves a set of ShippingTemplate objects associated to a User.
     */
    async findAllUserShippingProfiles(parameters: IFindAllUserShippingProfilesParameters, options?: IAuthOptions) {
        return this.client.request('/users/:user_id/shipping/templates', parameters, 'GET', options);
    }
}
