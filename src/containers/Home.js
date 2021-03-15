import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
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
import Overview from '../components/organisms/Overview';
import { submitFeedback } from '../utils/api';
import HomeDataPropTypes from '../utils/homeDataPropTypes';
import { localStorageSet } from '../utils/localStorage';
import { createProjectLinks, createProjectTopics } from '../utils/projects';
import ProjectsPropTypes from '../utils/projectsPropTypes';
import Container from './Container';

class Home extends React.Component {
    static propTypes = {
        apiEndpoint: PropTypes.string.isRequired,
        homeData: HomeDataPropTypes.isRequired,
        hideSignup: PropTypes.bool,
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

        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleBurgerClick() {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    handleResize() {
        document.querySelector('#image-background').style.height = `${document.querySelector('.cards-container').clientHeight}px`;
    }

    render() {
        return (
            <Container {...this.props}>
                <Head>
                    <title>Home | IOTA Documentation</title>
                </Head>
                <Header
                    history={this.props.history}
                    headerTitle="Developer Documentation"
                    topTitles={this.props.homeData.headerTopLinks}
                    popularTopics={this.props.homeData.popularTopics}
                    onBurgerClick={this.handleBurgerClick}
                />
                <SideMenu
                    isMenuOpen={this.state.isMenuOpen}
                    projects={this.props.projects}
                    onCloseClick={this.handleBurgerClick}
                    highlightedItem={this.state.projectFullURL} />
                <div className="layouts--1-column">
                    <Overview 
                        projects={this.props.projects}
                />
                </div>
                <div id='image-background' style={{ background: '#f3f2f1', width: '100%', height: '0px', position: 'absolute' }} />
                <div className="layouts--2-column">
                    <div className="left-column">
                        <ScrollInContainer topOffset={50} bottomOffset={150}>
                            <FloatingMenu menuItems={createProjectLinks(this.props.projects)} />
                        </ScrollInContainer>
                    </div>
                    <div className="right-column">
                        <article>
                            <CardContainer content={this.props.homeData.cards} />
                        </article>
                        <article>
                            <ProjectTopicsContainer content={createProjectTopics(this.props.projects)} />
                        </article>
                    </div>
                    <BottomSticky zIndex={10} horizontalAlign='right'>
                        <div className="tablet-down-hidden">
                            <Feedback onSubmit={(data) => submitFeedback(this.props.apiEndpoint, '/home/', data)} />
                        </div>
                    </BottomSticky>
                </div>
                <EmailSignup apiEndpoint={this.props.apiEndpoint} />
            </Container>
        );
    }
}

export default withRouter(withSiteData(Home));