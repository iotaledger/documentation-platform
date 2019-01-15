import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class Image extends React.PureComponent {
    static propTypes = {
        id: PropTypes.string,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        className: PropTypes.string,
    };

    render() {
        return (
            <img id={this.props.id} src={this.props.src} alt={this.props.alt} className={classNames('image', this.props.className)} />
        );
    }
}

export default Image;
