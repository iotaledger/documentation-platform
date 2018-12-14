import Markdown from 'components/Markdown';
import CommentModal from 'components/Modal';
import Search from 'components/Search';
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

class Doc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      comments: '',
      selection: null,
      erratum: null,
      projectName: '',
      projectFullURL: ''
     };

    this.getSelection = this.getSelection.bind(this);
    this.getTextContent = this.getTextContent.bind(this);
    this.keydown = this.keydown.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.submitErratum = this.submitErratum.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keydown, false);
    ///docs/HUB/reference/2.0/README
    const projectFullURL = this.props.location.pathname
    const projectName = projectFullURL.split('/')[2]
    this.setState({
      projectName,
      projectFullURL
    })
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keydown, false);
  }

  keydown(event) {
    if (event.keyCode === 27 && this.state.isOpen) {
      this.closeModal();
    }
    if (event.keyCode === 13) {
      if (event.ctrlKey || event.shiftKey) {
        const selection = this.getSelection();
        if (selection) {
          const erratum = selection ? selection.fullText.replace(
            selection.selected, `<span class="erratum-text">${selection.selected}</span>`
          ) : null;
          this.setState({ isOpen: true, selection, erratum })
        }
      }
    }
  }

  getSelection() {
    const selectionObj = document.getSelection();
    const selected = selectionObj.toString();
    const node = selectionObj.baseNode;

    if (selectionObj && selected && node) {
      const link = node.baseURI;
      const fullText = node.textContent;
      const prevText = this.getTextContent(node, true);
      const nextText = this.getTextContent(node, false);
      const { location } = this.props;

      return {
        link,
        selected,
        fullText,
        textAround: `${prevText} ${fullText} ${nextText}`,
        document: location.pathname,
      }
    }
    return null;
  }

  getTextContent(node, isPrevious = true) {
    let obj = isPrevious ? node.previousSibling : node.nextSibling;

    const getText = obj => {
      const className = obj.className;
      if (!className || (className && className !== 'line-numbers')) {
        return obj.textContent || '';
      }
    }

    if (obj && obj.textContent) {
      return getText(obj)
    } else if (node.parentNode) {
      obj = isPrevious ? node.parentNode.previousSibling : node.parentNode.nextSibling;
      if (obj && obj.textContent) {
        return getText(obj)
      }
      return ''
    }
  }

  closeModal() {
    this.setState({ isOpen: false, comments: '', selection: null, erratum: null })
  }

  handleTextChange({ target: { value } }) {
    this.setState({ comments: value });
  }

  async submitErratum() {
    const { comments, selection } = this.state;
    const response = await api('submitComment', { ...selection, comments });
    this.closeModal();
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
                    <div class="input-register-container">
                      <input type="text" class="input-register"/>
                    </div>
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
