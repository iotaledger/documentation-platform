import classNames from "classnames";
import React, { ReactNode } from "react";
import ClickOutside from "../ClickOutside";
import "./DropSelector.css";
import { DropSelectorProps } from "./DropSelectorProps";
import { DropSelectorState } from "./DropSelectorState";

class DropSelector extends React.PureComponent<DropSelectorProps, DropSelectorState> {
    constructor(props: DropSelectorProps) {
        super(props);

        this.state = {
            isExpanded: false
        };
    }

    public render(): ReactNode {
        return (
            <ClickOutside onClickOutside={this.state.isExpanded ? () => this.handleExpand() : undefined}>
                <div
                    className={classNames(
                    "drop-selector",
                    { "drop-selector__expanded": this.state.isExpanded }
                )}
                >
                    <div className="drop-selector-title" onClick={() => this.handleExpand()}>
                        <div className="drop-selector-title__text">{this.props.currentName}</div>
                        <div className="drop-selector-title__icon" />
                    </div>
                    <ul className="drop-selector-list">
                        {this.props.items.map(item => (
                            <li
                                key={item.link} className={classNames(
                                "drop-selector-list-item",
                                { "drop-selector-list-item__selected": item.name === this.props.currentName }
                            )}
                            >
                                <a href={item.link}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </ClickOutside>);
    }

    private handleExpand(): void {
        this.setState({ isExpanded: !this.state.isExpanded });
    }
}

export default DropSelector;
