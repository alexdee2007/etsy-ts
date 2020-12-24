import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
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

//parameters types
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

//methods class
export class ShippingUpgrade {
    constructor(private readonly client: Client) {}

    /**
     * Get the shipping upgrades available for a listing.
     */
    async getListingShippingUpgrades(
        parameters: IGetListingShippingUpgradesParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IGetListingShippingUpgradesParameters, IShippingUpgrade>> {
        return this.client.request('/listings/:listing_id/shipping/upgrades', parameters, 'GET', options);
    }

    /**
     * Creates a new ShippingUpgrade for the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    async createListingShippingUpgrade(
        parameters: ICreateListingShippingUpgradeParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<ICreateListingShippingUpgradeParameters, IShippingUpgrade>> {
        return this.client.request('/listings/:listing_id/shipping/upgrades', parameters, 'POST', options);
    }

    /**
     * Updates a ShippingUpgrade on a listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    async updateListingShippingUpgrade(
        parameters: IUpdateListingShippingUpgradeParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IUpdateListingShippingUpgradeParameters, IShippingUpgrade>> {
        return this.client.request('/listings/:listing_id/shipping/upgrades', parameters, 'PUT', options);
    }

    /**
     * Deletes the ShippingUpgrade from the listing. Will unlink the listing if linked to a ShippingTemplate.
     */
    async deleteListingShippingUpgrade(
        parameters: IDeleteListingShippingUpgradeParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IDeleteListingShippingUpgradeParameters, IShippingUpgrade>> {
        return this.client.request('/listings/:listing_id/shipping/upgrades', parameters, 'DELETE', options);
    }

    /**
     * Retrieves a list of shipping upgrades for the parent ShippingTemplate
     */
    async findAllShippingTemplateUpgrades(
        parameters: IFindAllShippingTemplateUpgradesParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IFindAllShippingTemplateUpgradesParameters, IShippingUpgrade>> {
        return this.client.request('/shipping/templates/:shipping_template_id/upgrades', parameters, 'GET', options);
    }

    /**
     * Creates a new ShippingUpgrade for the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    async createShippingTemplateUpgrade(
        parameters: ICreateShippingTemplateUpgradeParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<ICreateShippingTemplateUpgradeParameters, IShippingUpgrade>> {
        return this.client.request('/shipping/templates/:shipping_template_id/upgrades', parameters, 'POST', options);
    }

    /**
     * Updates a ShippingUpgrade of the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    async updateShippingTemplateUpgrade(
        parameters: IUpdateShippingTemplateUpgradeParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IUpdateShippingTemplateUpgradeParameters, IShippingUpgrade>> {
        return this.client.request('/shipping/templates/:shipping_template_id/upgrades', parameters, 'PUT', options);
    }

    /**
     * Deletes the ShippingUpgrade from the parent ShippingTemplate. Updates any listings linked to the ShippingTemplate.
     */
    async deleteShippingTemplateUpgrade(
        parameters: IDeleteShippingTemplateUpgradeParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IDeleteShippingTemplateUpgradeParameters, IShippingUpgrade>> {
        return this.client.request('/shipping/templates/:shipping_template_id/upgrades', parameters, 'DELETE', options);
    }
}
