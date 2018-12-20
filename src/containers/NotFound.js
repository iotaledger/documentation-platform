import React from 'react';
import { Head, RouteData, withRouter, withSiteData } from 'react-static';
import BottomSticky from '../components/atoms/BottomSticky';
import BottomStop from '../components/atoms/BottomStop';
import ScrollToTop from '../components/atoms/ScrollToTop';
import { DocPageLayout, maxWidthLayout, TabletHidden } from '../components/ci/Layouts';
import StickyHeader from '../components/ci/StickyHeader';
import Container from '../components/Container';
import Feedback from '../components/molecules/Feedback';
import SideMenu from '../components/molecules/SideMenu';
import contentHomePage from '../contentHomePage.json';
import { submitFeedback } from "../utils/feedbackHelper";
class NotFound extends React.Component {
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

    render() {
        return (
            <RouteData
                render={() => (
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
                        <section className="sub-header">
                            <span className="sub-header__title sub-header-title__fixed">Not Found</span>
                        </section>
                        <DocPageLayout style={{ maxWidth: maxWidthLayout, margin: 'auto', paddingTop: "40px" }}>
                            <section className="left-column">
                            </section>
                            <section className="middle-column" style={{ minHeight: '100vh' }}>
                                <h2>We could not find the page you were looking for.</h2>
                                <p>{this.props.location.pathname}</p>
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

export default withSiteData(withRouter(NotFound));
