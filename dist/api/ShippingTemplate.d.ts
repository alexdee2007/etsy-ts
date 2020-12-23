import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
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
export declare class ShippingTemplate {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Creates a new ShippingTemplate
     */
    createShippingTemplate(parameters: ICreateShippingTemplateParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Retrieves a ShippingTemplate by id.
     */
    getShippingTemplate(parameters: IGetShippingTemplateParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Updates a ShippingTemplate
     */
    updateShippingTemplate(parameters: IUpdateShippingTemplateParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Deletes the ShippingTemplate with the given id.
     */
    deleteShippingTemplate(parameters: IDeleteShippingTemplateParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Retrieves a set of ShippingTemplateEntry objects associated to a ShippingTemplate.
     */
    findAllShippingTemplateEntries(parameters: IFindAllShippingTemplateEntriesParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Retrieves a set of ShippingTemplate objects associated to a User.
     */
    findAllUserShippingProfiles(parameters: IFindAllUserShippingProfilesParameters, options?: IAuthOptions): Promise<any>;
}
