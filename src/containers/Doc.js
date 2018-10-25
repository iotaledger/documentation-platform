import React from 'react'
import { SiteData, RouteData, Head, withRouter } from 'react-static'
import Markdown from 'components/Markdown'
import Sidebar from 'components/Sidebar'
import CommentModal from 'components/Modal'
import Feedback from 'components/Feedback'
import api from '../utils/api';

class Doc extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false, comments: '', selection: null, erratum: null };

    this.getSelection = this.getSelection.bind(this);
    this.getTextContent = this.getTextContent.bind(this);
    this.keydown = this.keydown.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.submitErratum = this.submitErratum.bind(this);
    this.submitFeedback = this.submitFeedback.bind(this);
  }

  componentDidMount(){
    document.addEventListener('keydown', this.keydown, false);
  }

  componentWillUnmount(){
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
      const project = location.pathname !== '/404' && location.pathname.match(/(?<=docs\/).*?(?=\/+)/)[0];

      return {
        link,
        project,
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

  async submitFeedback(rating, comments) {
    const document = this.props.location.pathname;
    const project = document !== '/404' && document.match(/(?<=docs\/).*?(?=\/+)/)[0];
    const response = await api('submitFeedback', { rating, comments, project, document });
  }

  render() {
    const { location } = this.props;
    const { isOpen, comments, selection, erratum } = this.state;
    const query = location.state && location.state.query || '';

    return (
      <SiteData
        render={({ repoName }) => (
          <RouteData
            render={({ editPath, markdown, title }) => (
              <Sidebar>
                <Head>
                  <title>{`${title} | ${repoName}`}</title>
                </Head>
                <Markdown source={query ?
                  markdown.replace(new RegExp(query, 'gi'), `<span class="search-keyword">${query}</span>`)
                  : markdown}
                />
                <div>
                  <a href={editPath}>Edit this page on Github</a>
                </div>
                <div className="erratumHint">
                  <p>Found a mistake on the page? Select a text and press <b>Ctrl+Enter</b> or <b>Shift+Enter</b></p>
                </div>
                {
                  selection ? (
                    <CommentModal show={isOpen} closeModal={this.closeModal}>
                      <div className="modalHeader">
                        <h3>Found a mistake?</h3>
                        <button onClick={this.closeModal}>
                          Close
                        </button>
                      </div>
                      <p dangerouslySetInnerHTML={{ __html: erratum }} />
                      <textarea
                        value={comments}
                        placeholder="Additional comments"
                        name="comments"
                        onChange={this.handleTextChange}
                      />
                      <button onClick={this.submitErratum}>
                        Submit
                      </button>
                    </CommentModal>
                  ) : null
                }
                <Feedback
                  title="Did you find this page helpful?"
                  submitFn={this.submitFeedback}
                />
              </Sidebar>
            )}
          />
        )}
      />
    )
  }
}

export default withRouter(Doc);
