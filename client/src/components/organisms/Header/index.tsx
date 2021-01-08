import React, { ReactNode } from "react";
import logo from "../../../assets/Logo.svg";
import { performSearch } from "../../../utils/search";
import InputSearch from "../../molecules/InputSearch";
import { HeaderProps } from "./HeaderProps";

class Header extends React.Component<HeaderProps> {
    public render(): ReactNode {
        const { topTitles } = this.props;

        return (
            <header className="header">
                <div className="header__wrapper">
                    <section className="header__head">
                        <img className="header__brand" src={logo} />
                        <div>
                            <div className="top-header">
                                <ul className="top-header__items">
                                    {topTitles.map((topTitle, index) =>
                                        (
                                            <li key={index} className="top-header__item">
                                                <a
                                                    href={topTitle.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {topTitle.name}
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <button
                                type="button"
                                className="header__icon"
                                onClick={() => this.handleBurgerClick()}
                            />
                        </div>
                    </section>
                    <section className="header__body" style={{}}>
                        <span className="header__title text text--level1 text--secondary">Developer Documentation</span>
                        <div className="header__search">
                            <div className="input-wrapper">
                                <InputSearch
                                    className="input-search"
                                    placeholder="Search for topics"
                                    onSearch={query => this.onSearch(query)}
                                />
                                {this.props.popularTopics && (
                                    <nav>
                                        <span>Popular topics:</span>
                                        {
                                            this.props.popularTopics.map((pt, idx) => (
                                                <React.Fragment key={idx}>
                                                    <a onClick={() => this.onSearch(pt.query)}>{pt.name}</a>
                                                    {
                                                        idx < this.props.popularTopics.length - 1 && (
                                                            <span>,</span>
                                                        )
                                                    }
                                                </React.Fragment>
                                            ))
                                        }
                                    </nav>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </header>
        );
    }

    private handleBurgerClick(): void {
        if (this.props.onBurgerClick) {
            this.props.onBurgerClick();
        }
    }

    private onSearch(query: string): void {
        performSearch(this.props.history, query);
    }
}
export default Header;
