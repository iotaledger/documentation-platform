import React from 'react';
import PropTypes from 'prop-types';

class Label extends React.PureComponent {
    static propTypes = {
        id: PropTypes.string,
        text: PropTypes.node,
        className: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])
    };

    static defaultProps = {
        className: '',
    };

    render() {
        if (this.props.text) {
            return (
                <label htmlFor={this.props.id} className={`control-label ${this.props.className}`}>
                    {this.props.children || this.props.text}
                </label>
            );
        }
        return null;
    }
}

export default Label;
