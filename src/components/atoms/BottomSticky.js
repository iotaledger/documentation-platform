import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import React from 'react';

class BottomSticky extends React.Component {
  static defaultProps = {
    horizontalOffset: 20,
    horizontalAlign: "left",
    bottomOffset: 20,
    zIndex: undefined
  };

  static propTypes = {
    children: PropTypes.element,
    horizontalOffset: PropTypes.number.isRequired,
    horizontalAlign: PropTypes.oneOf(["left", "right"]),
    bottomOffset: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props)

    this.state = {
      bottom: this.props.bottomOffset
    };

    this.handleBottomStop = this.handleBottomStop.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleBottomStop);
    this.handleBottomStop();
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleBottomStop);
  }

  handleBottomStop() {
    const bottomStop = document.querySelectorAll(".bottom-stop");
    if (bottomStop && bottomStop.length > 0) {
      let bottomAdjustment = this.state.bottom;
      if (this.state.bottom >= this.props.bottomOffset) {
        bottomAdjustment = this.state.bottom - this.props.bottomOffset;
      }

      var thisDom = ReactDOM.findDOMNode(this);
      let boundingBottom = thisDom.getBoundingClientRect().bottom;
      boundingBottom += bottomAdjustment;

      const diff = boundingBottom - bottomStop[0].getBoundingClientRect().bottom + this.props.bottomOffset;
      if (diff > 0) {
        this.setState({ bottom: this.props.bottomOffset + diff})
      } else {
        this.setState({ bottom: this.props.bottomOffset})
      }
    }
  }

  render() {
    const style = {
      ...this.props.styles,
      position: "fixed",
      bottom: this.state.bottom
    };

    style[this.props.horizontalAlign] = this.props.horizontalOffset;

    if (this.props.zIndex) {
      style.zIndex = this.props.zIndex;
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

export default BottomSticky;
