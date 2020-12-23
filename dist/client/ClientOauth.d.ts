import { Transaction } from './../api/Transaction';
import { Method } from 'axios';
export declare class HttpError extends Error {
    message: string;
    statusCode: number;
    headers: [];
    constructor(message: string, statusCode: number, headers: []);
}
export interface IAuthOptions {
    token: string;
    tokenSecret: string;
}
export interface IOptions {
    baseUrl?: string;
    requestUrl?: string;
    accessUrl?: string;
    consumerKey: string;
    consumerSecret: string;
    version?: string;
    authorizeCallback?: string | null;
    signatureMethod?: string;
}
export declare class ClientOauth {
    private readonly etsyOAuth;
    private baseUrl;
    private requestUrl;
    private accessUrl;
    private consumerKey;
    private consumerSecret;
    private version;
    private authorizeCallback;
    private signatureMethod;
    Transaction: Transaction;
    constructor(options: IOptions);
    request(uri: string, parameters: Record<string, any>, method: Method, options?: IAuthOptions): Promise<any>;
    fillUriPlaceholders(uri: string, parameters: any): string;
    encodePrameters(parameters: any): string;
}
