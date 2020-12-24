import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';

//fields
export interface IListingOffering {
    /**
     * The numeric ID of this offering.
     */
    offering_id: number;
    /**
     * The price of the product
     */
    price: IMoney;
    /**
     * How many of this product are available?
     */
    quantity: number;
    /**
     * Is the offering shown to buyers?
     */
    is_enabled: boolean;
    /**
     * Has the offering been deleted?
     */
    is_deleted: boolean;
}

export interface IMoney {
    /**
     * The amount of money represented by this data.
     */
    amount: number;
    /**
     * The divisor to render the amount
     */
    divisor: number;
    /**
     * The requested locale currency.
     */
    currency_code: string;
    /**
     * The formatted amount without codes or symbols in the requested locale's numeric style, e.g. '10.42'.
     */
    formatted_raw: string;
    /**
     * The formatted amount with a symbol in the requested locale's numeric style, e.g. 'US$10.42'.
     */
    formatted_short: string;
    /**
     * The formatted amount with a symbol and currency in the requested locale's numeric style, e.g. '$10.42 USD'.
     */
    formatted_long: string;
    /**
     @deprecated
     * The original currency code the value was listed in (if the value has been converted).

     Deprecated: Replaced by "before_conversion" (to be removed 15 February 2017).
     */
    original_currency_code: string;
    /**
     * A representation of the value without currency conversion (if conversion has happened).
     */
    before_conversion: any;
}

//parameters types
export interface IGetOfferingParameters extends IStandardParameters {
    listing_id: number;
    product_id: number;
    offering_id: number;
}

//methods class
export class ListingOffering {
    constructor(private readonly client: Client) {}

    /**
     * Get a specific offering for a listing
     */
    async getOffering(
        parameters: IGetOfferingParameters,
        options?: IAuthOptions,
    ): Promise<IStandardResponse<IGetOfferingParameters, IListingOffering>> {
        return this.client.request(
            '/listings/:listing_id/products/:product_id/offerings/:offering_id',
            parameters,
            'GET',
            options,
        );
    }
}
