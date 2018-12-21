import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.PureComponent {
    static propTypes = {
        id: PropTypes.string,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        className: PropTypes.string,
    };

    static defaultProps = {
        className: ''
    };

    render() {
        return (
            <img id={this.props.id} src={this.props.src} alt={this.props.alt} className={`image ${this.props.className}`} />
        );
    }
}

export default Image;
