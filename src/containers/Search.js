import Markdown from 'components/organisms/Markdown';
import CommentModal from 'components/Modal';
import InputSearch from 'components/Search';
import React from 'react';
import { Head, RouteData, SiteData, withRouter } from 'react-static';
import Feedback from '../components/molecules/Feedback';
import api from '../utils/api';
import { submitFeedback } from "../utils/feedbackHelper";
import FloatingMenu from './../components/ci/FloatingMenu';
import { DocPageLayout, maxWidthLayout } from './../components/ci/Layouts';

import TreeMenu from './../components/ci/TreeMenu';
import Container from './../components/Container';
import StickyHeader from './../components/ci/StickyHeader';
import SubHeader from './../components/ci/SubHeader';
import Navigator from './../components/ci/Navigator';
import Result from './../components/molecules/Result'

class Doc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      foundResult: [],
      projectName: '',
      projectFullURL: ''
     };
     this.onDataSearch = this.onDataSearch.bind(this)
     this.handleKeyUp = this.handleKeyUp.bind(this)
  }
  onDataSearch(data) {
    this.setState({ foundResult: data })
  }
  handleKeyUp(e) {
    if(e.key === "Escape") {
      this.setState({ inputExpanded: false })
    }
  }
  componentDidMount() {
    ///docs/HUB/reference/2.0/README
    const projectFullURL = this.props.location.pathname
    const projectName = projectFullURL.split('/')[2]
    this.setState({
      projectName,
      projectFullURL
    })
  }

  render() {
    const { location } = this.props;
    const { isOpen, comments, selection, erratum } = this.state;
    const query = location.state && location.state.query || '';

    return (
      <SiteData
        render={({ menu, repoName }) => (
          <RouteData
            render={({ editPath, markdown, title }) => (
              <Container>
                <Head>
                  <title>{`${title} | ${repoName}`}</title>
                </Head>
                <StickyHeader
                  data={menu}
                />
                {/*<SubHeader
                  data={menu}
                  pathname={this.props.location.pathname}
                />*/}
                <DocPageLayout style={{maxWidth: maxWidthLayout, margin: 'auto'}}>
                  <section className="left-column">
                  </section>
                  <section className="middle-column" style={{ minHeight: '100vh'}}>
                      <div className="input-wrapper-basic" style={{position: 'relative', left: '-32px'}}>
                        <InputSearch
                          search={this.props.location.search}
                          className="input-search-basic"
                          placeholder="Search for topics"
                          onKeyUp={this.handleKeyUp}
                          onDataSearch={this.onDataSearch}
                        />
                      </div>
                      <Result
                        foundResult={this.state.foundResult}
                      />
                  </section>
                  <section className="right-column">
                  </section>
                </DocPageLayout>

                <Feedback
                  styles={{ position: 'fixed', bottom: '130px', left: '20px' }}
                  onSubmit={(data) => submitFeedback(this.props.location.pathname, data)}
                />
              </Container>
            )}
          />
        )}
      />
    )
  }
}

export default withRouter(Doc);
