import classNames from "classnames";
import React, { ReactNode } from "react";
import { ParagraphProps } from "./ParagraphProps";

class Paragraph extends React.PureComponent<ParagraphProps> {
    public render(): ReactNode {
        return (
            <p className={classNames("paragraph", this.props.className)}>{this.props.children}</p>
        );
    }
}

export default Paragraph;
