import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
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
export interface IListImageTypesParameters extends IStandardParameters {
}
export declare class ImageType {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Lists available image types along with their supported sizes.
     */
    listImageTypes(parameters: IListImageTypesParameters, options?: IAuthOptions): Promise<any>;
}
