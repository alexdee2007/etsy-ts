import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';

//fields
export interface IGuest {
    /**
     * The ID that associates to the guest - a random 13-digit hash. Validated by the regular expression '/^[a-zA-Z0-9-_]+$/'. Each ID is identified internally to the Application that created it, meaning that other applications will not have access to this guest, even with the same ID.
     */
    guest_id: any;
    /**
     * The URL to send the user's browser to on checkout. This will allow them to use this guest ID to check out with the carts associated. Please note that a guest cart's data are undefined after being merged on checkout.
     */
    checkout_url: string;
}

//parameters types
export interface IGetGuestParameters extends IStandardParameters {
    guest_id: any;
}

export interface IGenerateGuestParameters extends IStandardParameters {}

export interface IClaimGuestParameters extends IStandardParameters {
    guest_id: any;
}

export interface IMergeGuestParameters extends IStandardParameters {
    guest_id: any;
    target_guest_id: any;
}

//methods class
export class Guest {
    constructor(private readonly client: ClientOauth) {}

    /**
     * Get a guest by ID.
     */
    async getGuest(parameters: IGetGuestParameters, options?: IAuthOptions) {
        return this.client.request('/guests/:guest_id', parameters, 'GET', options);
    }

    /**
     * A helper method that generates a Guest ID to associate to this anonymous session. This method is not strictly necessary, as any sufficiently random guest ID that is 13 characters in length will suffice and automatically create a guest account on use if it does not yet exist.
     */
    async generateGuest(parameters: IGenerateGuestParameters, options?: IAuthOptions) {
        return this.client.request('/guests/generator', parameters, 'GET', options);
    }

    /**
     * Claim this guest to the associated user. Merges the GuestCart's associated with this GuestId into the logged in User's Carts. Returns the number of listings merged in meta['listings_merged'].
     */
    async claimGuest(parameters: IClaimGuestParameters, options?: IAuthOptions) {
        return this.client.request('/guests/:guest_id/claim', parameters, 'POST', options);
    }

    /**
     * Merge this guest to a different guest. Merges the GuestCart's associated with this GuestId into the target guest's cart. Returns the number of listings merged in meta['listings_merged'].
     */
    async mergeGuest(parameters: IMergeGuestParameters, options?: IAuthOptions) {
        return this.client.request('/guests/:guest_id/merge', parameters, 'POST', options);
    }
}
