import {EtsyApiClient} from "../client/EtsyApiClient";

export interface ICartListing {
    listing_id: number,
    purchase_quantity: number,
    purchase_state: string,
    is_digital: boolean,
    file_data: string,
    listing_customization_id: number,
    variations_available: boolean,
    has_variations: boolean,
    selected_variations: any[],
    offers_local_delivery: boolean
}


export class CartListing {
    constructor(private client: EtsyApiClient) {

    }


}