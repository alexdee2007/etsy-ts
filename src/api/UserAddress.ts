import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';

//fields
export interface IUserAddress {
    /**
     * The numeric ID of the user's address.
     */
    user_address_id: number;
    /**
     * The user's numeric ID.
     */
    user_id: number;
    /**
     * The user's name for this address.
     */
    name: string;
    /**
     * The first line of the user's address.
     */
    first_line: string;
    /**
     * The second line of the user's address.
     */
    second_line: string;
    /**
     * The city field of the user's address.
     */
    city: string;
    /**
     * The state field of the user's address.
     */
    state: string;
    /**
     * The zip code field of the user's address.
     */
    zip: string;
    /**
     * The country's numeric ID.
     */
    country_id: number;
    /**
     * The name of the user's country
     */
    country_name: string;
    /**
     * Is this the user's default shipping address
     */
    is_default_shipping: boolean;
}

//parameters types
export interface IFindAllUserAddressesParameters extends IStandardParameters {
    user_id: string | number;
    limit?: number;
    offset?: number;
    page?: number;
}

export interface ICreateUserAddressParameters extends IStandardParameters {
    user_id: string | number;
    name: string;
    first_line: string;
    second_line?: string;
    city: string;
    state?: string;
    zip: string;
    country_id: number;
}

export interface IGetUserAddressParameters extends IStandardParameters {
    user_address_id: number[];
}

export interface IDeleteUserAddressParameters extends IStandardParameters {
    user_address_id: number;
}

//methods class
export class UserAddress {
    constructor(private readonly client: ClientOauth) {}

    /**
     * Retrieves a set of UserAddress objects associated to a User.
     */
    async findAllUserAddresses(parameters: IFindAllUserAddressesParameters, options?: IAuthOptions) {
        return this.client.request('/users/:user_id/addresses', parameters, 'GET', options);
    }

    /**
     * Creates a new UserAddress. Note: state is required when the country is US, Canada, or Australia. See section above about valid codes.
     */
    async createUserAddress(parameters: ICreateUserAddressParameters, options?: IAuthOptions) {
        return this.client.request('/users/:user_id/addresses/', parameters, 'POST', options);
    }

    /**
     * Retrieves a UserAddress by id.
     */
    async getUserAddress(parameters: IGetUserAddressParameters, options?: IAuthOptions) {
        return this.client.request('/users/:user_id/addresses/:user_address_id', parameters, 'GET', options);
    }

    /**
     * Deletes the UserAddress with the given id.
     */
    async deleteUserAddress(parameters: IDeleteUserAddressParameters, options?: IAuthOptions) {
        return this.client.request('/users/:user_id/addresses/:user_address_id', parameters, 'DELETE', options);
    }
}
