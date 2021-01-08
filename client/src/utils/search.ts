import { History, Location } from "history";
import qs from "qs";

const QUERY_PARAM_NAME = "q";
const QUERY_PARAM_HIGHLIGHTS = "highlights";

export function performSearch(history: History, query: string): void {
    history.push(`/search?${constructSearchQuery(query)}`);
}

export function constructSearchQuery(query: string): string {
    return `${QUERY_PARAM_NAME}=${query.trim()}`;
}

export function extractSearchQuery(location: Location): string {
    const params = qs.parse(location.search, { ignoreQueryPrefix: true });
    return params?.[QUERY_PARAM_NAME] ? params[QUERY_PARAM_NAME] as string : "";
}

export function constructHighlights(highlights: string[]): string {
    return `${QUERY_PARAM_HIGHLIGHTS}=${highlights.join(";")}`;
}

export function extractHighlights(location: Location): string[] {
    const params = qs.parse(location.search, { ignoreQueryPrefix: true });
    return params?.[QUERY_PARAM_HIGHLIGHTS] ? (params[QUERY_PARAM_HIGHLIGHTS] as string).split(";") : [];
}
