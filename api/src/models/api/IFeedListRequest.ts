export interface IFeedListRequest {
    /**
     * The event context.
     */
    context: string;

    /**
     * The page number to list.
     */
    page?: string;

    /**
     * The page size to list.
     */
    pageSize?: string;
}
