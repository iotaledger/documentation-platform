import PropTypes from 'prop-types';
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Head, withRouteData, withRouter, withSiteData } from 'react-static';
import BottomSticky from '../components/atoms/BottomSticky';
import DropSelector from '../components/atoms/DropSelector';
import ScrollInContainer from '../components/atoms/ScrollInContainer';
import Feedback from '../components/molecules/Feedback';
import Navigator from '../components/molecules/Navigator';
import SideMenu from '../components/molecules/SideMenu';
import SubHeader from '../components/molecules/SubHeader';
import TableOfContents from '../components/molecules/TableOfContents';
import TreeMenu from '../components/molecules/TreeMenu';
import VersionPicker from '../components/molecules/VersionPicker';
import Markdown from '../components/organisms/Markdown';
import StickyHeader from '../components/organisms/StickyHeader';
import { submitFeedback } from '../utils/api';
import { localStorageSet } from '../utils/localStorage';
import { createPageTableOfContents, createProjectLinks, getProjectTitle, getProjectVersionPagesUrl, getVersionsUrl, parseProjectUrl, replaceVersion } from '../utils/projects';
import { ProjectsPropTypes, ViewDataPropTypes } from '../utils/propTypes.js';
import { extractHighlights, extractSearchQuery, initCorpusIndex } from '../utils/search';
import Container from './Container';

class Doc extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        viewData: ViewDataPropTypes.isRequired,
        apiEndpoint: PropTypes.string.isRequired,
        googleMapsKey: PropTypes.string.isRequired,
        markdown: PropTypes.string.isRequired,
        projects: ProjectsPropTypes.isRequired,
        history: ReactRouterPropTypes.history,
        location: ReactRouterPropTypes.location
    };

    constructor(props) {
        super(props);

        this.state = {
            projectFullURL: '',
            projectFolder: '',
            projectVersion: '',
            projectDocParts: [],
            projectDoc: '',
            projectDocTitle: '',
            projectVersions: [],
            projectVersionPages: [],
            pageTableOfContents: [],
            isMenuOpen: false
        };

        this.changeVersion = this.changeVersion.bind(this);
        this.handleBurgerClick = this.handleBurgerClick.bind(this);
        this.handleContentChanged = this.handleContentChanged.bind(this);
    }

    changeVersion(newVersion) {
        const projectParts = parseProjectUrl(this.state.projectFullURL);
        const newUrl = replaceVersion(projectParts, newVersion, this.props.projects);
        if (newUrl) {
            this.props.history.push(newUrl);
            this.setState({ projectVersion: newVersion });
        }
    }

    componentDidMount() {
        const projectParts = parseProjectUrl(this.props.location.pathname);

        this.setState({
            ...projectParts,
            projectVersions: getVersionsUrl(projectParts, this.props.projects),
            projectVersionPages: getProjectVersionPagesUrl(projectParts, projectParts.projectVersion, this.props.projects),
            pageTableOfContents: createPageTableOfContents(projectParts, this.props.projects)
        });

        // We must store last path in here as when we create react-static
        // there is no other way of getting where we were for 404 logging
        localStorageSet('lastDocPath', this.props.location.pathname);

        // Trigger the search index load here so a search is quicker
        initCorpusIndex();
    }

    handleBurgerClick() {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    handleContentChanged(itemCount) {
        // If the markdown has triggered a content change it must have
        // dynamic content, if the default toc only has the 'introduction'
        // entry see if there is any other h2 entries we can use from the dynamic content
        const projectParts = parseProjectUrl(this.props.location.pathname);

        const toc = createPageTableOfContents(projectParts, this.props.projects);

        if (itemCount > 0) {
            const markdownHeaders = document.querySelectorAll('.markdown__wrapper h2');
            if (markdownHeaders && markdownHeaders.length > 0) {
                for (let i = 0; i < markdownHeaders.length; i++) {
                    toc.push({ name: markdownHeaders[i].innerText, link: `#${markdownHeaders[i].id}` });
                }
            }
        }

        this.setState({
            pageTableOfContents: toc
        });
    }

    render() {
        return (
            <Container {...this.props}>
                <Head>
                    <title>{`${this.props.title} | ${this.props.viewData.siteName}`}</title>
                </Head>
                <StickyHeader
                    history={this.props.history}
                    onBurgerClick={this.handleBurgerClick}
                    viewData={this.props.viewData}
                />
                <SideMenu
                    isMenuOpen={this.state.isMenuOpen}
                    projects={this.props.projects}
                    onCloseClick={this.handleBurgerClick}
                    highlightedItem={this.state.projectFullURL} />
                <SubHeader
                    projects={this.props.projects}
                    pathname={this.props.location.pathname}
                />
                <VersionPicker
                    versions={this.state.projectVersions}
                    currentVersion={this.state.projectVersion}
                    onChange={(newVersion) => this.changeVersion(newVersion)}
                />
                <div className="layouts--3-column">
                    <section className="left-column">
                        <DropSelector
                            items={createProjectLinks(this.props.projects)}
                            currentName={getProjectTitle(this.state, this.props.projects)}
                            style={{ marginBottom: '30px' }}
                        />
                        <TreeMenu
                            menuItems={this.state.projectVersionPages}
                            highlightedItem={this.state.projectFullURL}
                        />
                    </section>
                    <section className="middle-column">
                        <div className="middle-toc">
                            <TableOfContents items={this.state.pageTableOfContents} title="Sections On This Page" compact={true} history={this.props.history} />
                        </div>
                        <Markdown
                            source={this.props.markdown}
                            query={extractSearchQuery(this.props.location)}
                            highlights={extractHighlights(this.props.location)}
                            apiEndpoint={this.props.apiEndpoint}
                            googleMapsKey={this.props.googleMapsKey}
                            onContentChanged={this.handleContentChanged}
                            history={this.props.history} />
                    </section>
                    <section className="right-column">
                        <ScrollInContainer bottomOffset={200}>
                            <TableOfContents items={this.state.pageTableOfContents} title="Sections On This Page" history={this.props.history} />
                        </ScrollInContainer>
                    </section>
                    {this.props.viewData.enableFeedback && (
                        <BottomSticky zIndex={10} horizontalAlign='right'>
                            <div className="tablet-down-hidden">
                                <Feedback onSubmit={(data) => submitFeedback(this.props.apiEndpoint, this.props.location.pathname, data)} />
                            </div>
                        </BottomSticky>
                    )}
                </div>
                <Navigator
                    projects={this.props.projects}
                    pathname={this.props.location.pathname}
                />
            </Container>
        );
    }
}

export default withSiteData(withRouteData(withRouter(Doc)));
