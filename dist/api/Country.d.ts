import { Client, IAuthOptions } from '../client/client';
import { IStandardParameters } from '../client/IStandardParameters';
import { IStandardResponse } from '../client/IStandardResponse';
export interface ICountry {
    /**
     * The country's numeric ID.
     */
    country_id: number;
    /**
     * The two-letter country code according to ISO 3166-1-alpha-2.
     */
    iso_country_code: string;
    /**
     * The three-letter country code according to the World Bank.
     */
    world_bank_country_code: string;
    /**
     * The country's plain-English name.
     */
    name: string;
    /**
     * The country's plain-English name slugified; suitable for interpolation into a url.
     */
    slug: string;
    /**
     * The country's latitude.
     */
    lat: number;
    /**
     * The country's longitude.
     */
    lon: number;
}
export interface IFindAllCountryParameters extends IStandardParameters {
}
export interface IGetCountryParameters extends IStandardParameters {
    country_id: number[];
}
export interface IFindByIsoCodeParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
    iso_code: string;
}
export declare class Country {
    private readonly client;
    constructor(client: Client);
    /**
     * Finds all Country.
     */
    findAllCountry(parameters: IFindAllCountryParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindAllCountryParameters, ICountry>>;
    /**
     * Retrieves a Country by id.
     */
    getCountry(parameters: IGetCountryParameters, options?: IAuthOptions): Promise<IStandardResponse<IGetCountryParameters, ICountry>>;
    /**
     * Get the country info for the given ISO code.
     */
    findByIsoCode(parameters: IFindByIsoCodeParameters, options?: IAuthOptions): Promise<IStandardResponse<IFindByIsoCodeParameters, ICountry>>;
}
