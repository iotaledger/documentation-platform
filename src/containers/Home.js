import PropTypes from 'prop-types';
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Head, withSiteData } from 'react-static';
import BottomSticky from '../components/atoms/BottomSticky';
import BottomStop from '../components/atoms/BottomStop';
import ScrollInContainer from '../components/atoms/ScrollInContainer';
import ScrollToTop from '../components/atoms/ScrollToTop';
import FloatingMenu from '../components/ci/FloatingMenu';
import Header from '../components/ci/Header';
import { HomePageLayout, TabletHidden } from '../components/ci/Layouts';
import EmailSignup from '../components/molecules/EmailSignup';
import Feedback from '../components/molecules/Feedback';
import CardContainer from '../components/molecules/HomePageCard';
import ProjectTopicsContainer from '../components/molecules/ProjectTopicsContainer';
import SideMenu from '../components/molecules/SideMenu';
import contentHomePage from '../contentHomePage.json';
import { submitFeedback } from '../utils/feedbackHelper';
import { createFloatingMenuEntries } from '../utils/helpers';
import { ContentMenuPropTypes } from '../utils/propTypes.js';
import Container from './Container';
import './home.css';


class Home extends React.Component {
    static propTypes = {
        repoName: PropTypes.string.isRequired,
        history: ReactRouterPropTypes.history,
        location: ReactRouterPropTypes.location,
        menu: ContentMenuPropTypes.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: false
        };

        this.handleBurgerClick = this.handleBurgerClick.bind(this);
    }

    handleBurgerClick() {
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    }

    render() {
        return (
            <Container {...this.props}>
                <Head>
                    <title>Home | {this.props.repoName}</title>
                </Head>
                <Header
                    history={this.props.history}
                    headerTitle='Developer Documentation'
                    topTitles={contentHomePage.headerTopLinks}
                    popularTopics={contentHomePage.popularTopics}
                    onBurgerClick={this.handleBurgerClick}
                />
                <SideMenu
                    isMenuOpen={this.state.isMenuOpen}
                    contentHomePage={contentHomePage}
                    menuData={this.props.menu}
                    onCloseClick={this.handleBurgerClick} 
                    highlightedItem={this.state.projectFullURL}/>
                <div id="floating-menu-top-limit"></div>
                <div style={{ backgroundColor: '#f3f2f1' }}>
                    <HomePageLayout
                        id="new_to_iota?"
                        style={{ backgroundColor: '#f3f2f1' }} className="content-wrapper">
                        <div className="left-column">
                            <ScrollInContainer
                                topOffset={60}
                                bottomOffset={120}
                                topMarker="#floating-menu-top-limit"
                                bottomMarker="#floating-menu-bottom-limit"
                                widthContainer=".left-column"
                            >
                                <TabletHidden>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                        <FloatingMenu
                                            menuItems={createFloatingMenuEntries(contentHomePage.content, this.props.menu)} />
                                    </div>
                                </TabletHidden>
                            </ScrollInContainer>
                        </div>
                        <div className="right-column" style={{}}>
                            <CardContainer content={contentHomePage.cards} />
                        </div>
                    </HomePageLayout>
                </div>
                <HomePageLayout className="content-wrapper">
                    <div className="left-column" >
                    </div>
                    <div className="right-column">
                        <ProjectTopicsContainer content={contentHomePage.content} />
                    </div>
                </HomePageLayout>
                <div id="floating-menu-bottom-limit" />
                <BottomStop />
                <EmailSignup />
                <BottomSticky zIndex={10}>
                    <TabletHidden>
                        <Feedback onSubmit={(data) => { submitFeedback('/docs/home/', data); }} />
                    </TabletHidden>
                </BottomSticky>
                <BottomSticky horizontalAlign="right">
                    <ScrollToTop />
                </BottomSticky>
            </Container>
        );
    }
}

export default withSiteData(Home);