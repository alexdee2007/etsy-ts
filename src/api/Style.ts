import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
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

//parameters types
export interface IFindSuggestedStylesParameters extends IStandardParameters {}

//methods class
export class Style {
    constructor(private readonly client: Client) {}

    /**
     * Retrieve all suggested styles.
     */
    async findSuggestedStyles(
        parameters: IFindSuggestedStylesParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IFindSuggestedStylesParameters, IStyle>> {
        return this.client.request('/taxonomy/styles', parameters, 'GET', options);
    }
}
