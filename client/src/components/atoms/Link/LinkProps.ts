import { ReactNode } from "react";

export interface LinkProps {
    id?: string;
    href: string;
    target?: string;
    text?: string;
    className?: string;
    disabled?: boolean;
    children?: ReactNode | ReactNode[];
}
