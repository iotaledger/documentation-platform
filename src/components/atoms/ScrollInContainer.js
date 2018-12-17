import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import React from 'react';

class ScrollInContainer extends React.Component {
  static defaultProps = {
    topOffset: 0,
    bottomOffset: 0,
    topMarker: undefined,
    bottomMarker: undefined
  };

  static propTypes = {
    children: PropTypes.element,
    topOffset: PropTypes.number,
    bottomOffset: PropTypes.number,
    topMarker: PropTypes.string,
    bottomMarker: PropTypes.string,
  };

  constructor(props) {
    super(props)

    this.state = {
      top: this.props.bottomOffset
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const topMarker = document.querySelectorAll(`#${this.props.topMarker}`);
    const bottomMarker = document.querySelectorAll(`#${this.props.bottomMarker}`);

    const thisDom = ReactDOM.findDOMNode(this);
    const docDom = ReactDOM.findDOMNode(document.body);

    const thisRect = thisDom.getBoundingClientRect();

    const topDom = topMarker && topMarker.length ? ReactDOM.findDOMNode(topMarker[0]) : docDom;
    const bottomDom = bottomMarker && bottomMarker.length ? ReactDOM.findDOMNode(bottomMarker[0]) : docDom;

    let topLimit = topDom.getBoundingClientRect().bottom;
    let bottomLimit = bottomDom.getBoundingClientRect().top;

    let newTop = topLimit + this.props.topOffset;
    if (newTop < this.props.topOffset) {
      newTop = this.props.topOffset;
    }

    if (newTop + thisRect.height > (bottomLimit - this.props.bottomOffset)) {
      newTop = bottomLimit - this.props.bottomOffset - thisRect.height;
    }

    this.setState({top: newTop});
  }

  render() {
    const style = {
      ...this.props.styles,
      position: "fixed",
      top: this.state.top
    };

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

export default ScrollInContainer;
