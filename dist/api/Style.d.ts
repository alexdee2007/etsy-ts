import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';
export interface IStyle {
    /**
     * Style ID for this style
     */
    style_id: number;
    /**
     * Style Name
     */
    style: string;
}
export interface IFindSuggestedStylesParameters extends IStandardParameters {
}
export declare class Style {
    private readonly client;
    constructor(client: Client);
    /**
     * Retrieve all suggested styles.
     */
    findSuggestedStyles(parameters: IFindSuggestedStylesParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindSuggestedStylesParameters, IStyle>>;
}
