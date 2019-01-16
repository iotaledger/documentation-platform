import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
class ScrollInContainer extends React.Component {
    static defaultProps = {
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
        if (!this.container) {
            return;
        }

        const thisDom = ReactDOM.findDOMNode(this);
        const parentDom = thisDom.parentNode;

        const thisRect = thisDom.getBoundingClientRect();
        const parentRect = parentDom.getBoundingClientRect();

        let newTop = 0;
        if (parentRect.top < 0) {
            newTop -= parentRect.top;
        }

        let thisHeight = thisRect.height + this.props.bottomOffset;

        if (newTop + thisHeight > parentRect.height) {
            newTop = parentRect.height - thisHeight;
        }

        if(this.props.topOffset){
            newTop += this.props.topOffset;
        }

        thisDom.style.top = `${Math.floor(newTop)}px`;
    }

    render() {
        const style = {
            position: 'relative',
            top: '0px'
        };

        return (
            <div ref={(el) => this.container = el} style={style}>
                {this.props.children}
            </div>
        );
    }
}

export default ScrollInContainer;
