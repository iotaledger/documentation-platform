import classNames from "classnames";
import React, { ReactNode } from "react";
import { currentScrollTop, scrollIntoView } from "../../../utils/scroll";
import { TableOfContentsProps } from "./TableOfContentsProps";
import { TableOfContentsState } from "./TableOfContentsState";

class TableOfContents extends React.PureComponent<TableOfContentsProps, TableOfContentsState> {
    private targets: HTMLElement[];

    constructor(props: TableOfContentsProps) {
        super(props);

        this.state = {
            activeTarget: undefined,
            filteredItems: this.props.items
        };
    }

    public componentDidMount(): void {
        document.addEventListener("scroll", () => this.handleScroll());
        window.addEventListener("resize", () => this.handleScroll());
        window.addEventListener("hashchange", () => this.handleHashChange(), false);
    }

    public componentDidUpdate(prevProps: TableOfContentsProps): void {
        if (this.props.items.length !== prevProps.items.length || !this.targets) {
            const headingCounters: { [index: string]: number } = {};

            let filteredItems = this.props.items;
            if (filteredItems.length > 30) {
                filteredItems = filteredItems.filter(i => i.level <= 2);
            }

            this.targets = filteredItems.map(item => {
                let id = item.link;

                if (headingCounters[id] === undefined) {
                    headingCounters[id] = -1;
                }
                headingCounters[id]++;
                if (headingCounters[id] > 0) {
                    id = `${id}_${headingCounters[id]}`;
                }

                item.link = id;

                const target = document.querySelector(item.link);
                if (!target) {
                    // eslint-disable-next-line no-console
                    console.error(`Unable to find TOC link '${item.link.slice(1)}' in content`);
                }

                return target as HTMLElement;
            }).filter(t => t !== undefined && t !== null);

            this.setState(
                {
                    filteredItems
                },
                () => {
                    this.handleScroll();
                    const defaultTarget = this.props.history.location?.hash;
                    if (defaultTarget) {
                        const elem = document.querySelector(defaultTarget);
                        if (elem) {
                            elem.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                    }
                }
            );
        }
    }

    public componentWillUnmount(): void {
        document.removeEventListener("scroll", () => this.handleScroll());
        window.removeEventListener("resize", () => this.handleScroll());
        window.removeEventListener("hashchange", () => this.handleHashChange());
    }

    public render(): ReactNode {
        return (
            <div className={classNames("table-of-contents",
                { "table-of-contents__compact": this.props.compact })}
            >
                <h3 className="table-of-contents__section-title">
                    {this.props.title}
                </h3>
                <ul className="table-of-contents__section">
                    {this.state.filteredItems.map((item, idx) => (
                        <li
                            key={idx} className={classNames(
                                "table-of-contents-list-item",
                                { "table-of-contents-list-item__sub": item.level > 2 },
                                {
                                    "table-of-contents-list-item__selected":
                                        this.state.activeTarget === item.link.slice(1)
                                })}
                        >
                            <a href={item.link} onClick={e => this.handleClick(e)}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    private handleHashChange(): void {
        const defaultTarget = this.props.history.location?.hash;
        if (defaultTarget) {
            const elem = document.querySelector(defaultTarget);
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }

    private handleScroll(): void {
        if (this.targets && this.targets.length > 0) {
            let activeTarget = this.targets[0].id;
            const scrollTop = currentScrollTop();

            for (let i = 0; i < this.targets.length; i++) {
                if (scrollTop >= this.targets[i].offsetTop - 200) {
                    activeTarget = this.targets[i].id;
                }
            }

            if (activeTarget !== this.state.activeTarget) {
                this.setState({
                    activeTarget
                });
            }
        }
    }

    private handleClick(e: React.MouseEvent): void {
        e.preventDefault();

        const href = (e.target as HTMLLinkElement).getAttribute("href");
        const target = document.querySelector(href);
        if (!target) {
            // eslint-disable-next-line no-console
            console.error(`Unable to find TOC link '${href}' in content`);
        } else {
            scrollIntoView(target, () => {
                this.props.history.push(
                    `${this.props.history.location.pathname
                    }${this.props.history.location.search}${href === "#root" ? "" : href}`);
            });
        }
    }
}

export default TableOfContents;
