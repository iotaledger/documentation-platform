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
import { ProjectsPropTypes } from '../utils/propTypes.js';
import { extractSearchQuery } from '../utils/search';
import Container from './Container';
import { DocPageLayout, TabletHidden } from './Layouts';

class Doc extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        siteName: PropTypes.string.isRequired,
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
    }

    handleBurgerClick() {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    render() {
        return (
            <Container {...this.props}>
                <Head>
                    <title>{`${this.props.title} | ${this.props.siteName}`}</title>
                </Head>
                <StickyHeader
                    history={this.props.history}
                    onBurgerClick={this.handleBurgerClick}
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
                <div id="floating-menu-top-limit"></div>
                <DocPageLayout>
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
                            <TableOfContents items={this.state.pageTableOfContents} title="Sections On This Page" compact={true} />
                        </div>
                        <Markdown source={this.props.markdown} query={extractSearchQuery(this.props.location)} />
                    </section>
                    <section className="right-column">
                        <ScrollInContainer>
                            <TableOfContents items={this.state.pageTableOfContents} title="Sections On This Page" />
                        </ScrollInContainer>
                    </section>
                    <BottomSticky zIndex={10}>
                        <TabletHidden>
                            <Feedback onSubmit={(data) => submitFeedback(this.props.location.pathname, data)} />
                        </TabletHidden>
                    </BottomSticky>
                </DocPageLayout>
                <div id="floating-menu-bottom-limit" />
                <Navigator
                    projects={this.props.projects}
                    pathname={this.props.location.pathname}
                />
            </Container>
        );
    }
}

export default withSiteData(withRouteData(withRouter(Doc)));
