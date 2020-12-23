import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';

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
    constructor(private readonly client: ClientOauth) {}

    /**
     * Retrieve all suggested styles.
     */
    async findSuggestedStyles(parameters: IFindSuggestedStylesParameters, options?: IAuthOptions) {
        return this.client.request('/taxonomy/styles', parameters, 'GET', options);
    }
}
