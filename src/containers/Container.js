import PropTypes from 'prop-types';
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import Footer from '../components/organisms/Footer';
import { ProjectsPropTypes } from '../utils/propTypes';

class Container extends React.PureComponent {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        projects: ProjectsPropTypes.isRequired,
        history: ReactRouterPropTypes.history,
        location: ReactRouterPropTypes.location
    };

    render() {
        return (
            <React.Fragment>
                {this.props.children}
                <Footer projects={this.props.projects} history={this.props.history} location={this.props.location} />
            </React.Fragment>);
    }
}

export default Container;