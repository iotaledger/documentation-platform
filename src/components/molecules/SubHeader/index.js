import PropTypes from 'prop-types';
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { getDocumentTitle, getNextPage, getPreviousPage, getProjectTitle, parseProjectUrl } from '../../../utils/helpers';
import { ContentMenuPropTypes, ContentHomePagePropTypes } from '../../../utils/propTypes';

class SubHeader extends React.Component {
    static propTypes = {
        menuData: ContentMenuPropTypes,
        contentHomePage: ContentHomePagePropTypes.isRequired,
        pathname: PropTypes.string,
        history: ReactRouterPropTypes.history
    };

    constructor(props) {
        super(props);
        this.state = {
            currProject: '',
            currTitle: '',
            nextTitle: '',
            nextUrl: '',
            previousTitle: '',
            previousUrl: ''
        };
        this.navigateTo = this.navigateTo.bind(this);
    }

    componentDidMount() {
        const projectUrlParts = parseProjectUrl(this.props.pathname);
        const nextIndexItem = getNextPage(projectUrlParts, this.props.menuData);
        const previousIndexItem = getPreviousPage(projectUrlParts, this.props.menuData);

        this.setState({
            currProject: getProjectTitle(projectUrlParts, this.props.contentHomePage),
            currTitle: getDocumentTitle(projectUrlParts, this.props.menuData).replace(/\//g, ' / '),
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
        return (<section className="sub-header__wrapper">
            <section className="sub-header">
                <span className="sub-header__title">{this.state.currProject}</span>
                <section className="sub-header__body">
                    <button onClick={() => this.navigateTo(this.state.previousUrl)} className="arrow-button arrow-button--left" disabled={!this.state.previousUrl}></button>
                    <span className="sub-header__bottom-title">{this.state.currTitle}</span>
                    <button onClick={() => this.navigateTo(this.state.nextUrl)} className="arrow-button arrow-button--right" disabled={!this.state.nextUrl}></button>
                </section>
            </section>
        </section>);

    }
}
export default SubHeader;
