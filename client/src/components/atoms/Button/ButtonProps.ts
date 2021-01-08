import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode | ReactNode[];
    id: string;
    large: boolean;
    small: boolean;
    disabled: boolean;
    className: string;
    onClick: () => void;
}
