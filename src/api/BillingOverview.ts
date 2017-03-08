import {IStandardParameters} from "../client/IStandardParameters";
import {request} from "../client/httpClient";
import {IStandardResponse} from "../client/IStandardResponse";

//fields
export interface IBillingOverview {
    is_overdue: boolean,
    currency_code: string,
    overdue_balance: number,
    balance_due: number,
    total_balance: number,
    date_due: number,
    date_overdue: number
}

//parameters types

export interface IGetUserBillingOverviewParameters extends IStandardParameters {
    user_id: string | number
}

//methods

/**
 * Retrieves the user's current balance.
 */
export function getUserBillingOverview <TResult>(parameters: IGetUserBillingOverviewParameters): Promise<IStandardResponse<IGetUserBillingOverviewParameters, TResult>> {
    return request<IGetUserBillingOverviewParameters, TResult>("/users/:user_id/billing/overview", parameters, "GET");
}

export const BillingOverview = {getUserBillingOverview};
