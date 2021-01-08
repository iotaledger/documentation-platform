export interface PaginationProps {
    totalCount: number;
    page: number;
    maxPerPage?: number;
    onDataPaginated: (index: number, page: number, pages: number) => void;
}
