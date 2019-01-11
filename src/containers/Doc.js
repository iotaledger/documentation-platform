import PropTypes from 'prop-types';
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Head, withRouteData, withRouter, withSiteData } from 'react-static';
import BottomSticky from '../components/atoms/BottomSticky';
import BottomStop from '../components/atoms/BottomStop';
import ScrollInContainer from '../components/atoms/ScrollInContainer';
import ScrollToTop from '../components/atoms/ScrollToTop';
import FloatingMenu from '../components/ci/FloatingMenu';
import { DocPageLayout, maxWidthLayout, TabletHidden } from '../components/ci/Layouts';
import Navigator from '../components/ci/Navigator';
import StickyHeader from '../components/ci/StickyHeader';
import SubHeader from '../components/ci/SubHeader';
import TreeMenu from '../components/ci/TreeMenu';
import VersionPicker from '../components/ci/VersionPicker';
import Feedback from '../components/molecules/Feedback';
import SideMenu from '../components/molecules/SideMenu';
import Markdown from '../components/organisms/Markdown';
import contentHomePage from '../contentHomePage.json';
import { submitFeedback } from '../utils/api';
import { createFloatingMenuEntries, parseProjectUrl, replaceVersion, getVersions, getProjectIndex } from '../utils/helpers';
import { localStorageSet } from '../utils/localStorage';
import { ContentMenuPropTypes } from '../utils/propTypes.js';
import { extractSearchQuery } from '../utils/search';
import Container from './Container';

class Doc extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        repoName: PropTypes.string.isRequired,
        markdown: PropTypes.string.isRequired,
        menu: ContentMenuPropTypes.isRequired,
        history: ReactRouterPropTypes.history,
        location: ReactRouterPropTypes.location
    };

    constructor(props) {
        super(props);

        this.state = {
            projectFullURL: '',
            projectName: '',
            projectVersion: '',
            projectDocParts: [],
            projectDoc: '',
            projectDocTitle: '',
            currentVersions: [],
            currentProjectIndex: [],
            isMenuOpen: false
        };

        this.changeVersion = this.changeVersion.bind(this);
        this.handleBurgerClick = this.handleBurgerClick.bind(this);
    }

    changeVersion(newVersion) {
        const projectParts = parseProjectUrl(this.state.projectFullURL);
        const newUrl = replaceVersion(projectParts, newVersion, this.props.menu);
        if (newUrl) {
            this.props.history.push(newUrl);
            this.setState({ projectVersion: newVersion });
        }
    }

    componentDidMount() {
        const projectParts = parseProjectUrl(this.props.location.pathname);
        this.setState({
            ...projectParts,
            currentVersions: getVersions(projectParts.projectName, this.props.menu),
            currentProjectIndex: getProjectIndex(projectParts.projectName, projectParts.projectVersion, this.props.menu)
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
                    <title>{`${this.props.title} | ${this.props.repoName}`}</title>
                </Head>
                <StickyHeader
                    history={this.props.history}
                    data={this.props.menu}
                    onBurgerClick={this.handleBurgerClick}
                />
                <SideMenu
                    isMenuOpen={this.state.isMenuOpen}
                    contentHomePage={contentHomePage}
                    menuData={this.props.menu}
                    onCloseClick={this.handleBurgerClick}
                    highlightedItem={this.state.projectFullURL} />
                <SubHeader
                    history={this.props.history}
                    contentHomePage={contentHomePage}
                    menuData={this.props.menu}
                    pathname={this.props.location.pathname}
                />
                <VersionPicker
                    versions={this.state.currentVersions}
                    currentVersion={this.state.projectVersion}
                    onChange={(newVersion) => this.changeVersion(newVersion)}
                />
                <div id="floating-menu-top-limit"></div>
                <DocPageLayout style={{ maxWidth: maxWidthLayout, margin: 'auto' }}>
                    <section className="left-column">
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <ScrollInContainer
                                topOffset={30}
                                bottomOffset={120}
                                topMarker="#floating-menu-top-limit"
                                bottomMarker="#floating-menu-bottom-limit"
                                widthContainer=".left-column">
                                <FloatingMenu
                                    menuItems={createFloatingMenuEntries(contentHomePage.content, this.props.menu)}
                                    highlightedItem={this.state.projectName}
                                />
                            </ScrollInContainer>
                        </div>
                    </section>
                    <section className="middle-column">
                        <Markdown source={this.props.markdown} query={extractSearchQuery(this.props.location)} />
                    </section>
                    <section className="right-column">
                        <TreeMenu
                            menuItems={this.state.currentProjectIndex}
                            highlightedItem={this.state.projectFullURL}
                        />
                    </section>
                </DocPageLayout>
                <div id="floating-menu-bottom-limit" />
                <BottomStop />
                <Navigator
                    history={this.props.history}
                    data={this.props.menu}
                    pathname={this.props.location.pathname}
                />
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

export default withSiteData(withRouteData(withRouter(Doc)));
