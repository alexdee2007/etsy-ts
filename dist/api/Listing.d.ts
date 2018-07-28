import { IOptions } from "../client/client";
import { IStandardParameters } from "../client/IStandardParameters";
import { IStandardResponse } from "../client/IStandardResponse";
export interface IListing {
    listing_id: number;
    state: string;
    user_id: number;
    category_id: number;
    title: string;
    description: string;
    creation_tsz: number;
    ending_tsz: number;
    original_creation_tsz: number;
    last_modified_tsz: number;
    price: string;
    currency_code: string;
    quantity: number;
    tags: string[];
    category_path: string[];
    category_path_ids: number[];
    taxonomy_id: number;
    suggested_taxonomy_id: number;
    taxonomy_path: string[];
    materials: string[];
    shop_section_id: number;
    featured_rank: number;
    state_tsz: number;
    url: string;
    views: number;
    num_favorers: number;
    shipping_template_id: number;
    shipping_profile_id: number;
    processing_min: number;
    processing_max: number;
    who_made: "i_did" | "collective" | "someone_else";
    is_supply: boolean;
    when_made: "made_to_order" | "2010_2017" | "2000_2009" | "1998_1999" | "before_1998" | "1990_1997" | "1980s" | "1970s" | "1960s" | "1950s" | "1940s" | "1930s" | "1920s" | "1910s" | "1900s" | "1800s" | "1700s" | "before_1700";
    item_weight: number;
    item_weight_units: "oz" | "lb" | "g" | "kg";
    item_length: number;
    item_width: number;
    item_height: number;
    item_dimensions_unit: "in" | "ft" | "mm" | "cm" | "m";
    is_private: boolean;
    recipient: "men" | "women" | "unisex_adults" | "teen_boys" | "teen_girls" | "teens" | "boys" | "girls" | "children" | "baby_boys" | "baby_girls" | "babies" | "birds" | "cats" | "dogs" | "pets" | "not_specified";
    occasion: "anniversary" | "baptism" | "bar_or_bat_mitzvah" | "birthday" | "canada_day" | "chinese_new_year" | "cinco_de_mayo" | "confirmation" | "christmas" | "day_of_the_dead" | "easter" | "eid" | "engagement" | "fathers_day" | "get_well" | "graduation" | "halloween" | "hanukkah" | "housewarming" | "kwanzaa" | "prom" | "july_4th" | "mothers_day" | "new_baby" | "new_years" | "quinceanera" | "retirement" | "st_patricks_day" | "sweet_16" | "sympathy" | "thanksgiving" | "valentines" | "wedding";
    style: string[];
    non_taxable: boolean;
    is_customizable: boolean;
    is_digital: boolean;
    file_data: string;
    has_variations: boolean;
    should_auto_renew: boolean;
    language: string;
}
export interface ICreateListingParameters extends IStandardParameters {
    quantity: number;
    title: string;
    description: string;
    price: number;
    materials?: string[];
    shipping_template_id?: number;
    shop_section_id?: number;
    image_ids?: number[];
    is_customizable?: boolean;
    non_taxable?: boolean;
    image?: string;
    state?: "active" | "draft";
    processing_min?: number;
    processing_max?: number;
    category_id?: number;
    taxonomy_id?: number;
    tags?: string[];
    who_made: "i_did" | "collective" | "someone_else";
    is_supply: boolean;
    when_made: "made_to_order" | "2010_2017" | "2000_2009" | "1998_1999" | "before_1998" | "1990_1997" | "1980s" | "1970s" | "1960s" | "1950s" | "1940s" | "1930s" | "1920s" | "1910s" | "1900s" | "1800s" | "1700s" | "before_1700";
    recipient?: "men" | "women" | "unisex_adults" | "teen_boys" | "teen_girls" | "teens" | "boys" | "girls" | "children" | "baby_boys" | "baby_girls" | "babies" | "birds" | "cats" | "dogs" | "pets" | "not_specified";
    occasion?: "anniversary" | "baptism" | "bar_or_bat_mitzvah" | "birthday" | "canada_day" | "chinese_new_year" | "cinco_de_mayo" | "confirmation" | "christmas" | "day_of_the_dead" | "easter" | "eid" | "engagement" | "fathers_day" | "get_well" | "graduation" | "halloween" | "hanukkah" | "housewarming" | "kwanzaa" | "prom" | "july_4th" | "mothers_day" | "new_baby" | "new_years" | "quinceanera" | "retirement" | "st_patricks_day" | "sweet_16" | "sympathy" | "thanksgiving" | "valentines" | "wedding";
    style?: string[];
}
export interface IFindAllFeaturedListingsParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
    region?: string;
}
export interface IGetListingParameters extends IStandardParameters {
    listing_id: number[];
}
export interface IUpdateListingParameters extends IStandardParameters {
    listing_id: number;
    quantity?: number;
    title?: string;
    description?: string;
    price?: number;
    wholesale_price?: number;
    materials?: string[];
    renew?: boolean;
    shipping_template_id?: number;
    shop_section_id?: number;
    state?: "active" | "inactive" | "draft";
    image_ids?: number[];
    is_customizable?: boolean;
    item_weight?: number;
    item_length?: number;
    item_width?: number;
    item_height?: number;
    item_weight_unit?: string;
    item_dimensions_unit?: string;
    non_taxable?: boolean;
    category_id?: number;
    taxonomy_id?: number;
    tags?: string[];
    who_made?: "i_did" | "collective" | "someone_else";
    is_supply?: boolean;
    when_made?: "made_to_order" | "2010_2017" | "2000_2009" | "1998_1999" | "before_1998" | "1990_1997" | "1980s" | "1970s" | "1960s" | "1950s" | "1940s" | "1930s" | "1920s" | "1910s" | "1900s" | "1800s" | "1700s" | "before_1700";
    recipient?: "men" | "women" | "unisex_adults" | "teen_boys" | "teen_girls" | "teens" | "boys" | "girls" | "children" | "baby_boys" | "baby_girls" | "babies" | "birds" | "cats" | "dogs" | "pets" | "not_specified";
    occasion?: "anniversary" | "baptism" | "bar_or_bat_mitzvah" | "birthday" | "canada_day" | "chinese_new_year" | "cinco_de_mayo" | "confirmation" | "christmas" | "day_of_the_dead" | "easter" | "eid" | "engagement" | "fathers_day" | "get_well" | "graduation" | "halloween" | "hanukkah" | "housewarming" | "kwanzaa" | "prom" | "july_4th" | "mothers_day" | "new_baby" | "new_years" | "quinceanera" | "retirement" | "st_patricks_day" | "sweet_16" | "sympathy" | "thanksgiving" | "valentines" | "wedding";
    style?: string[];
    processing_min?: number;
    processing_max?: number;
    featured_rank?: number;
}
export interface IDeleteListingParameters extends IStandardParameters {
    listing_id: number;
}
export interface IFindAllListingActiveParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
    keywords?: string;
    sort_on?: "created" | "price" | "score";
    sort_order?: "up" | "down";
    min_price?: number;
    max_price?: number;
    color?: string;
    color_accuracy?: number;
    tags?: string[];
    category?: string;
    location?: string;
    lat?: number;
    lon?: number;
    region?: string;
    geo_level?: "city" | "state" | "country";
    accepts_gift_cards?: boolean;
    translate_keywords?: boolean;
}
export interface IGetInterestingListingsParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IGetTrendingListingsParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindBrowseSegmentListingsParameters extends IStandardParameters {
    path: string;
    limit?: number;
    offset?: number;
    page?: number;
    keywords?: string;
    sort_on?: "created" | "price" | "score";
    sort_order?: "up" | "down";
    min_price?: number;
    max_price?: number;
    ship_to?: string;
    location?: string;
    lat?: number;
    lon?: number;
    geo_level?: "city" | "state" | "country";
    accepts_gift_cards?: boolean;
}
export interface IFindAllListingsForFeaturedTreasuryIdParameters extends IStandardParameters {
    featured_treasury_id: number;
}
export interface IFindAllActiveListingsForFeaturedTreasuryIdParameters extends IStandardParameters {
    featured_treasury_id: number;
}
export interface IFindAllCurrentFeaturedListingsParameters extends IStandardParameters {
    region?: string;
}
export interface IFindAllReceiptListingsParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
    receipt_id: number;
}
export interface IFindAllShopListingsActiveParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
    shop_id: string | number;
    keywords?: string;
    sort_on?: "created" | "price" | "score";
    sort_order?: "up" | "down";
    min_price?: number;
    max_price?: number;
    color?: string;
    color_accuracy?: number;
    tags?: string[];
    category?: string;
    translate_keywords?: boolean;
    include_private?: boolean;
}
export interface IFindAllShopListingsDraftParameters extends IStandardParameters {
    shop_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllShopListingsExpiredParameters extends IStandardParameters {
    shop_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IGetShopListingExpiredParameters extends IStandardParameters {
    shop_id: string | number;
    listing_id: number;
}
export interface IFindAllShopListingsFeaturedParameters extends IStandardParameters {
    shop_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IFindAllShopListingsInactiveParameters extends IStandardParameters {
    shop_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}
export interface IGetShopListingInactiveParameters extends IStandardParameters {
    shop_id: string | number;
    listing_id: number;
}
export interface IFindAllShopSectionListingsParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
    shop_id: string | number;
    shop_section_id: number;
}
export interface IFindAllShopSectionListingsActiveParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
    shop_id: string | number;
    shop_section_id: number[];
    sort_on?: "created" | "price";
    sort_order?: "up" | "down";
}
export interface IFindAllCartListingsParameters extends IStandardParameters {
    user_id: string | number;
    cart_id: string | number;
}
/**
 * Creates a new Listing. NOTE: A shipping_template_id is required when creating a listing. NOTE: All listings created on www.etsy.com must be actual items for sale. Please see our guidelines for testing with live listings.
 */
declare function createListing<TResult>(parameters: ICreateListingParameters, options?: IOptions): Promise<IStandardResponse<ICreateListingParameters, TResult>>;
/**
 * Finds all FeaturedTreasury listings.
 */
declare function findAllFeaturedListings<TResult>(parameters: IFindAllFeaturedListingsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllFeaturedListingsParameters, TResult>>;
/**
 * Retrieves a Listing by id.
 */
declare function getListing<TResult>(parameters: IGetListingParameters, options?: IOptions): Promise<IStandardResponse<IGetListingParameters, TResult>>;
/**
 * Updates a Listing
 */
declare function updateListing<TResult>(parameters: IUpdateListingParameters, options?: IOptions): Promise<IStandardResponse<IUpdateListingParameters, TResult>>;
/**
 * Deletes a Listing
 */
declare function deleteListing<TResult>(parameters: IDeleteListingParameters, options?: IOptions): Promise<IStandardResponse<IDeleteListingParameters, TResult>>;
/**
 * Finds all active Listings. (Note: the sort_on and sort_order options only work when combined with one of the search options: keywords, color, tags, location, etc.)
 */
declare function findAllListingActive<TResult>(parameters: IFindAllListingActiveParameters, options?: IOptions): Promise<IStandardResponse<IFindAllListingActiveParameters, TResult>>;
/**
 * Collects the list of interesting listings
 */
declare function getInterestingListings<TResult>(parameters: IGetInterestingListingsParameters, options?: IOptions): Promise<IStandardResponse<IGetInterestingListingsParameters, TResult>>;
/**
 * Collects the list of listings used to generate the trending listing page
 */
declare function getTrendingListings<TResult>(parameters: IGetTrendingListingsParameters, options?: IOptions): Promise<IStandardResponse<IGetTrendingListingsParameters, TResult>>;
/**
 * Find Listings for a Segment by Segment path. NOTE: Offset must be an integer multiple of limit.
 */
declare function findBrowseSegmentListings<TResult>(parameters: IFindBrowseSegmentListingsParameters, options?: IOptions): Promise<IStandardResponse<IFindBrowseSegmentListingsParameters, TResult>>;
/**
 * Finds all listings for a certain FeaturedTreasury.
 */
declare function findAllListingsForFeaturedTreasuryId<TResult>(parameters: IFindAllListingsForFeaturedTreasuryIdParameters, options?: IOptions): Promise<IStandardResponse<IFindAllListingsForFeaturedTreasuryIdParameters, TResult>>;
/**
 * Finds all active listings for a certain FeaturedTreasury.
 */
declare function findAllActiveListingsForFeaturedTreasuryId<TResult>(parameters: IFindAllActiveListingsForFeaturedTreasuryIdParameters, options?: IOptions): Promise<IStandardResponse<IFindAllActiveListingsForFeaturedTreasuryIdParameters, TResult>>;
/**
 * Finds FeaturedTreasury listings that are currently displayed on a regional homepage.
 */
declare function findAllCurrentFeaturedListings<TResult>(parameters: IFindAllCurrentFeaturedListingsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllCurrentFeaturedListingsParameters, TResult>>;
/**
 * Finds all listings in a receipt
 */
declare function findAllReceiptListings<TResult>(parameters: IFindAllReceiptListingsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllReceiptListingsParameters, TResult>>;
/**
 * Finds all active Listings associated with a Shop.(NOTE: If calling on behalf of a shop owner in the context of listing management, be sure to include the parameter include_private = true.  This will return private listings that are not publicly visible in the shop, but which can be managed.  This is an experimental feature and may change.)
 */
declare function findAllShopListingsActive<TResult>(parameters: IFindAllShopListingsActiveParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopListingsActiveParameters, TResult>>;
/**
 * Finds all of a Shop's draft listings
 */
declare function findAllShopListingsDraft<TResult>(parameters: IFindAllShopListingsDraftParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopListingsDraftParameters, TResult>>;
/**
 * Retrieves Listings associated to a Shop that are expired
 */
declare function findAllShopListingsExpired<TResult>(parameters: IFindAllShopListingsExpiredParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopListingsExpiredParameters, TResult>>;
/**
 * Retrieves a Listing associated to a Shop that is inactive
 */
declare function getShopListingExpired<TResult>(parameters: IGetShopListingExpiredParameters, options?: IOptions): Promise<IStandardResponse<IGetShopListingExpiredParameters, TResult>>;
/**
 * Retrieves Listings associated to a Shop that are featured
 */
declare function findAllShopListingsFeatured<TResult>(parameters: IFindAllShopListingsFeaturedParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopListingsFeaturedParameters, TResult>>;
/**
 * Retrieves Listings associated to a Shop that are inactive
 */
declare function findAllShopListingsInactive<TResult>(parameters: IFindAllShopListingsInactiveParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopListingsInactiveParameters, TResult>>;
/**
 * Retrieves a Listing associated to a Shop that is inactive
 */
declare function getShopListingInactive<TResult>(parameters: IGetShopListingInactiveParameters, options?: IOptions): Promise<IStandardResponse<IGetShopListingInactiveParameters, TResult>>;
/**
 * Finds all listings within a shop section
 */
declare function findAllShopSectionListings<TResult>(parameters: IFindAllShopSectionListingsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopSectionListingsParameters, TResult>>;
/**
 * Finds all listings within a shop section
 */
declare function findAllShopSectionListingsActive<TResult>(parameters: IFindAllShopSectionListingsActiveParameters, options?: IOptions): Promise<IStandardResponse<IFindAllShopSectionListingsActiveParameters, TResult>>;
/**
 * Finds all listings in a given Cart
 */
declare function findAllCartListings<TResult>(parameters: IFindAllCartListingsParameters, options?: IOptions): Promise<IStandardResponse<IFindAllCartListingsParameters, TResult>>;
export declare const Listing: {
    createListing: typeof createListing;
    findAllFeaturedListings: typeof findAllFeaturedListings;
    getListing: typeof getListing;
    updateListing: typeof updateListing;
    deleteListing: typeof deleteListing;
    findAllListingActive: typeof findAllListingActive;
    getInterestingListings: typeof getInterestingListings;
    getTrendingListings: typeof getTrendingListings;
    findBrowseSegmentListings: typeof findBrowseSegmentListings;
    findAllListingsForFeaturedTreasuryId: typeof findAllListingsForFeaturedTreasuryId;
    findAllActiveListingsForFeaturedTreasuryId: typeof findAllActiveListingsForFeaturedTreasuryId;
    findAllCurrentFeaturedListings: typeof findAllCurrentFeaturedListings;
    findAllReceiptListings: typeof findAllReceiptListings;
    findAllShopListingsActive: typeof findAllShopListingsActive;
    findAllShopListingsDraft: typeof findAllShopListingsDraft;
    findAllShopListingsExpired: typeof findAllShopListingsExpired;
    getShopListingExpired: typeof getShopListingExpired;
    findAllShopListingsFeatured: typeof findAllShopListingsFeatured;
    findAllShopListingsInactive: typeof findAllShopListingsInactive;
    getShopListingInactive: typeof getShopListingInactive;
    findAllShopSectionListings: typeof findAllShopSectionListings;
    findAllShopSectionListingsActive: typeof findAllShopSectionListingsActive;
    findAllCartListings: typeof findAllCartListings;
};
export {};
