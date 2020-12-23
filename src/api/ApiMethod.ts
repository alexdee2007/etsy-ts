import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';

//fields
export interface IApiMethod {
    /**
     * The method's descriptive name.
     */
    name: string;
    /**
     * The method's URI pattern.  Parameters are marked with a leading colon.
     */
    uri: string;
    /**
     * An array of method parameters and types.
     */
    params: any;
    /**
     * An array of default values for parameters.  Parameters that lack a default are required.
     */
    defaults: any;
    /**
     * The resource type returned by the method.
     */
    type: string;
    /**
     * The method's visibility level.  Methods marked "private" require authentication.
     */
    visibility: string;
    /**
     * The HTTP method used to call the API method.
     */
    http_method: string;
}

//parameters types
export interface IGetMethodTableParameters extends IStandardParameters {}

//methods class
export class ApiMethod {
    constructor(private readonly client: ClientOauth) {}

    /**
     * Get a list of all methods available.
     */
    async getMethodTable(parameters: IGetMethodTableParameters, options?: IAuthOptions) {
        return this.client.request('/', parameters, 'GET', options);
    }
}
