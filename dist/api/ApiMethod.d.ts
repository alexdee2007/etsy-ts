import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';
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
export interface IGetMethodTableParameters extends IStandardParameters {
}
export declare class ApiMethod {
    private readonly client;
    constructor(client: ClientOauth);
    /**
     * Get a list of all methods available.
     */
    getMethodTable(parameters: IGetMethodTableParameters, options?: IAuthOptions): Promise<any>;
}
