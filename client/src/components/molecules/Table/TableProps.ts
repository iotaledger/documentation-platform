export interface TableProps {
    headers: {
        content: string | Element;
        align: "left" | "right" | "center";
    }[];

    rows: {
        content: string | Element;
        isHeader: boolean;
        align: "left" | "right" | "center";
    }[][];
}
