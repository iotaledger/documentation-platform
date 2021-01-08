import { IProjectLink } from "../../../models/IProjectLink";

export interface FooterState {
    projectLinks: IProjectLink[];
    currentProjectFolder: string;
    footerSections: {
        heading: string;
        links: {
            name: string;
            link: string;
            folder?: string;
        }[];
    }[];
}
