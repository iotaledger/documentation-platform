import PropTypes from 'prop-types';
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { getNextPage, getPreviousPage, parseProjectUrl } from '../../../utils/helpers';
import { ContentMenuPropTypes } from '../../../utils/propTypes';

class Navigator extends React.Component {
    static propTypes = {
        data: ContentMenuPropTypes,
        pathname: PropTypes.string,
        history: ReactRouterPropTypes.history
    };
    
    constructor(props) {
        super(props);
        this.state = {
            nextTitle: '',
            nextUrl: '',
            previousTitle: '',
            previousUrl: ''
        };

        this.navigateTo = this.navigateTo.bind(this);
    }

    componentDidMount() {
        const projectUrlParts = parseProjectUrl(this.props.pathname);
        const nextIndexItem = getNextPage(projectUrlParts, this.props.data);
        const previousIndexItem = getPreviousPage(projectUrlParts, this.props.data);

        this.setState({
            nextTitle: nextIndexItem ? nextIndexItem.name.replace(/\//g, ' / ') : '',
            nextUrl: nextIndexItem ? nextIndexItem.link : '',
            previousTitle: previousIndexItem ? previousIndexItem.name.replace(/\//g, ' / ') : '',
            previousUrl: previousIndexItem ? previousIndexItem.link : ''
        });
    }

    navigateTo(url) {
        this.props.history.push(url);
    }

    render() {
        return (<section className="navigator">
            <button onClick={() => this.navigateTo(this.state.previousUrl)} className="navigator__back" disabled={!this.state.previousUrl}>
                <div className="navigator__label">Prev</div>
                <span className="navigator__title">{this.state.previousTitle}</span>
            </button>
            <button onClick={() => this.navigateTo(this.state.nextUrl)} className="navigator__next" disabled={!this.state.nextUrl}>
                <div className="navigator__label">Next</div>
                <span className="navigator__title">{this.state.nextTitle}</span>
            </button>
        </section>);

    }
}
export default Navigator;
