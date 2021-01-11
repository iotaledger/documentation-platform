import classNames from "classnames";
import React, { ReactNode } from "react";
import { copyToClipboard } from "../../../utils/clipboard";
import { TabProps } from "./TabProps";
import { TabState } from "./TabState";

class Tabs extends React.Component<TabProps, TabState> {
    constructor(props: TabProps) {
        super(props);

        this.state = {
            selectedIndex: 0,
            copyActive: false,
            copySuccess: false
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
    }

    public render(): ReactNode {
        return (
            <div className="tabs">
                <div className="tab-header">
                    <ul className="tab-header-list">
                        {this.props.headers.map((header, headerIdx) => (
                            <li
                                key={headerIdx}
                                className={classNames(
                                    "tab-header-item",
                                    { "tab-header-item--selected": headerIdx === this.state.selectedIndex }
                                )}
                            >
                                <a onClick={() => this.handleSelect(headerIdx)}>{header}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="tab-header-copy">
                        <span className={classNames(
                            "tab-header-copy-text",
                            { "tab-header-copy-text--active": this.state.copyActive },
                            { "tab-header-copy-text--failed": !this.state.copySuccess && this.state.copyActive }
                        )}
                        >{this.state.copySuccess ? "Copied" : "Failed"}
                        </span>
                        <button
                            type="button"
                            className="tab-header-copy-button icon-copy"
                            onClick={() => this.handleCopy()}
                        />
                    </div>
                </div>
                <div className="tab-container">
                    {this.props.contents.map((content, contentIdx) => (
                        <div
                            key={contentIdx}
                            className={classNames(
                                "tab-item",
                                { "tab-item--selected": contentIdx === this.state.selectedIndex }
                            )}
                        >
                            {content}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    private handleSelect(idx: number): void {
        this.setState({ selectedIndex: idx });
    }

    private handleCopy(): void {
        const markdown = this.props.source[this.state.selectedIndex];

        const success = copyToClipboard(markdown.replace(/```.*/g, "").trim());

        this.setState({
            copySuccess: success,
            copyActive: true
        });

        setTimeout(() => {
            this.setState({
                copyActive: false
            });
        }, 2000);
    }
}

export default Tabs;
