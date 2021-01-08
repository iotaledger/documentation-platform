export interface IProjectVersionPage {
    name: string;
    link: string;
    toc: {
        level: number;
        name: string;
    }[];
    description: string;
    assets: string[];
    tags: string[];
    status: string[];
}
