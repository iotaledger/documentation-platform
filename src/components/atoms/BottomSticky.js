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

        const thisRect = thisDom.getBoundingClientRect();
        const parentRect = parentDom.getBoundingClientRect();

        const offset = Math.min(window.innerHeight, parentRect.bottom);

        const top = offset - thisRect.height - this.props.bottomOffset;

        thisDom.style.top = `${Math.floor(top)}px`;
    }

    render() {
        const style = {
            ...this.props.styles,
            position: 'fixed'
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
