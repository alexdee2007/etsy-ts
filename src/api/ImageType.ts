import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
export interface IImageType {
    /**
     * Code for this image type, used in image URLs
     */
    code: string;
    /**
     * Text description of the image type
     */
    desc: string;
    /**
     * Available sizes for this image type
     */
    sizes: string[];
}

//parameters types
export interface IListImageTypesParameters extends IStandardParameters {}

//methods class
export class ImageType {
    constructor(private readonly client: Client) {}

    /**
     * Lists available image types along with their supported sizes.
     */
    async listImageTypes(
        parameters: IListImageTypesParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IListImageTypesParameters, IImageType>> {
        return this.client.request('/image_types', parameters, 'GET', options);
    }
}
