export interface IStandardResponse<TParameters, TResult> {
    count: number;
    results: TResult[];
    params: TParameters;
    type: string;
    pagination?: {
        effective_limit: number;
        effective_offset: number;
        next_offset: number | null;
        effective_page: number;
        next_page: number | null;
    };
}
