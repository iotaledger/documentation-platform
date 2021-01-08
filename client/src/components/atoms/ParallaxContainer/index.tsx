import Parallax from "parallax-js";
import React, { ReactNode } from "react";
import "./parallaxContainer.css";
import { ParallaxContainerProps } from "./ParallaxContainerProps";


class ParallaxContainer extends React.PureComponent<ParallaxContainerProps> {
    private parallaxInstance: Parallax;

    private parallaxEl: HTMLDivElement;

    public componentDidMount(): void {
        this.parallaxInstance = new Parallax(this.parallaxEl, {});
    }

    public componentWillUnmount(): void {
        if (this.parallaxInstance) {
            this.parallaxInstance.destroy();
        }
    }

    public render(): ReactNode {
        return (
            <div className="parallax" ref={el => (this.parallaxEl = el)}>
                {this.props.children}
            </div>
        );
    }
}

export default ParallaxContainer;
