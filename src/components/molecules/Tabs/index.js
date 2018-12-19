import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import { copyToClipboard } from '../../../utils/clipboard';

class Tabs extends React.Component {
  static propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string),
    contents: PropTypes.arrayOf(PropTypes.element)
  };

  constructor(props) {
    super(props)

    this.state = {
      selectedIndex: 0,
      copyActive: false,
      copySuccess: false
    }

    this.handleSelect = this.handleSelect.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleSelect(idx) {
    this.setState({ selectedIndex: idx });
  }

  handleCopy() {
    const markdown = this.props.contents[this.state.selectedIndex].props.source;

    const success = copyToClipboard(markdown.replace(/\`\`\`.*/g, "").trim());

    this.setState({
      copySuccess: success,
      copyActive: true
    })

    setTimeout(() => {
      this.setState({
        copyActive: false
      })
    }, 2000);
  }

  render() {
    return (
      <div className="tabs">
        <div className="tab-header">
          <ul className="tab-header-list">
            {this.props.headers.map((header, headerIdx) => (
              <li key={headerIdx}
                className={classNames(
                  "tab-header-item",
                  { "tab-header-item--selected": headerIdx === this.state.selectedIndex }
                )}>
                <a onClick={() => this.handleSelect(headerIdx)}>{header}</a>
              </li>
            ))
            }
          </ul>
          <div className="tab-header-copy">
            <span className={classNames(
              "tab-header-copy-text",
              { "tab-header-copy-text--active": this.state.copyActive },
              { "tab-header-copy-text--failed": !this.state.copySuccess && this.state.copyActive }
            )}>{this.state.copySuccess ? "Copied" : "Failed"}</span>
            <button className="tab-header-copy-button" onClick={() => this.handleCopy()}><i className="icon icon-copy"></i></button>
          </div>
        </div>
        <div className="tab-container">
          {this.props.contents.map((content, contentIdx) => (
            <div key={contentIdx}
              className={classNames(
                "tab-item",
                { "tab-item--selected": contentIdx === this.state.selectedIndex }
              )}>
              {content}
            </div>
          ))
          }
        </div>
      </div>
    )
  }
}

export default Tabs;
