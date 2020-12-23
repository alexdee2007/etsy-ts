import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
export interface IShopAbout {
    /**
     * Numeric ID of the shop section.
     */
    shop_id: number;
    /**
     * Status of this data: active or draft. Only Shop owners can see drafts.
     */
    status: string;
    /**
     * ShopAbout headline text
     */
    story_headline: string;
    /**
     * The first part of the ShopAbout story
     */
    story_leading_paragraph: string;
    /**
     * The full ShopAbout story text
     */
    story: string;
    /**
     * The ShopAbout related links
     */
    related_links: string[];
    /**
     * URL to the Shop About page on the site.
     */
    url: string;
}
export interface IGetShopAboutParameters extends IStandardParameters {
    shop_id: string | number;
}
export declare class ShopAbout {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Retrieves a ShopAbout object associated to a Shop.
     */
    getShopAbout(parameters: IGetShopAboutParameters, options?: IAuthOptions): Promise<any>;
}
