import classNames from "classnames";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FloatingMenuProps } from "./FloatingMenuProps";
import { FloatingMenuState } from "./FloatingMenuState";

class FloatingMenu extends React.Component<FloatingMenuProps, FloatingMenuState> {
    private targets: HTMLElement[];

    constructor(props: FloatingMenuProps) {
        super(props);

        this.state = {
            activeTarget: null
        };
    }

    public componentDidMount(): void {
        this.handleScroll = this.handleScroll.bind(this);

        this.targets = this.props.menuItems.map(item => {
            const target = item.name.toLowerCase().replace(/ /g, "_");
            return document.querySelector(`#${target}`);
        });

        document.addEventListener("scroll", () => this.handleScroll());
        window.addEventListener("resize", () => this.handleScroll());

        this.handleScroll();
    }

    public componentWillUnmount(): void {
        document.removeEventListener("scroll", () => this.handleScroll());
        window.removeEventListener("resize", () => this.handleScroll());
    }

    public render(): ReactNode {
        return (
            <ul className="floating-menu">
                {
                    this.props.menuItems.map(item => (
                        <li
                            key={item.name}
                            className={
                                classNames("floating-menu__item",
                                    {
                                        "floating-menu__item--selected":
                                            this.props.highlightedItem === item.folder ||
                                            this.state.activeTarget === item.name.toLowerCase().replace(/ /g, "_")
                                    })
                            }
                        >
                            <Link to={item.link}>
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        );
    }

    private handleScroll(): void {
        const threshold = window.innerHeight * 0.35;

        let activeTarget = null;

        this.targets.forEach(target => {
            const rect = target.getBoundingClientRect();

            if (rect.top < threshold && rect.bottom > 0) {
                activeTarget = target.id;
            }
        });

        if (activeTarget !== this.state.activeTarget) {
            this.setState({
                activeTarget
            });
        }
    }
}

export default FloatingMenu;
