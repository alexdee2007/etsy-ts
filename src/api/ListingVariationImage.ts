import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';

//fields
export interface IListingVariationImage {
    /**
     * The variation images on a listing. An array with inputs for the property_id, value_id, and image_id fields.
     */
    variation_images: any;
}

//parameters types
export interface IGetVariationImagesParameters extends IStandardParameters {
    listing_id: number;
}

export interface IUpdateVariationImagesParameters extends IStandardParameters {
    listing_id: number;
    variation_images: any;
}

//methods class
export class ListingVariationImage {
    constructor(private readonly client: ClientOauth) {}

    /**
     * Gets all variation images on a listing
     */
    async getVariationImages(parameters: IGetVariationImagesParameters, options?: IAuthOptions) {
        return this.client.request('/listings/:listing_id/variation-images', parameters, 'GET', options);
    }

    /**
     * Creates variation images on a listing
     */
    async updateVariationImages(parameters: IUpdateVariationImagesParameters, options?: IAuthOptions) {
        return this.client.request('/listings/:listing_id/variation-images', parameters, 'POST', options);
    }
}
