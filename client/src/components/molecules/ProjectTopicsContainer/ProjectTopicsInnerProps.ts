export interface ProjectTopicsInnerProps {
    content: {
        name: string;
        link: string;
        description: string;
        bullet?: "none" | "primary" | "secondary";
    }[];
    compressed?: boolean;
    highlights?: string[];
}
