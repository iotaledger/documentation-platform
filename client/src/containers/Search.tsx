import React, { ReactNode } from "react";
import { withRouter } from "react-router-dom";
import { Head, withRouteData, withSiteData } from "react-static";
import BottomSticky from "../components/atoms/BottomSticky";
import Feedback from "../components/molecules/Feedback";
import InputSearch from "../components/molecules/InputSearch";
import Pagination from "../components/molecules/Pagination";
import SearchResult from "../components/molecules/SearchResult";
import SideMenu from "../components/molecules/SideMenu";
import StickyHeader from "../components/organisms/StickyHeader";
import { search as searchApi, submitFeedback } from "../utils/api";
import { localStorageSet } from "../utils/localStorage";
import { constructSearchQuery, extractSearchQuery } from "../utils/search";
import Container from "./Container";
import { SearchProps } from "./SearchProps";
import { SearchState } from "./SearchState";

class Search extends React.Component<SearchProps, SearchState> {
    constructor(props: SearchProps) {
        super(props);

        this.state = {
            isMenuOpen: false,
            foundResult: [],
            page: 0,
            indexStart: 0,
            indexEnd: 9,
            query: extractSearchQuery(this.props.location),
            searching: true
        };
    }

    public componentDidMount(): void {
        this.search();
        // We must store last path in here as when we create react-static
        // there is no other way of getting where we were for 404 logging
        localStorageSet("lastDocPath", this.props.location.pathname);
    }

    public componentDidUpdate(prevProps: SearchProps): void {
        if (this.props.location.search !== prevProps.location.search) {
            this.setState({ query: extractSearchQuery(this.props.location) }, () => {
                this.search();
            });
        }
    }

    public render(): ReactNode {
        return (
            <Container {...this.props}>
                <Head>
                    <title>Search Results | IOTA Documentation</title>
                </Head>
                <div id="search-top" />
                <StickyHeader
                    history={this.props.history}
                    onBurgerClick={() => this.handleBurgerClick()}
                />
                <SideMenu
                    isMenuOpen={this.state.isMenuOpen}
                    projects={this.props.projects}
                    onCloseClick={() => this.handleBurgerClick()}
                />
                <section className="sub-header__wrapper">
                    <section className="sub-header">
                        <span className="sub-header__title sub-header-title__fixed">Search results</span>
                    </section>
                </section>
                <div className="layouts--1-column">
                    <div className="middle-column">
                        <div className="input-wrapper-basic">
                            <InputSearch
                                query={this.state.query}
                                className="input-search-basic"
                                placeholder="Search for topics"
                                onSearch={query => this.onSearch(query)}
                            />
                        </div>
                        {this.state.searching && (
                            <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                                Searching, please wait...
                            </div>
                        )}
                        {!this.state.searching && (
                            <React.Fragment>
                                <SearchResult
                                    foundResult={this.state.foundResult}
                                    indexStart={this.state.indexStart}
                                    indexEnd={this.state.indexEnd}
                                    query={this.state.query}
                                />
                                <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                                    <Pagination
                                        page={this.state.page}
                                        totalCount={this.state.foundResult?.length}
                                        onDataPaginated={(index, page, pages) =>
                                            this.onDataPaginated(index, page, pages)}
                                    />
                                </div>
                            </React.Fragment>
                        )}
                    </div>
                    <BottomSticky zIndex={10} horizontalAlign="right">
                        <div className="tablet-down-hidden">
                            <Feedback
                                onSubmit={async data =>
                                    submitFeedback(this.props.apiEndpoint, this.props.location.pathname, data)}
                            />
                        </div>
                    </BottomSticky>
                </div>
            </Container>
        );
    }

    private handleBurgerClick(): void {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    private onDataPaginated(pageIndex: number, start: number, end: number): void {
        this.setState({ page: pageIndex, indexStart: start, indexEnd: end });
        const target = document.querySelector("#search-top");
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    private onSearch(query: string): void {
        this.setState({ query }, () => {
            this.search();
        });

        this.props.history.push(`?${constructSearchQuery(query)}`);
    }

    private search(): void {
        if (this.state.query) {
            this.setState({ searching: true }, async () => {
                await searchApi(this.props.apiEndpoint, this.state.query)
                    .then(res => {
                        if (res?.items && res.items.length > 0) {
                            this.setState({
                                searching: false,
                                foundResult: res.items,
                                indexStart: 0,
                                indexEnd: Math.min(9, res.items.length - 1)
                            });
                        } else {
                            this.setState({
                                searching: false,
                                foundResult: [],
                                indexStart: 0,
                                indexEnd: 0
                            });
                        }
                    });
            });
        }
    }
}

export default withSiteData(withRouteData(withRouter(Search)));
