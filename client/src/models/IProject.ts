import { IProjectHome } from "./IProjectHome";
import { IProjectVersionPage } from "./IProjectVersionPage";

export interface IProject {
    name: string;
    folder: string;
    home: IProjectHome;
    versions: {
        version: string;
        pages: IProjectVersionPage[];
    }[];
}
