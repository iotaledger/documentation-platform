import lunr from 'lunr';
import PropTypes from 'prop-types';
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Head, withRouteData, withRouter, withSiteData } from 'react-static';
import InputSearch from '../components//molecules/InputSearch';
import BottomSticky from '../components/atoms/BottomSticky';
import BottomStop from '../components/atoms/BottomStop';
import ScrollToTop from '../components/atoms/ScrollToTop';
import Feedback from '../components/molecules/Feedback';
import Pagination from '../components/molecules/Pagination';
import SearchResult from '../components/molecules/SearchResult';
import SideMenu from '../components/molecules/SideMenu';
import StickyHeader from '../components/organisms/StickyHeader';
import corpus from '../searchData/corpus.json';
import json from '../searchData/index.json';
import { submitFeedback } from '../utils/api';
import { localStorageSet } from '../utils/localStorage';
import { ProjectsPropTypes } from '../utils/propTypes.js';
import { extractSearchQuery } from '../utils/search';
import Container from './Container';
import { SearchPageLayout, TabletHidden } from './Layouts';

class Search extends React.Component {
    static propTypes = {
        repoName: PropTypes.string.isRequired,
        projects: ProjectsPropTypes.isRequired,
        history: ReactRouterPropTypes.history,
        location: ReactRouterPropTypes.location
    };

    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: false,
            foundResult: [],
            indexStart: 0,
            indexEnd: 9,
            query: extractSearchQuery(this.props.location)
        };

        this.onSearch = this.onSearch.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.onDataPaginated = this.onDataPaginated.bind(this);
        this.search = this.search.bind(this);
        this.handleBurgerClick = this.handleBurgerClick.bind(this);
    }

    componentDidMount() {
        this.search();
        // We must store last path in here as when we create react-static
        // there is no other way of getting where we were for 404 logging
        localStorageSet('lastDocPath', this.props.location.pathname);
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
            this.setState({ query: extractSearchQuery(this.props.location) }, () => {
                this.search();
            });
        }
    }

    handleBurgerClick() {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    onDataPaginated(start, end) {
        this.setState({ indexStart: start, indexEnd: end });
        const target = document.querySelector('#search-top');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    onSearch(query) {
        this.setState({ query }, () => {
            this.search();
        });
    }

    handleKeyUp(e) {
        if (e.key === 'Escape') {
            this.setState({ inputExpanded: false });
        }
    }

    buildDocuments() {
        const documents = corpus.reduce((memo, doc) => {
            memo[doc.id] = doc;
            return memo;
        }, {});
        return documents;
    }

    search() {
        let searchResults;
        if (this.state.query) {
            const idx = lunr.Index.load(json);
            const results = idx.search(this.state.query);
            const documents = this.buildDocuments();
            searchResults = results.map(result => documents[result.ref]);
        }

        if (searchResults && searchResults.length > 0) {
            this.setState({ foundResult: searchResults, indexStart: 0, indexEnd: Math.min(9, searchResults.length - 1) });
        } else {
            this.setState({ foundResult: [], indexStart: 0, indexEnd: 0 });
        }
    }

    render() {
        return (
            <Container {...this.props}>
                <Head>
                    <title>{`Search Results | ${this.props.repoName}`}</title>
                </Head>
                <div id="search-top" />
                <StickyHeader
                    history={this.props.history}
                    onBurgerClick={this.handleBurgerClick}
                />
                <SideMenu
                    isMenuOpen={this.state.isMenuOpen}
                    projects={this.props.projects}
                    onCloseClick={this.handleBurgerClick} />
                <section className="sub-header__wrapper">
                    <section className="sub-header">
                        <span className="sub-header__title sub-header-title__fixed">Search results</span>
                    </section>
                </section>
                <SearchPageLayout>
                    <div className="middle-column">
                        <div className="input-wrapper-basic">
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
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                            <Pagination
                                total={this.state.foundResult}
                                onDataPaginated={this.onDataPaginated}
                            />
                        </div>
                    </div>
                </SearchPageLayout>
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
        );
    }
}

export default withSiteData(withRouteData(withRouter(Search)));
