import { History } from "history";
import { ITableOfContentsItem } from "../../../models/ITableOfContentsItem";

export interface TableOfContentsProps {
    items: ITableOfContentsItem[];
    title: string;
    compact?: boolean;
    history: History;
}
