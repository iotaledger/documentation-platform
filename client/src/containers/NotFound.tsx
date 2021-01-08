import React, { ReactNode } from "react";
import { withRouter } from "react-router-dom";
import { Head, withRouteData, withSiteData } from "react-static";
import ParallaxContainer from "../components/atoms/ParallaxContainer";
import SideMenu from "../components/molecules/SideMenu";
import StickyHeader from "../components/organisms/StickyHeader";
import { submitMissing } from "../utils/api";
import { localStorageGet } from "../utils/localStorage";
import Container from "./Container";
import "./notFound.css";
import { NotFoundProps } from "./NotFoundProps";
import { NotFoundState } from "./NotFoundState";

class NotFound extends React.PureComponent<NotFoundProps, NotFoundState> {
    constructor(props: NotFoundProps) {
        super(props);

        this.state = {
            isMenuOpen: false
        };
    }

    public async componentDidMount(): Promise<void> {
        // We must get the last path in here as when we create react-static
        // there is no other way of getting where we were for 404 logging
        // this can be empty
        const lastLocation = localStorageGet<string>("lastDocPath");

        await submitMissing(this.props.apiEndpoint, this.props.location.pathname, lastLocation);
    }

    public render(): ReactNode {
        return (
            <Container {...this.props}>
                <Head>
                    <title>Not Found | IOTA Documentation</title>
                </Head>
                <StickyHeader
                    history={this.props.history}
                    onBurgerClick={() => this.handleBurgerClick()}
                />
                <SideMenu
                    isMenuOpen={this.state.isMenuOpen}
                    projects={this.props.projects}
                    onCloseClick={() => this.handleBurgerClick()}
                />
                <section className="not-found">
                    <article>
                        <h1>404</h1>
                        <h2>We’re sorry, but the page you were looking for can’t be found.</h2>
                        <p>This issue has been automatically logged.</p>
                        <nav>
                            <a
                                href="#"
                                onClick={() => this.props.history.goBack()}
                                className="button button--secondary"
                            >
                                Previous
                            </a>
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

    private handleBurgerClick(): void {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }
}

export default withSiteData(withRouteData(withRouter(NotFound)));
