import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';

//fields
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

//parameters types
export interface IFindAllCountryParameters extends IStandardParameters {}

export interface IGetCountryParameters extends IStandardParameters {
    country_id: number[];
}

export interface IFindByIsoCodeParameters extends IStandardParameters {
    limit?: number;
    offset?: number;
    page?: number;
    iso_code: string;
}

//methods class
export class Country {
    constructor(private readonly client: ClientOauth) {}

    /**
     * Finds all Country.
     */
    async findAllCountry(parameters: IFindAllCountryParameters, options?: IAuthOptions) {
        return this.client.request('/countries', parameters, 'GET', options);
    }

    /**
     * Retrieves a Country by id.
     */
    async getCountry(parameters: IGetCountryParameters, options?: IAuthOptions) {
        return this.client.request('/countries/:country_id', parameters, 'GET', options);
    }

    /**
     * Get the country info for the given ISO code.
     */
    async findByIsoCode(parameters: IFindByIsoCodeParameters, options?: IAuthOptions) {
        return this.client.request('/countries/iso/:iso_code', parameters, 'GET', options);
    }
}
