import Axios from "axios";
import { ISearchRequest } from "../models/api/ISearchRequest";
import { ISearchResponse } from "../models/api/ISearchResponse";
import { ISearchResultItem } from "../models/api/ISearchResultItem";
import { IConfiguration } from "../models/IConfiguration";

/**
 * Search the documents.
 * @param config The configuration.
 * @param request the request.
 * @returns The response.
 */
export async function search(config: IConfiguration, request: ISearchRequest): Promise<ISearchResponse> {
    let response: ISearchResponse;

    try {
        const items: ISearchResultItem[] = [];

        let solrQuery = "q=";

        let queries = [request.query];
        const queryParts = request.query.split(" ");
        if (queryParts.length > 1) {
            queries = queries.concat(queryParts);
        }

        // The first item which is the complete phrase has the most boost applied.
        let boostMultiplier = 5;
        for (let i = 0; i < queries.length; i++) {
            const escapedQuery = `"${queries[i]}"`;
            solrQuery += `tags:${escapedQuery}^${15 * boostMultiplier} `;  // Boost if exact match found in tags
            solrQuery += `title:${escapedQuery}^${10 * boostMultiplier} `; // Boost if exact match found in title
            solrQuery += `id:${escapedQuery}^${10 * boostMultiplier} `;    // Boost if exact match found in id
            solrQuery += `body:${escapedQuery}^${5 * boostMultiplier} `;   // Boost if exact match found in body
            solrQuery += `tags:${escapedQuery}~2 `;   // Fuzzy search in tags, 2 changes from original query
            solrQuery += `title:${escapedQuery}~2 `;  // Fuzzy search in title, 2 changes from original query
            solrQuery += `body:${escapedQuery}~2`;    // Fuzzy search in body, 2 changes from original query
            boostMultiplier = 1;
        }

        const solrOptions = "hl=true&hl.fl=title,body&hl.fragsize=0&hl.method=unified&rows=50";

        let endPoint = config.search.endpoint;
        if (!endPoint.endsWith("/")) {
            endPoint += "/";
        }
        if (!endPoint.endsWith("solr/")) {
            endPoint += "solr/";
        }

        const solrExec = `${endPoint}/${config.search.core}/select?${solrQuery}&${solrOptions}`;

        const axiosOptions: {
            /**
             * Http request headers.
             */
            headers: { [id: string]: string };
        } = {
            headers: {}
        };

        if (config.search.authorization) {
            axiosOptions.headers.Authorization = `Basic ${config.search.authorization}`;
        }

        const res = await Axios.get(solrExec, axiosOptions);
        if (res.data && res.data.response && res.data.response.docs) {
            for (let i = 0; i < res.data.response.docs.length; i++) {
                const matches = [];
                if (res.data.highlighting && res.data.highlighting[res.data.response.docs[i].id]) {
                    if (res.data.highlighting[res.data.response.docs[i].id].title) {
                        extractMatches(res.data.highlighting[res.data.response.docs[i].id].title[0], matches);
                    }
                    if (res.data.highlighting[res.data.response.docs[i].id].body) {
                        extractMatches(res.data.highlighting[res.data.response.docs[i].id].body[0], matches);
                    }
                }
                const searchResultItem: ISearchResultItem = {
                    id: res.data.response.docs[i].id,
                    title: res.data.response.docs[i].title[0],
                    snippet: res.data.response.docs[i].snippet[0],
                    matches
                };
                // Boost overview pages to the start of the list if they contain the query
                if (searchResultItem.id.toLowerCase().indexOf(request.query.toLowerCase()) >= 0 &&
                    searchResultItem.id.endsWith("overview")) {
                    items.unshift(searchResultItem);
                } else {
                    items.push(searchResultItem);
                }
            }
        }

        response = {
            success: true,
            message: "OK",
            items
        };
    } catch (err) {
        response = {
            success: false,
            message: err.toString()
        };
    }

    return response;
}

/**
 * Extract matches from data.
 * @param field The field to extact from.
 * @param matches The matches list.
 */
function extractMatches(field: string, matches: string[]): void {
    const highlightMatch = /<em>(.*?)<\/em>/g;
    let match;
    do {
        match = highlightMatch.exec(field);
        if (match && matches.indexOf(match[1]) < 0) {
            matches.push(match[1]);
        }
    } while (match);

}
