import { ISearchResult } from "../models/ISearchResult";

export interface SearchState {
    isMenuOpen: boolean;
    foundResult: ISearchResult[];
    page: number;
    indexStart: number;
    indexEnd: number;
    query: string;
    searching: boolean;
}
