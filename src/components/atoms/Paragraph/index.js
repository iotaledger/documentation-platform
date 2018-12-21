import PropTypes from 'prop-types';
import React from 'react';

class Paragraph extends React.PureComponent {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        className: PropTypes.string,
    };

    static defaultProps = {
        className: '',
    };

    render() {
        return (
            <p className={`paragraph ${this.props.className}`}>{this.props.children}</p>
        );
    }
}

export default Paragraph;
