import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// <HorizontalRule />
// <HorizontalRule small />

class HorizontalRule extends React.Component {
    static propTypes = {
        small: PropTypes.bool
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <hr
                className={
                    classNames(
                        { 'horizontal-rule--small': this.props.small }
                    )
                } />
        );
    }
}

export default HorizontalRule;
