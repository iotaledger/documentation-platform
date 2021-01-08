import classNames from "classnames";
import React, { ReactNode } from "react";
import { ImageProps } from "./ImageProps";

class Image extends React.PureComponent<ImageProps> {
    public render(): ReactNode {
        return (
            <img
                id={this.props.id}
                src={this.props.src}
                alt={this.props.alt}
                className={classNames("image", this.props.className)}
            />
        );
    }
}

export default Image;
