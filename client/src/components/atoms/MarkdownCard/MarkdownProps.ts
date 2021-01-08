import { ReactNode } from "react";

export interface MarkdownProps {
    alt: string;
    img: string;
    title: string;
    link: string;
    id: string;
    children: ReactNode | ReactNode[];
}
