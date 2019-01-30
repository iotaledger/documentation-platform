import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class HeadingLabel extends React.Component {
    static propTypes = {
        style: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        id: PropTypes.string
    };

    render() {
        return (
            <div
                className={
                    classNames(
                        'heading-label',
                        { 'heading-label--secondary': this.props.style === 'secondary' }
                    )
                }
                id={this.props.id}>
                {this.props.children}
            </div>
        );
    }
}

export default HeadingLabel;
