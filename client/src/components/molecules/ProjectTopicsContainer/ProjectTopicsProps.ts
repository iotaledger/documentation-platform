export interface ProjectTopicsProps {
    content: {
        name: string;
        description: string;
        links: {
            name: string;
            link: string;
            description: string;
        }[];
    };
}
