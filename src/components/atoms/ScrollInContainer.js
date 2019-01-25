import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
class ScrollInContainer extends React.Component {
    static defaultProps = {
        topOffset: 0,
        bottomOffset: 100
    };

    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        topOffset: PropTypes.number,
        bottomOffset: PropTypes.number
    };

    componentDidMount() {
        this.handleScroll = this.handleScroll.bind(this);
        this.handleResize = this.handleResize.bind(this);

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
        const thisDom = ReactDOM.findDOMNode(this);
        const parentDom = thisDom.parentNode;

        const thisRect = thisDom.getBoundingClientRect();
        const parentRect = parentDom.getBoundingClientRect();

        if (parentRect.top < 0) {
            let newRelativeTop = -parentRect.top + this.props.topOffset;
            if (this._lastRelativeTop === undefined) {
                this._lastRelativeTop = newRelativeTop;
            }

            let thisHeight = thisRect.height + this.props.bottomOffset;

            let fixBottom = false;
            if (thisHeight + this._lastRelativeTop >= parentRect.height) {
                fixBottom = true;
            }

            this._lastRelativeTop = Math.floor(newRelativeTop);

            if (fixBottom) {
                thisDom.style.top = `${parentRect.height - thisHeight}px`;
                thisDom.style.position = 'relative';
            } else {
                const parentTopPadding = parseInt(getComputedStyle(parentDom).paddingTop, 10);

                thisDom.style.top = `${parentTopPadding + this.props.topOffset}px`;
                thisDom.style.position = 'fixed';
            }
        } else {
            thisDom.style.top = `${this.props.topOffset}px`;
            thisDom.style.position = 'relative';
        }
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default ScrollInContainer;
