import PropTypes from 'prop-types';
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import Footer from '../components/organisms/Footer';
import { ContentMenuPropTypes } from '../utils/propTypes';

class Container extends React.PureComponent {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        menu: ContentMenuPropTypes.isRequired,
        history: ReactRouterPropTypes.history,
        location: ReactRouterPropTypes.location
    };

    render() {
        return (
            <React.Fragment>
                {this.props.children}
                <Footer menu={this.props.menu} history={this.props.history} location={this.props.location} />
            </React.Fragment>);
    }
}

export default Container;