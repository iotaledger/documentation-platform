import PropTypes from 'prop-types';
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Head, withSiteData } from 'react-static';
import BottomSticky from '../components/atoms/BottomSticky';
import ScrollInContainer from '../components/atoms/ScrollInContainer';
import EmailSignup from '../components/molecules/EmailSignup';
import Feedback from '../components/molecules/Feedback';
import FloatingMenu from '../components/molecules/FloatingMenu';
import CardContainer from '../components/molecules/HomePageCard';
import ProjectTopicsContainer from '../components/molecules/ProjectTopicsContainer';
import SideMenu from '../components/molecules/SideMenu';
import Header from '../components/organisms/Header';
import contentHomePage from '../contentHomePage.json';
import { submitFeedback } from '../utils/api';
import { localStorageSet } from '../utils/localStorage';
import { createProjectLinks, createProjectTopics } from '../utils/projects';
import { ProjectsPropTypes } from '../utils/propTypes.js';
import Container from './Container';
import { HomePageLayout, TabletHidden } from './Layouts';


class Home extends React.Component {
    static propTypes = {
        siteName: PropTypes.string.isRequired,
        history: ReactRouterPropTypes.history,
        location: ReactRouterPropTypes.location,
        projects: ProjectsPropTypes.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: false
        };

        this.handleBurgerClick = this.handleBurgerClick.bind(this);
    }

    componentDidMount() {
        // We must store last path in here as when we create react-static
        // there is no other way of getting where we were for 404 logging
        localStorageSet('lastDocPath', '/home/');
    }

    handleBurgerClick() {
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    }

    render() {
        return (
            <Container {...this.props}>
                <Head>
                    <title>Home | {this.props.siteName}</title>
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
                    projects={this.props.projects}
                    onCloseClick={this.handleBurgerClick} 
                    highlightedItem={this.state.projectFullURL}/>
                <HomePageLayout id="new_to_iota?">
                    <aside>
                        <ScrollInContainer topOffset={50} bottomOffset={160}>   
                            <FloatingMenu menuItems={createProjectLinks(this.props.projects)} />
                        </ScrollInContainer>
                    </aside>
                    <article style={{background: '#f3f2f1'}}>
                        <CardContainer content={contentHomePage.cards} />
                    </article>
                    <article>
                        <ProjectTopicsContainer content={createProjectTopics(this.props.projects)} />
                    </article>
                    <BottomSticky zIndex={10}>
                        <TabletHidden>
                            <Feedback onSubmit={(data) => submitFeedback('/home/', data)} />
                        </TabletHidden>
                    </BottomSticky>
                </HomePageLayout>
                <EmailSignup />
            </Container>
        );
    }
}

export default withSiteData(Home);