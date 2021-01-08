import classNames from "classnames";
import React, { ReactNode } from "react";
import { HorizontalRuleProps } from "./HorizontalRuleProps";

class HorizontalRule extends React.Component<HorizontalRuleProps> {
    public render(): ReactNode {
        return (
            <hr
                className={
                    classNames(
                        { "horizontal-rule--small": this.props.small }
                    )
                }
            />
        );
    }
}

export default HorizontalRule;
