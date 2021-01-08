import { PureComponent, ReactNode } from "react";
import reactClickOutside from "react-click-outside";
import { ClickOutsideProps } from "./ClickOutsideProps";

class ClickOutside extends PureComponent<ClickOutsideProps> {
    public render(): ReactNode {
        return this.props.children;
    }

    public handleClickOutside(): void {
        if (this.props.onClickOutside) {
            this.props.onClickOutside();
        }
    }
}

export default reactClickOutside(ClickOutside);
