/* eslint-disable max-len */
import classNames from "classnames";
import React, { ReactNode } from "react";
import { createSideMenuEntries } from "../../../utils/projects";
import ClickOutside from "../../atoms/ClickOutside";
import Link from "../../atoms/Link";
import { SideMenuProps } from "./SideMenuProps";
import { SideMenuState } from "./SideMenuState";

class SideMenu extends React.Component<SideMenuProps, SideMenuState> {
    constructor(props: SideMenuProps) {
        super(props);

        this.state = {
            menuData: [],
            expanded: undefined
        };
    }

    public componentDidMount(): void {
        document.addEventListener("keydown", e => this.keydown(e), false);

        this.setState({
            menuData: createSideMenuEntries(this.props.projects, this.props.highlightedItem)
        });
    }

    public componentDidUpdate(prevProps: SideMenuProps): void {
        if (this.props.highlightedItem !== prevProps.highlightedItem) {
            this.setState({
                menuData: createSideMenuEntries(this.props.projects, this.props.highlightedItem)
            });
        }
        document.body.classList.toggle("no-scroll", this.props.isMenuOpen);
    }

    public componentWillUnmount(): void {
        document.removeEventListener("keydown", e => this.keydown(e), false);
    }

    public render(): ReactNode {
        return (
            <ClickOutside onClickOutside={() => this.handleCloseClick()}>
                <section className={classNames(
                    "side-menu",
                    { "side-menu__shown": this.props.isMenuOpen },
                    { "side-menu__hidden": !this.props.isMenuOpen }
                )}
                >
                    <h4 className="side-menu__caption">
                        <span>Navigation</span>
                        <button
                            type="button"
                            className="side-menu__close"
                            onClick={() => this.handleCloseClick()}
                        />
                    </h4>

                    {this.state.menuData.map((menuItem, index) => (
                        <section
                            key={index}
                            className={classNames(
                                "side-menu__group",
                                { "side-menu__group--expanded": menuItem.expanded },
                                { "side-menu__group--selected": menuItem.selected }
                            )}
                        >
                            <h5 className="side-menu__heading" onClick={() => this.handleHeadingClick(index)}>
                                <span>{menuItem.name}</span>
                            </h5>
                            <ul className="side-menu__list">
                                {menuItem.items.map((menuListItem, miIndex) => (
                                    <React.Fragment key={miIndex}>
                                        {menuListItem.type === "section-link" && (
                                            <li className={classNames(
                                                "side-menu-item",
                                                { "side-menu-item--active": menuListItem.selected }
                                            )}
                                            >
                                                <Link
                                                    href={menuListItem.link}
                                                    target={menuListItem.link.startsWith("http") ? "_blank" : undefined}
                                                    className={classNames(
                                                        { "side-menu-item--active": menuListItem.selected })}
                                                >
                                                    {menuListItem.name}
                                                </Link>
                                            </li>
                                        )}
                                        {menuListItem.type === "section-header" && (
                                            <div className="side-menu__sub-list">
                                                <div className="side-menu-item__header">{menuListItem.name}</div>
                                                <ul>
                                                    {menuListItem.items.map((subItem, idx) => (
                                                        <React.Fragment key={idx}>
                                                            <li className={classNames(
                                                                "side-menu-item",
                                                                { "side-menu-item--active": subItem.selected }
                                                            )}
                                                            >
                                                                {subItem.type === "section-header-item" && (
                                                                    <Link
                                                                        href={subItem.link}
                                                                        target={subItem.link.startsWith("http")
                                                                            ? "_blank" : undefined}
                                                                        className={classNames({
                                                                            "side-menu-item--active": subItem.selected
                                                                        })}
                                                                    >
                                                                        {subItem.name}
                                                                    </Link>
                                                                )}
                                                                {subItem.type === "section-header-sub" && (
                                                                    <React.Fragment>
                                                                        <a
                                                                            onClick={() =>
                                                                                this.setState({ expanded: subItem })}
                                                                        >
                                                                            {subItem.name}
                                                                            <span
                                                                                className="side-menu__item-superscript"
                                                                            >
                                                                                {subItem.items.length > 1
                                                                                    ? ` [${subItem.items.length}]` : ""}
                                                                            </span>
                                                                        </a>
                                                                        {(subItem.selected ||
                                                                            subItem === this.state.expanded) && (
                                                                                <ul className="side-menu-item-sub">
                                                                                    {subItem
                                                                                        .items
                                                                                        .map((child, idx3) => (
                                                                                            <li
                                                                                                key={idx3}
                                                                                                className={
                                                                                                    classNames(
                                                                                                        "side-menu-item-sub-child",
                                                                                                        { "side-menu-item-sub-child--active": child.selected }
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
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </ul>
                        </section>))}
                </section>
            </ClickOutside>
        );
    }

    private handleHeadingClick(index: number): void {
        this.setState(state => ({
            menuData:
                state.menuData.map((item, ind) =>
                    (ind === index
                        ? { ...item, expanded: !item.expanded }
                        : { ...item, expanded: false }
                    ))
        }));
    }

    private handleCloseClick(): void {
        if (this.props.isMenuOpen && this.props.onCloseClick) {
            document.body.classList.toggle("no-scroll", false);
            this.props.onCloseClick();
        }
    }

    private keydown(event: KeyboardEvent): void {
        if (event.keyCode === 27 && this.props.isMenuOpen) {
            this.props.onCloseClick();
        }
    }
}
export default SideMenu;
