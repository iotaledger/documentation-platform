import PropTypes from 'prop-types';
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Head, withRouteData, withRouter, withSiteData } from 'react-static';
import BottomSticky from '../components/atoms/BottomSticky';
import BottomStop from '../components/atoms/BottomStop';
import DropSelector from '../components/atoms/DropSelector';
import ScrollToTop from '../components/atoms/ScrollToTop';
import Feedback from '../components/molecules/Feedback';
import Navigator from '../components/molecules/Navigator';
import SideMenu from '../components/molecules/SideMenu';
import SubHeader from '../components/molecules/SubHeader';
import TreeMenu from '../components/molecules/TreeMenu';
import VersionPicker from '../components/molecules/VersionPicker';
import Markdown from '../components/organisms/Markdown';
import StickyHeader from '../components/organisms/StickyHeader';
import contentHomePage from '../contentHomePage.json';
import { submitFeedback } from '../utils/api';
import { createDropSelectorEntries, getProjectIndex, getProjectTitle, getVersions, parseProjectUrl, replaceVersion } from '../utils/helpers';
import { localStorageSet } from '../utils/localStorage';
import { ContentMenuPropTypes } from '../utils/propTypes.js';
import { extractSearchQuery } from '../utils/search';
import Container from './Container';
import { DocPageLayout, maxWidthLayout, TabletHidden } from './Layouts';

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
        this.handleChangeProject = this.handleChangeProject.bind(this);
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

    handleChangeProject(proj) {
        this.props.history.push(proj);
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
                        <DropSelector
                            items={createDropSelectorEntries(contentHomePage, this.props.menu)} 
                            value={getProjectTitle(this.state, contentHomePage)}
                            onChange={(val) => this.handleChangeProject(val)}
                            style={{marginBottom: '28px'}}
                            />
                        <TreeMenu
                                menuItems={this.state.currentProjectIndex}
                                highlightedItem={this.state.projectFullURL}
                            />
                    </section>
                    <section className="middle-column">
                        <Markdown source={this.props.markdown} query={extractSearchQuery(this.props.location)} />
                    </section>
                    <section className="right-column">
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
