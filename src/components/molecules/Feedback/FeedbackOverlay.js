import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class FeedbackOverlay extends React.Component {
    static propTypes = {
        isExpanded: PropTypes.bool,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])
    };

    render() {
        return (
            <div className={
                classNames(
                    'feedback-overlay',
                    { 'feedback-overlay--expanded': this.props.isExpanded }
                )
            }>
                {this.props.children}
            </div>
        );
    }
}
export default FeedbackOverlay;
