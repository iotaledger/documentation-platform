import { ISearchResult } from "../../../models/ISearchResult";

export interface SearchResultProps {
    foundResult: ISearchResult[];
    indexStart: number;
    indexEnd: number;
    query: string;
}
