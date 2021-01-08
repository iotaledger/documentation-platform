/* eslint-disable max-len */
import classNames from "classnames";
import React, { ReactNode } from "react";
import { buildItemTree } from "../../../utils/projects";
import Link from "../../atoms/Link";
import { TreeMenuProps } from "./TreeMenuProps";
import { TreeMenuState } from "./TreeMenuState";

class TreeMenu extends React.Component<TreeMenuProps, TreeMenuState> {
    constructor(props: TreeMenuProps) {
        super(props);

        this.state = {
            sections: []
        };
    }

    public componentDidUpdate(prevProps: TreeMenuProps): void {
        if (this.props.menuItems !== prevProps.menuItems) {
            this.setState({
                sections: buildItemTree(this.props.menuItems, this.props.highlightedItem)
            });
        }
    }

    public render(): ReactNode {
        const { sections } = this.state;
        return (
            <div className="tree-menu">
                {sections.map((section, idx) => (
                    <React.Fragment key={idx}>
                        {section.type === "section-link" && (
                            <h3
                                className={
                                    classNames(
                                        "tree-menu__section-title"
                                    )
                                }
                            >
                                <Link
                                    href={section.link}
                                    target={section.link.startsWith("http") ? "_blank" : undefined}
                                >
                                    {section.name}
                                </Link>
                            </h3>
                        )}
                        {section.type === "section-header" && (
                            <React.Fragment>
                                <h3 className={
                                    classNames(
                                        "tree-menu__section-title"
                                    )
                                }
                                >{section.name}
                                </h3>
                                <ul className={
                                    classNames(
                                        "tree-menu__section"
                                    )
                                }
                                >
                                    {section.items.map((item, idx2) => (
                                        <React.Fragment key={idx2}>
                                            <li
                                                className={
                                                    classNames(
                                                        "tree-menu__section-item",
                                                        { "tree-menu__section-item--selected": item.selected }
                                                    )
                                                }
                                            >
                                                {item.type === "section-header-item" && (
                                                    <Link
                                                        href={item.link}
                                                        target={item.link.startsWith("http") ? "_blank" : undefined}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )}
                                                {item.type === "section-header-sub" && (
                                                    <React.Fragment>
                                                        <Link
                                                            href={item.items[0].link}
                                                            target={item.items[0].link.startsWith("http")
                                                                ? "_blank" : undefined}
                                                        >
                                                            {item.name}
                                                            <span
                                                                className="tree-menu__section-item-superscript"
                                                            >
                                                                {item.items.length > 1 ? ` [${item.items.length}]` : ""}
                                                            </span>
                                                        </Link>
                                                        {item.selected && (
                                                            <ul className="tree-menu__section-item-sub">
                                                                {item.items.map((child, idx3) => (
                                                                    <li
                                                                        key={idx3}
                                                                        className={
                                                                            classNames(
                                                                                "tree-menu__section-item-sub-child",
                                                                                {
                                                                                    "tree-menu__section-item-sub-child--selected":
                                                                                        child.selected
                                                                                }
                                                                            )
                                                                        }
                                                                    >
                                                                        <Link
                                                                            href={child.link}
                                                                            target={child.link.startsWith("http")
                                                                                ? "_blank" : undefined}
                                                                        >
                                                                            {child.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </React.Fragment>
                                                )}
                                            </li>
                                        </React.Fragment>
                                    ))}
                                </ul>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                ))}
            </div>
        );
    }
}
export default TreeMenu;
