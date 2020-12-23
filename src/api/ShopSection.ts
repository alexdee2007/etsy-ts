import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';

//fields
export interface IShopSection {
    /**
     * The numeric ID of the shop section.
     */
    shop_section_id: number;
    /**
     * The title of the section.
     */
    title: string;
    /**
     * Display order.
     */
    rank: number;
    /**
     * The ID of the user who owns this shop section.
     */
    user_id: number;
    /**
     * The number of active listings currently in the section.
     */
    active_listing_count: number;
}

//parameters types
export interface IFindAllShopSectionsParameters extends IStandardParameters {
    shop_id: string | number;
}

export interface ICreateShopSectionParameters extends IStandardParameters {
    shop_id: string | number;
    title?: string;
    user_id?: number;
}

export interface IGetShopSectionParameters extends IStandardParameters {
    shop_id: string | number;
    shop_section_id: number[];
}

export interface IUpdateShopSectionParameters extends IStandardParameters {
    shop_id: string | number;
    shop_section_id: number;
    title?: string;
    user_id?: number;
}

export interface IDeleteShopSectionParameters extends IStandardParameters {
    shop_id: string | number;
    shop_section_id: number;
}

//methods class
export class ShopSection {
    constructor(private readonly client: ClientOauth) {}

    /**
     * Retrieves a set of ShopSection objects associated to a Shop.
     */
    async findAllShopSections(parameters: IFindAllShopSectionsParameters, options?: IAuthOptions) {
        return this.client.request('/shops/:shop_id/sections', parameters, 'GET', options);
    }

    /**
     * Creates a new ShopSection.
     */
    async createShopSection(parameters: ICreateShopSectionParameters, options?: IAuthOptions) {
        return this.client.request('/shops/:shop_id/sections', parameters, 'POST', options);
    }

    /**
     * Retrieves a ShopSection by id and shop_id
     */
    async getShopSection(parameters: IGetShopSectionParameters, options?: IAuthOptions) {
        return this.client.request('/shops/:shop_id/sections/:shop_section_id', parameters, 'GET', options);
    }

    /**
     * Updates a ShopSection with the given id.
     */
    async updateShopSection(parameters: IUpdateShopSectionParameters, options?: IAuthOptions) {
        return this.client.request('/shops/:shop_id/sections/:shop_section_id', parameters, 'PUT', options);
    }

    /**
     * Deletes the ShopSection with the given id.
     */
    async deleteShopSection(parameters: IDeleteShopSectionParameters, options?: IAuthOptions) {
        return this.client.request('/shops/:shop_id/sections/:shop_section_id', parameters, 'DELETE', options);
    }
}
