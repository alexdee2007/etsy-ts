import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
export interface IAvatar {
    /**
     * The numeric ID for this avatar image.
     */
    avatar_id: number;
    /**
     * The avatar' average RGB color, in webhex notation.
     */
    hex_code: string;
    /**
     * The avatar's average red channel (RGB color) value from 0-255.
     */
    red: number;
    /**
     * The avatar's average green channel (RGB color) value from 0-255.
     */
    green: number;
    /**
     * The avatar's average blue channel (RGB color) value from 0-255.
     */
    blue: number;
    /**
     * The avatar's average hue (HSV color) from 0-360.
     */
    hue: number;
    /**
     * The avatar's average saturation (HSV color) from 0-100.
     */
    saturation: number;
    /**
     * The avatar's average brightness (HSV color) from 0-100.
     */
    brightness: number;
    /**
     * True if the avatar is a black and white image.
     */
    is_black_and_white: boolean;
    /**
     * The time that the avatar was uploaded.
     */
    creation_tsz: number;
    /**
     * The numeric ID of the user who owns the avatar.
     */
    user_id: number;
}
export interface IUploadAvatarParameters extends IStandardParameters {
    src?: string;
    user_id: string | number;
    image?: string;
}
export interface IGetAvatarImgSrcParameters extends IStandardParameters {
    user_id: string | number;
}
export declare class Avatar {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Upload a new user avatar image
     */
    uploadAvatar(parameters: IUploadAvatarParameters, options?: IAuthOptions): Promise<any>;
    /**
     * Get avatar image source
     */
    getAvatarImgSrc(parameters: IGetAvatarImgSrcParameters, options?: IAuthOptions): Promise<any>;
}
