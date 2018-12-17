import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import React from 'react';

class ScrollInContainer extends React.Component {
  static defaultProps = {
    topOffset: 0,
    bottomOffset: 0,
    topMarker: undefined,
    bottomMarker: undefined,
    widthContainer: undefined
  };

  static propTypes = {
    children: PropTypes.element,
    topOffset: PropTypes.number,
    bottomOffset: PropTypes.number,
    topMarker: PropTypes.string,
    bottomMarker: PropTypes.string,
    widthContainer: PropTypes.string
  };

  constructor(props) {
    super(props)

    this.state = {
      top: this.props.topOffset,
      width: undefined
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);

    this.handleScroll();
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.handleScroll();
  }

  handleScroll() {
    const topMarker = document.querySelectorAll(this.props.topMarker);
    const bottomMarker = document.querySelectorAll(this.props.bottomMarker);

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

    const widthContainer = document.querySelectorAll(this.props.widthContainer);
    const newWidth = widthContainer && widthContainer.length > 0 ?
      ReactDOM.findDOMNode(widthContainer[0]).getBoundingClientRect().width : undefined;

    this.setState({ top: newTop, width: newWidth });
  }

  render() {
    const style = {
      ...this.props.styles,
      position: "fixed",
      top: this.state.top,
      width: this.state.width
    };

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

export default ScrollInContainer;
