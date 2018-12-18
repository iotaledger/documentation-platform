import Markdown from 'components/organisms/Markdown';
import React from 'react';
import { Head, RouteData, SiteData, withRouter } from 'react-static';
import BottomSticky from "../components/atoms/BottomSticky";
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
import Container from '../components/Container';
import Feedback from '../components/molecules/Feedback';
import { submitFeedback } from "../utils/feedbackHelper";
import { combineProjectUrl, parseProjectUrl } from "../utils/helpers";

class Doc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projectFullURL: '',
      projectName: '',
      projectVersion: '',
      projectDocParts: [],
      projectDoc: '',
      projectDocTitle: ''
    };

    this.changeVersion = this.changeVersion.bind(this);
  }

  changeVersion(newVersion) {
    const projectParts = parseProjectUrl(this.state.projectFullURL);
    projectParts.projectVersion = newVersion;
    this.props.history.push(combineProjectUrl(projectParts));
    this.setState({ projectVersion: newVersion });
  }

  componentDidMount() {
    this.setState(parseProjectUrl(this.props.location.pathname))
  }

  render() {
    const { location } = this.props;
    const query = location.state && location.state.query || '';

    return (
      <SiteData
        render={({ menu, repoName }) => (
          <RouteData
            render={({ markdown, title }) => (
              <Container>
                <Head>
                  <title>{`${title} | ${repoName}`}</title>
                </Head>
                <StickyHeader
                  history={this.props.history}
                  data={menu}
                />
                <SubHeader
                  data={menu}
                  pathname={this.props.location.pathname}
                />
                <VersionPicker
                  versions={Object.keys(menu[this.state.projectName].versions)}
                  currentVersion={this.state.projectVersion}
                  onChange={this.changeVersion}
                />
                <div id="floating-menu-top-limit"></div>
                <DocPageLayout style={{ maxWidth: maxWidthLayout, margin: 'auto' }}>
                  <section className="left-column">
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <ScrollInContainer
                        topOffset={40}
                        bottomOffset={120}
                        topMarker="#floating-menu-top-limit"
                        bottomMarker="#floating-menu-bottom-limit"
                        widthContainer=".left-column">
                        <FloatingMenu
                          data={menu}
                          highlightedItem={this.state.projectName}
                        />
                      </ScrollInContainer>
                    </div>
                  </section>
                  <section className="middle-column">
                    <Markdown source={query ?
                      markdown.replace(new RegExp(query, 'gi'), `<span class="search-keyword">${query}</span>`)
                      : markdown}
                    />
                  </section>
                  <section className="right-column">
                    <TreeMenu />
                  </section>
                </DocPageLayout>
                <div id="floating-menu-bottom-limit" />
                <BottomStop />
                <Navigator
                  data={menu}
                  pathname={this.props.location.pathname}
                />
                <BottomSticky zIndex={10}>
                  <TabletHidden>
                    <Feedback onSubmit={(data) => { submitFeedback(this.props.location.pathname, data) }} />
                  </TabletHidden>
                </BottomSticky>
                <BottomSticky horizontalAlign="right">
                  <ScrollToTop />
                </BottomSticky>
              </Container>
            )}
          />
        )}
      />
    )
  }
}

export default withRouter(Doc);
