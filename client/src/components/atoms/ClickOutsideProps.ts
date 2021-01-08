import { ReactNode } from "react";

export interface ClickOutsideProps {
    onClickOutside: () => void;
    children: ReactNode | ReactNode[];
}
