import PropTypes from 'prop-types';
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import Disclaimer from '../components/atoms/Disclaimer';
import Footer from '../components/organisms/Footer';
import FoundationDataPropTypes from '../utils/foundationDataPropTypes';
import ProjectsPropTypes from '../utils/projectsPropTypes';

class Container extends React.PureComponent {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        projects: ProjectsPropTypes.isRequired,
        history: ReactRouterPropTypes.history,
        location: ReactRouterPropTypes.location,
        foundationData: FoundationDataPropTypes.isRequired
    };

    render() {
        return (
            <React.Fragment>
                {this.props.children}
                <Footer
                    projects={this.props.projects}
                    history={this.props.history}
                    location={this.props.location}
                    foundationData={this.props.foundationData} />
                <Disclaimer />
            </React.Fragment>);
    }
}

export default Container;