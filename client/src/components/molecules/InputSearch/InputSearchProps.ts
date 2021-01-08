export interface InputSearchProps {
    query?: string;
    onSearch: (query: string) => void;
    onKeyUp?: (e: React.KeyboardEvent) => void;
    className: string;
    placeholder: string;
}
