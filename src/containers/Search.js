import lunr from 'lunr';
import React from 'react';
import { Head, RouteData, withRouter, withSiteData } from 'react-static';
import InputSearch from '../components//molecules/InputSearch';
import BottomSticky from '../components/atoms/BottomSticky';
import BottomStop from '../components/atoms/BottomStop';
import ScrollToTop from '../components/atoms/ScrollToTop';
import { DocPageLayout, maxWidthLayout, TabletHidden } from '../components/ci/Layouts';
import StickyHeader from '../components/ci/StickyHeader';
import Container from '../components/Container';
import Feedback from '../components/molecules/Feedback';
import Pagination from '../components/molecules/Pagination';
import SearchResult from '../components/molecules/SearchResult';
import SideMenu from '../components/molecules/SideMenu';
import contentHomePage from '../contentHomePage.json';
import corpus from '../searchData/corpus.json';
import json from '../searchData/index.json';
import { submitFeedback } from "../utils/feedbackHelper";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: false,
            foundResult: [],
            indexStart: 0,
            indexEnd: 9,
            query: this.props.location.search ? this.props.location.search.replace("?q=", "") : undefined
        };

        this.onSearch = this.onSearch.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.onDataPaginated = this.onDataPaginated.bind(this)
        this.search = this.search.bind(this)
        this.handleBurgerClick = this.handleBurgerClick.bind(this);
    }

    componentDidMount() {
        this.search();
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
            this.setState({ query: this.props.location.search.replace("?q=", "") }, () => {
                this.search();
            });
        }
    }

    handleBurgerClick() {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    onDataPaginated(start, end) {
        this.setState({ indexStart: start, indexEnd: end })
        const target = document.querySelector('#search-top');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    onSearch(query) {
        this.setState({ query }, () => {
            this.search();
        });
    }

    handleKeyUp(e) {
        if (e.key === "Escape") {
            this.setState({ inputExpanded: false })
        }
    }

    buildDocuments() {
        const documents = corpus.reduce((memo, doc) => {
            memo[doc.id] = doc
            return memo
        }, {})
        return documents
    }

    search() {
        let searchResults;
        if (this.state.query) {
            const idx = lunr.Index.load(json)
            const results = idx.search(this.state.query)
            const documents = this.buildDocuments()
            searchResults = results.map(result => documents[result.ref])
        }

        if (searchResults && searchResults.length > 0) {
            this.setState({ foundResult: searchResults, indexStart: 0, indexEnd: Math.min(9, searchResults.length - 1) });
        } else {
            this.setState({ foundResult: [], indexStart: 0, indexEnd: 0 });
        }
    }

    render() {
        const { menu, repoName } = this.props;
        return (
            <RouteData
                render={() => (
                    <Container>
                        <Head>
                            <title>{`Search Results | ${repoName}`}</title>
                        </Head>
                        <div id="search-top"/>
                        <StickyHeader
                            history={this.props.history}
                            data={this.props.menu}
                            onBurgerClick={this.handleBurgerClick}                            
                        />
                        <SideMenu
                            isMenuOpen={this.state.isMenuOpen}
                            contentHomePage={contentHomePage}
                            menuData={this.props.menu}
                            onCloseClick={this.handleBurgerClick} />
                        <section className="sub-header">
                            <span className="sub-header__title sub-header-title__fixed">Search results</span>
                        </section>
                        <DocPageLayout style={{ maxWidth: maxWidthLayout, margin: 'auto', paddingTop: "40px" }}>
                            <section className="left-column">
                            </section>
                            <section className="middle-column" style={{ minHeight: '100vh' }}>
                                <div className="input-wrapper-basic" style={{ position: 'relative', left: '-16px' }}>
                                    <InputSearch
                                        query={this.state.query}
                                        className="input-search-basic"
                                        placeholder="Search for topics"
                                        onKeyUp={this.handleKeyUp}
                                        onSearch={this.onSearch}
                                    />
                                </div>
                                <SearchResult
                                    foundResult={this.state.foundResult}
                                    indexStart={this.state.indexStart}
                                    indexEnd={this.state.indexEnd}
                                    query={this.state.query}
                                />
                                <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                                    <Pagination
                                        total={this.state.foundResult}
                                        onDataPaginated={this.onDataPaginated}
                                    />
                                </div>
                            </section>
                            <section className="right-column">
                            </section>
                        </DocPageLayout>
                        <BottomStop />
                        <BottomSticky zIndex={10}>
                            <TabletHidden>
                                <Feedback onSubmit={(data) => submitFeedback(this.props.location.pathname, data)} />
                            </TabletHidden>
                        </BottomSticky>
                        <BottomSticky horizontalAlign="right">
                            <ScrollToTop />
                        </BottomSticky>
                    </Container>
                )}
            />
        )
    }
}

export default withSiteData(withRouter(Search));
