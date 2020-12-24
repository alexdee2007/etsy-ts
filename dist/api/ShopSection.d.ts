import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';
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
export declare class ShopSection {
    private readonly client;
    constructor(client: Client);
    /**
     * Retrieves a set of ShopSection objects associated to a Shop.
     */
    findAllShopSections(parameters: IFindAllShopSectionsParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindAllShopSectionsParameters, IShopSection>>;
    /**
     * Creates a new ShopSection.
     */
    createShopSection(parameters: ICreateShopSectionParameters, options?: IAuthOptions): Promise<IStandardResponse<ICreateShopSectionParameters, IShopSection>>;
    /**
     * Retrieves a ShopSection by id and shop_id
     */
    getShopSection(parameters: IGetShopSectionParameters, options?: IAuthOptions): Promise<IStandardResponse<IGetShopSectionParameters, IShopSection>>;
    /**
     * Updates a ShopSection with the given id.
     */
    updateShopSection(parameters: IUpdateShopSectionParameters, options?: IAuthOptions): Promise<IStandardResponse<IUpdateShopSectionParameters, IShopSection>>;
    /**
     * Deletes the ShopSection with the given id.
     */
    deleteShopSection(parameters: IDeleteShopSectionParameters, options?: IAuthOptions): Promise<IStandardResponse<IDeleteShopSectionParameters, IShopSection>>;
}
