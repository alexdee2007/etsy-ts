import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
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

export interface IShopAboutImage {
    /**
     * Numeric ID of the shop
     */
    shop_id: number;
    /**
     * Numeric ID of the image record
     */
    image_id: number;
    /**
     * Description of this ShopAboutImage
     */
    caption: string;
    /**
     * The order of this image in a list
     */
    rank: number;
    /**
     * The url to a thumbnail of the image, exactly 178px by 178px.
     */
    url_178x178: string;
    /**
     * The url to a thumbnail of the image, no more than 545px width by variable height.
     */
    url_545xN: string;
    /**
     * The url to a thumbnail of the image, no more than 760px width by variable height.
     */
    url_760xN: string;
    /**
     * The url to the full-size image, no more than 1500px width by variable height.
     */
    url_fullxfull: string;
}

export interface IShopAboutMember {
    /**
     * Numeric ID of this ShopAboutMember
     */
    shop_about_member_id: number;
    /**
     * Numeric ID of the associated Shop
     */
    shop_id: number;
    /**
     * The name of this ShopAboutMember
     */
    name: string;
    /**
     * The role of this ShopAboutMember
     */
    role: string;
    /**
     * The bio of this ShopAboutMember
     */
    bio: string;
    /**
     * The order of this member in a list
     */
    rank: number;
    /**
     * Whether this Member is an owner. A Shop can have multiple owners.
     */
    is_owner: boolean;
    /**
     * The url to a thumbnail of the image, exactly 90px by 90px.
     */
    url_90x90: string;
    /**
     * The url to a thumbnail of the image, exactly 190px by 190px.
     */
    url_190x190: string;
    /**
     * Whether the shop member translations need to be updated
     */
    has_stale_translations: boolean;
}

//parameters types
export interface IGetShopAboutParameters extends IStandardParameters {
    shop_id: string | number;
}

//methods class
export class ShopAbout {
    constructor(private readonly client: Client) {}

    /**
     * Retrieves a ShopAbout object associated to a Shop.
     */
    async getShopAbout(
        parameters: IGetShopAboutParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IGetShopAboutParameters, IShopAbout>> {
        return this.client.request('/shops/:shop_id/about', parameters, 'GET', options);
    }
}
