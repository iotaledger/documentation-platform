import { IResponse } from "./IResponse";

export interface IFeedListResponse extends IResponse {
    /**
     * The items.
     */
    items?: any[];

    /**
     * Total items.
     */
    totalItems?: number;

    /**
     * Total pages.
     */
    totalPages?: number;
}
