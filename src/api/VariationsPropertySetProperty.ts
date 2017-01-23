import {EtsyApiClient} from "../client/EtsyApiClient";

export interface IVariationsPropertySetProperty {
    property_id: number,
    name: string,
    input_name: string,
    label: string,
    param: string,
    default_option: string,
    description: string,
    is_custom: boolean,
    title: string
}


export class VariationsPropertySetProperty {
    constructor(private client: EtsyApiClient) {

    }


}