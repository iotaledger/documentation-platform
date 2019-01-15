import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

class Text extends React.PureComponent {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        className: PropTypes.string,
        html: PropTypes.bool,
    };

    render() {
        if (this.props.html) {
            return <span className={classNames('text', this.props.className)} dangerouslySetInnerHTML={{ __html: this.props.children }} />;
        }

        return (<span className={classNames('text', this.props.className)}>{this.props.children}</span>);
    }
}

export default Text;
