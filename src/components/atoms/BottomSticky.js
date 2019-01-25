import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import React from 'react';
import StylePropType from 'react-style-proptype';

class BottomSticky extends React.PureComponent {
    static defaultProps = {
        horizontalOffset: 20,
        horizontalAlign: 'left',
        bottomOffset: 20,
    };

    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        horizontalOffset: PropTypes.number.isRequired,
        horizontalAlign: PropTypes.oneOf(['left', 'right']),
        bottomOffset: PropTypes.number.isRequired,
        styles: StylePropType,
        zIndex: PropTypes.number
    };

    componentDidMount() {

        this.handleBottomStop = this.handleBottomStop.bind(this);

        document.addEventListener('scroll', this.handleBottomStop);
        window.addEventListener('resize', this.handleBottomStop);

        // We must set the initial position on next redraw cycle
        // otherwise the component gets the initial position
        // wrong based on the parent bottom until first scroll
        setTimeout(() => this.handleBottomStop(), 0);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleBottomStop);
        window.removeEventListener('resize', this.handleBottomStop);
    }

    handleBottomStop() {
        const thisDom = ReactDOM.findDOMNode(this);
        const parentDom = thisDom.parentNode;

        const parentRect = parentDom.getBoundingClientRect();

        if (window.innerHeight - parentRect.bottom > 0) {
            thisDom.style.bottom = `${Math.abs(window.innerHeight - parentRect.bottom) + this.props.bottomOffset}px`;
        } else {
            thisDom.style.bottom = `${this.props.bottomOffset}px`;
        }

        thisDom.style.opacity = 1;
    }

    render() {
        const style = {
            ...this.props.styles,
            position: 'fixed',
            opacity: 0,
            bottom: `${this.props.bottomOffset}px`
        };

        style[this.props.horizontalAlign] = this.props.horizontalOffset;

        if (this.props.zIndex) {
            style.zIndex = this.props.zIndex;
        }

        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}

export default BottomSticky;
