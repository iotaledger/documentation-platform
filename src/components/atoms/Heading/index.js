import PropTypes from 'prop-types';
import React from 'react';

class Heading extends React.PureComponent {
    static propTypes = {
        level: PropTypes.number,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        text: PropTypes.string,
        className: PropTypes.string,
        id: PropTypes.string
    };

    static defaultProps = {
        level: 1,
        className: ''
    };

    render() {
        return React.createElement(
            `h${this.props.level}`,
            {
                className: `heading ${this.props.className}`,
                id: this.props.id
            },
            this.props.children || this.props.text
        );
    }
}

export default Heading;
