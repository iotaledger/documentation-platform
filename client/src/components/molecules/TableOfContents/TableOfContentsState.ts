import { ITableOfContentsItem } from "../../../models/ITableOfContentsItem";

export interface TableOfContentsState {
    activeTarget?: string;
    filteredItems: ITableOfContentsItem[];
}
