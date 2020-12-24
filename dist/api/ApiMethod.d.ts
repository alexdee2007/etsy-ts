import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';
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
    params: IParamList[];
    /**
     * An array of default values for parameters.  Parameters that lack a default are required.
     */
    defaults: IParamList[];
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
export interface IParamList {
    /**
     * Each field in the record represents an Etsy API method parameter.  The value corresponds to one of the documented data or resource types.
     */
    param_name: string;
}
export interface IGetMethodTableParameters extends IStandardParameters {
}
export declare class ApiMethod {
    private readonly client;
    constructor(client: Client);
    /**
     * Get a list of all methods available.
     */
    getMethodTable(parameters: IGetMethodTableParameters, options?: IAuthOptions): Promise<IStandardResponse<IGetMethodTableParameters, IApiMethod>>;
}
