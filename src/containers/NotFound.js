import PropTypes from 'prop-types';
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Head, withRouteData, withRouter, withSiteData } from 'react-static';
import ParallaxContainer from '../components/atoms/ParallaxContainer';
import StickyHeader from '../components/ci/StickyHeader';
import SideMenu from '../components/molecules/SideMenu';
import contentHomePage from '../contentHomePage.json';
import { submitMissing } from '../utils/api';
import { localStorageGet } from '../utils/localStorage';
import { ContentMenuPropTypes } from '../utils/propTypes.js';
import Container from './Container';
import './notFound.css';

class NotFound extends React.PureComponent {
    static propTypes = {
        repoName: PropTypes.string.isRequired,
        menu: ContentMenuPropTypes.isRequired,
        history: ReactRouterPropTypes.history,
        location: ReactRouterPropTypes.location
    };

    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: false
        };

        this.handleBurgerClick = this.handleBurgerClick.bind(this);
    }

    handleBurgerClick() {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    componentDidMount() {
        // We must get the last path in here as when we create react-static
        // there is no other way of getting where we were for 404 logging
        // this can be empty
        const lastLocation = localStorageGet('lastDocPath');

        submitMissing(this.props.location.pathname, lastLocation);
    }

    render() {
        return (
            <Container {...this.props}>
                <Head>
                    <title>{`Not Found | ${this.props.repoName}`}</title>
                </Head>
                <StickyHeader
                    data={this.props.menu}
                    onBurgerClick={this.handleBurgerClick}
                />
                <SideMenu
                    isMenuOpen={this.state.isMenuOpen}
                    contentHomePage={contentHomePage}
                    menuData={this.props.menu}
                    onCloseClick={this.handleBurgerClick} />
                <section className="not-found">
                    <article>
                        <h1>404</h1>
                        <h2>We’re sorry, but the page you were looking for can’t be found.</h2>
                        <p>This issue has been automatically logged.</p>
                        <nav>
                            <a href="#" onClick={this.props.history.goBack} className="button button--secondary">Previous</a>
                            <a href="/" className="button button--secondary">Home</a>
                        </nav>
                    </article>
                    <aside>
                        <ParallaxContainer>
                            <div data-depth="-0.02"><img src="/assets/document.svg" /></div>
                            <div data-depth="-0.04"><img src="/assets/document.svg" /></div>
                            <div data-depth="-0.06"><img src="/assets/document.svg" /></div>
                            <div data-depth="0.08"><img src="/assets/document.svg" /></div>
                            <div data-depth="-0.02"><img src="/assets/document.svg" /></div>
                            <div data-depth="-0.06"><img src="/assets/document.svg" /></div>
                            <div data-depth="0.08"><img src="/assets/document.svg" /></div>
                        </ParallaxContainer>
                    </aside>
                </section>
            </Container>
        );
    }
}

export default withSiteData(withRouteData(withRouter(NotFound)));
