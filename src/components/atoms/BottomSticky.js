import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import React from 'react';
import StylePropType from 'react-style-proptype';

class BottomSticky extends React.Component {
    static defaultProps = {
        horizontalOffset: 40,
        horizontalAlign: 'left',
        bottomOffset: 20,
        zIndex: undefined
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

    constructor(props) {
        super(props);

        this.state = {
            bottom: this.props.bottomOffset,
            display: 'none'
        };

        this.handleBottomStop = this.handleBottomStop.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleBottomStop);
        window.addEventListener('resize', this.handleBottomStop);
        // Set the initial position on a timer to let the DOM have time to settle
        // Otherwise the initial location is not set correctly
        setTimeout(() => this.handleBottomStop(), 0);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleBottomStop);
        window.removeEventListener('resize', this.handleBottomStop);
    }

    handleBottomStop() {
        // Do the update on next time slice to debounce it
        setTimeout(() => {
            const bottomStop = document.querySelectorAll('.bottom-stop');
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
                    this.setState({ bottom: this.props.bottomOffset + diff, display: 'block' });
                } else {
                    this.setState({ bottom: this.props.bottomOffset, display: 'block' });
                }
            }
        }, 0);
    }

    render() {
        const style = {
            ...this.props.styles,
            position: 'fixed',
            bottom: this.state.bottom,
            display: this.state.display
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
