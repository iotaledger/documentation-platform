export interface ProjectTopicsContainerProps {
    content: {
        name: string;
        description: string;
        links: {
            name: string;
            link: string;
            description: string;
        }[];
    }[];
}
