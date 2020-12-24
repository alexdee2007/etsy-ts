import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';
export interface IListingVariationImage {
    /**
     * The variation images on a listing. An array with inputs for the property_id, value_id, and image_id fields.
     */
    variation_images: any;
}
export interface IGetVariationImagesParameters extends IStandardParameters {
    listing_id: number;
}
export interface IUpdateVariationImagesParameters extends IStandardParameters {
    listing_id: number;
    variation_images: any;
}
export declare class ListingVariationImage {
    private readonly client;
    constructor(client: Client);
    /**
     * Gets all variation images on a listing
     */
    getVariationImages(parameters: IGetVariationImagesParameters, options?: IAuthOptions): Promise<IStandardResponse<IGetVariationImagesParameters, IListingVariationImage>>;
    /**
     * Creates variation images on a listing
     */
    updateVariationImages(parameters: IUpdateVariationImagesParameters, options?: IAuthOptions): Promise<IStandardResponse<IUpdateVariationImagesParameters, IListingVariationImage>>;
}
