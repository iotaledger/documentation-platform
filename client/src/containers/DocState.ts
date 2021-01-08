import { IProjectVersionPage } from "../models/IProjectVersionPage";
import { ITableOfContentsItem } from "../models/ITableOfContentsItem";

export interface DocState {
    projectFullURL: string;
    projectFolder: string;
    projectVersion: string;
    projectDocParts: string[];
    projectDoc: string;
    projectDocTitle: string;
    projectVersions: string[];
    projectVersionPages: IProjectVersionPage[];
    pageTableOfContents: ITableOfContentsItem[];
    tags: string[];
    description: string;
    isDeprecated: boolean;
    isMenuOpen: boolean;
}
