import classNames from "classnames";
import React, { ReactNode } from "react";
import { TextProps } from "./TextProps";

class Text extends React.PureComponent<TextProps> {
    public render(): ReactNode {
        if (this.props.html) {
            return (
                <span
                    className={classNames("text", this.props.className)}
                    dangerouslySetInnerHTML={{ __html: this.props.children as string }}
                />
            );
        }

        return (<span className={classNames("text", this.props.className)}>{this.props.children}</span>);
    }
}

export default Text;
