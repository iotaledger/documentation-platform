export interface ISearchResultItem {
    /**
     * The id of the document result.
     */
    id: string;

    /**
     * The title of the document result.
     */
    title: string;

    /**
     * The snippet of the document result.
     */
    snippet: string;

    /**
     * The matches.
     */
    matches: string[];
}
