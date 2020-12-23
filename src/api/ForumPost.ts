import { ClientOauth, IAuthOptions } from '../client/ClientOauth';
import { IStandardParameters } from '../client/IStandardParameters';

//fields
export interface IForumPost {
    /**
     * Unique identifier of the thread
     */
    thread_id: number;
    /**
     * Id of the individual post
     */
    post_id: number;
    /**
     * The content of the post
     */
    post: string;
    /**
     * Id of the user who created the post
     */
    user_id: string;
    /**
     * When the post was last edited
     */
    last_edit_time: number;
    /**
     * When the post was created
     */
    create_date: number;
}

//parameters types
export interface IFindTreasuryCommentsParameters extends IStandardParameters {
    treasury_key: string;
    limit?: number;
    offset?: number;
    page?: number;
}

export interface IPostTreasuryCommentParameters extends IStandardParameters {
    message: any;
}

export interface IDeleteTreasuryCommentParameters extends IStandardParameters {}

//methods class
export class ForumPost {
    constructor(private readonly client: ClientOauth) {}

    /**
     * Get a Treasury's Comments
     */
    async findTreasuryComments(parameters: IFindTreasuryCommentsParameters, options?: IAuthOptions) {
        return this.client.request('/treasuries/:treasury_key/comments', parameters, 'GET', options);
    }

    /**
     * Leave a comment on a Treasury List
     */
    async postTreasuryComment(parameters: IPostTreasuryCommentParameters, options?: IAuthOptions) {
        return this.client.request('/treasuries/:treasury_key/comments', parameters, 'POST', options);
    }

    /**
     * Delete a given comment on a Treasury List
     */
    async deleteTreasuryComment(parameters: IDeleteTreasuryCommentParameters, options?: IAuthOptions) {
        return this.client.request('/treasuries/:treasury_key/comments/:comment_id', parameters, 'DELETE', options);
    }
}
