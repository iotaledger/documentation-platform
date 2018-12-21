import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import reactClickOutside from 'react-click-outside';

class ClickOutside extends PureComponent {
    static propTypes = {
        onClickOutside: PropTypes.func,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])
    };

    handleClickOutside() {
        if (this.props.onClickOutside) {
            this.props.onClickOutside();
        }
    }

    render() {
        return this.props.children;
    }
}

export default reactClickOutside(ClickOutside);
