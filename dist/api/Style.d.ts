import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
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
    constructor(client: ClientOauth);
    /**
     * Retrieve all suggested styles.
     */
    findSuggestedStyles(parameters: IFindSuggestedStylesParameters, options?: IAuthOptions): Promise<any>;
}
