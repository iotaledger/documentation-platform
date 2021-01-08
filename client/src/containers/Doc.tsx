import React, { ReactNode } from "react";
import { withRouter } from "react-router-dom";
import { Head, withRouteData, withSiteData } from "react-static";
import BottomSticky from "../components/atoms/BottomSticky";
import DropSelector from "../components/atoms/DropSelector";
import ScrollInContainer from "../components/atoms/ScrollInContainer";
import Feedback from "../components/molecules/Feedback";
import Navigator from "../components/molecules/Navigator";
import SideMenu from "../components/molecules/SideMenu";
import SubHeader from "../components/molecules/SubHeader";
import TableOfContents from "../components/molecules/TableOfContents";
import TreeMenu from "../components/molecules/TreeMenu";
import VersionPicker from "../components/molecules/VersionPicker";
import Markdown from "../components/organisms/Markdown";
import StickyHeader from "../components/organisms/StickyHeader";
import { submitFeedback } from "../utils/api";
import { localStorageSet } from "../utils/localStorage";
import { createPageTableOfContents, createProjectLinks, getDocumentTagsAndDescription, getProjectTitle, getProjectVersionPagesUrl, getVersionsUrl, parseProjectUrl, replaceVersion } from "../utils/projects";
import { extractHighlights, extractSearchQuery } from "../utils/search";
import Container from "./Container";
import { DocProps } from "./DocProps";
import { DocState } from "./DocState";

class Doc extends React.Component<DocProps, DocState> {
    constructor(props: DocProps) {
        super(props);

        this.state = {
            projectFullURL: "",
            projectFolder: "",
            projectVersion: "",
            projectDocParts: [],
            projectDoc: "",
            projectDocTitle: "",
            projectVersions: [],
            projectVersionPages: [],
            pageTableOfContents: [],
            tags: [],
            description: "",
            isDeprecated: false,
            isMenuOpen: false
        };
    }

    public componentDidMount(): void {
        this.buildContent();
    }

    public componentDidUpdate(prevProps: DocProps): void {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.buildContent();
        }
    }

    public render(): ReactNode {
        return (
            <Container {...this.props}>
                <Head>
                    <title>{this.props.title} | IOTA Documentation</title>
                    {this.state.tags && (
                        <meta name="keywords" content={this.state.tags.join(",")} />
                    )}
                    {this.state.description && (
                        <meta name="description" content={this.state.description} />
                    )}
                </Head>
                <StickyHeader
                    history={this.props.history}
                    onBurgerClick={() => this.handleBurgerClick()}
                />
                <SideMenu
                    isMenuOpen={this.state.isMenuOpen}
                    projects={this.props.projects}
                    onCloseClick={() => this.handleBurgerClick()}
                    highlightedItem={this.state.projectFullURL}
                />
                <SubHeader
                    projects={this.props.projects}
                    pathname={this.props.location.pathname}
                />
                <VersionPicker
                    versions={this.state.projectVersions}
                    currentVersion={this.state.projectVersion}
                    onChange={newVersion => this.changeVersion(newVersion)}
                />
                <div className="layouts--3-column">
                    <section className="left-column">
                        <DropSelector
                            items={createProjectLinks(this.props.projects)}
                            currentName={getProjectTitle(this.state, this.props.projects)}
                        />
                        <TreeMenu
                            menuItems={this.state.projectVersionPages}
                            highlightedItem={this.state.projectFullURL}
                        />
                    </section>
                    <section className="middle-column">
                        <div className="middle-toc">
                            <TableOfContents
                                items={this.state.pageTableOfContents}
                                title="Sections On This Page"
                                compact={true}
                                history={this.props.history}
                            />
                        </div>
                        <Markdown
                            source={this.props.markdown}
                            isDeprecated={this.state.isDeprecated}
                            query={extractSearchQuery(this.props.location)}
                            highlights={extractHighlights(this.props.location)}
                            apiEndpoint={this.props.apiEndpoint}
                            googleMapsKey={this.props.googleMapsKey}
                        />
                    </section>
                    <section className="right-column">
                        <ScrollInContainer bottomOffset={200}>
                            <TableOfContents
                                items={this.state.pageTableOfContents}
                                title="Sections On This Page"
                                history={this.props.history}
                            />
                        </ScrollInContainer>
                    </section>
                    <BottomSticky zIndex={10} horizontalAlign="right">
                        <div className="tablet-down-hidden">
                            <Feedback
                                onSubmit={async data => submitFeedback(
                                    this.props.apiEndpoint, this.props.location.pathname, data)}
                            />
                        </div>
                    </BottomSticky>
                </div>
                <Navigator
                    projects={this.props.projects}
                    pathname={this.props.location.pathname}
                />
            </Container>
        );
    }

    private changeVersion(newVersion: string): void {
        const projectParts = parseProjectUrl(this.state.projectFullURL);
        const newUrl = replaceVersion(projectParts, newVersion, this.props.projects);
        if (newUrl) {
            this.props.history.push(newUrl);
            this.setState({ projectVersion: newVersion });
        }
    }

    private buildContent(): void {
        const projectParts = parseProjectUrl(this.props.location.pathname);

        const tagsAndDescription = getDocumentTagsAndDescription(projectParts, this.props.projects);

        this.setState({
            ...projectParts,
            projectVersions: getVersionsUrl(projectParts, this.props.projects),
            projectVersionPages: getProjectVersionPagesUrl(
                projectParts, projectParts.projectVersion, this.props.projects),
            pageTableOfContents: createPageTableOfContents(projectParts, this.props.projects),
            tags: tagsAndDescription.tags,
            description: tagsAndDescription.description,
            isDeprecated: tagsAndDescription.status?.includes("deprecated")
        });

        // We must store last path in here as when we create react-static
        // there is no other way of getting where we were for 404 logging
        localStorageSet("lastDocPath", this.props.location.pathname);
    }

    private handleBurgerClick(): void {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }
}

export default withSiteData(withRouteData(withRouter(Doc)));
