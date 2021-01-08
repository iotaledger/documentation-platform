import { ReactNode } from "react";

export interface TextProps {
    children: ReactNode | ReactNode[] | string;
    className?: string;
    html?: boolean;
}
