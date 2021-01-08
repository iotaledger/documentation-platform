import { ReactNode } from "react";

export interface HeadingProps {
    children?: ReactNode | ReactNode[];
    level?: number;
    text?: string;
    className?: string;
    id?: string;
}
