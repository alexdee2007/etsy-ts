import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
export interface IShippingUpgrade {
    /**
     * Identifier for the parent shipping profile
     */
    shipping_profile_id: number;
    /**
     * Identifier for the value
     */
    value_id: number;
    /**
     * Name of the shipping upgrade, e.g. USPS Priority
     */
    value: string;
    /**
     * Additional cost of adding the shipping upgrade
     */
    price: number;
    /**
     * Additional cost of adding the shipping upgrade with another item
     */
    secondary_price: number;
    /**
     * Currency for the price
     */
    currency_code: string;
    /**
     * Domestic (0) or international (1)
     */
    type: number;
    /**
     * Display order
     */
    order: number;
    /**
     * Language code
     */
    language: number;
}
export interface IGetListingShippingUpgradesParameters extends IStandardParameters {
    listing_id: number;
}
export interface ICreateListingShippingUpgradeParameters extends IStandardParameters {
    listing_id: number;
    type: number;
    value: string;
    price: number;
    secondary_price: number;
}
export interface IUpdateListingShippingUpgradeParameters extends IStandardParameters {
    listing_id: number;
    value_id: number;
    type: number;
    price: number;
    secondary_price: number;
}
export interface IDeleteListingShippingUpgradeParameters extends IStandardParameters {
    listing_id: number;
    value_id: number;
    type: number;
}
export interface IFindAllShippingTemplateUpgradesParameters extends IStandardParameters {
    shipping_template_id: number;
}
export interface ICreateShippingTemplateUpgradeParameters extends IStandardParameters {
    shipping_template_id: number;
    type: number;
    value: string;
    price: number;
    secondary_price: number;
}
export interface IUpdateShippingTemplateUpgradeParameters extends IStandardParameters {
    shipping_template_id: number;
    value_id: number;
    type: number;
    price: number;
    secondary_price: number;
}
export interface IDeleteShippingTemplateUpgradeParameters extends IStandardParameters {
    shipping_template_id: number;
    value_id: number;
    type: number;
}
export declare class ShippingUpgrade {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Get the shipping upgrades available for a listing.
     */
    getListingShippingUpgrades(parameters: IGetListingShippingUpgradesParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    createListingShippingUpgrade(parameters: ICreateListingShippingUpgradeParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    updateListingShippingUpgrade(parameters: IUpdateListingShippingUpgradeParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    deleteListingShippingUpgrade(parameters: IDeleteListingShippingUpgradeParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Retrieves a list of shipping upgrades for the parent ShippingTemplate
     */
    findAllShippingTemplateUpgrades(parameters: IFindAllShippingTemplateUpgradesParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    createShippingTemplateUpgrade(parameters: ICreateShippingTemplateUpgradeParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    updateShippingTemplateUpgrade(parameters: IUpdateShippingTemplateUpgradeParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    deleteShippingTemplateUpgrade(parameters: IDeleteShippingTemplateUpgradeParameters, options?: IAuthOptions): Promise<any>;
}
