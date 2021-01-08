import React, { ReactNode } from "react";
import Disclaimer from "../components/atoms/Disclaimer";
import Footer from "../components/organisms/Footer";
import { ContainerProps } from "./ContainerProps";

class Container extends React.PureComponent<ContainerProps> {
    public render(): ReactNode {
        return (
            <React.Fragment>
                {this.props.children}
                <Footer
                    projects={this.props.projects}
                    history={this.props.history}
                    location={this.props.location}
                    foundationData={this.props.foundationData}
                />
                <Disclaimer />
            </React.Fragment>);
    }
}

export default Container;
