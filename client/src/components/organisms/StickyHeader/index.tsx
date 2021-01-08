import classNames from "classnames";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo.svg";
import { performSearch } from "../../../utils/search";
import InputSearch from "../../molecules/InputSearch";
import { StickyHeaderProps } from "./StickyHeaderProps";
import { StickyHeaderState } from "./StickyHeaderState";

class StickyHeader extends React.Component<StickyHeaderProps, StickyHeaderState> {
    private searchInput: HTMLInputElement;

    constructor(props: StickyHeaderProps) {
        super(props);

        this.state = {
            inputExpanded: false
        };
    }

    public render(): ReactNode {
        return (
            <header className={classNames("sticky-header", { "sticky-header--expanded": this.state.inputExpanded })}>
                <Link to="/">
                    <img className="sticky-header__brand" src={logo} />
                </Link>
                <div className="sticky-header__control">
                    <div
                        onClick={() => this.inputExpandHandler()}
                        className={classNames("input-sticky-wrapper", {
                            "input-sticky-wrapper--expanded": this.state.inputExpanded
                        })}
                    >
                        <InputSearch
                            ref={input => {
                                this.searchInput = input as unknown as HTMLInputElement;
                            }}
                            className="input-search-sticky"
                            placeholder="Search for topics"
                            onKeyUp={e => this.handleKeyUp(e)}
                            onSearch={query => this.onSearch(query)}
                        />
                        <button
                            type="button"
                            className="sticky-header__icon-close"
                            onClick={() => this.handleCloseClick()}
                        />
                    </div>
                    <button
                        type="button"
                        className="sticky-header__icon-burger"
                        onClick={() => this.handleBurgerClick()}
                    />
                </div>
            </header>
        );
    }

    private handleBurgerClick(): void {
        this.setState({ inputExpanded: false });
        if (this.props.onBurgerClick) {
            this.props.onBurgerClick();
        }
    }

    private handleCloseClick(): void {
        this.setState({ inputExpanded: false });
    }

    private onSearch(query: string): void {
        performSearch(this.props.history, query);
    }

    private handleKeyUp(e: React.KeyboardEvent): void {
        if (e.key === "Escape") {
            this.setState({ inputExpanded: false });
        }
    }

    private inputExpandHandler(): void {
        if (!this.state.inputExpanded) {
            this.setState({ inputExpanded: true });
            this.searchInput.focus();
        }
    }
}

export default StickyHeader;
