export interface MarkdownProps {
    source: string;
    query?: string;
    highlights?: string[];
    apiEndpoint?: string;
    googleMapsKey?: string;
    isDeprecated?: boolean;
}
