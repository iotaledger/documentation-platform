import { IResponse } from "./IResponse";
import { ISearchResultItem } from "./ISearchResultItem";

export interface ISearchResponse extends IResponse {
    /**
     * The search results.
     */
    items?: ISearchResultItem[];
}
