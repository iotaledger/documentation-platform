import { History, Location } from "history";
import qs from "qs";

const QUERY_PARAM_NAME = "q";
const QUERY_PARAM_HIGHLIGHTS = "highlights";

/**
 * Performs a search.
 * @param history The history element to navigate.
 * @param query The query to search.
 */
export function performSearch(history: History, query: string): void {
    history.push(`/search?${constructSearchQuery(query)}`);
}

/**
 * Construct the search query url.
 * @param query The query.
 * @returns The search url.
 */
export function constructSearchQuery(query: string): string {
    return `${QUERY_PARAM_NAME}=${query.trim()}`;
}

/**
 * Extract the current search query from the url.
 * @param location The url to extract from.
 * @returns The extracted query.
 */
export function extractSearchQuery(location: Location): string {
    const params = qs.parse(location.search, { ignoreQueryPrefix: true });
    return params?.[QUERY_PARAM_NAME] ? params[QUERY_PARAM_NAME] as string : "";
}

/**
 * Construct the parameter for highlights.
 * @param highlights The highlight parameters.
 * @returns The highlight parameters.
 */
export function constructHighlights(highlights: string[]): string {
    return `${QUERY_PARAM_HIGHLIGHTS}=${highlights.join(";")}`;
}

/**
 * Extract the highlight paraeters from the url.
 * @param location The location to extract the highlight from.
 * @returns The highlighted parameter.
 */
export function extractHighlights(location: Location): string[] {
    const params = qs.parse(location.search, { ignoreQueryPrefix: true });
    return params?.[QUERY_PARAM_HIGHLIGHTS] ? (params[QUERY_PARAM_HIGHLIGHTS] as string).split(";") : [];
}
