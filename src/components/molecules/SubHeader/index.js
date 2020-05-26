import PropTypes from 'prop-types';
import React from 'react';
import { getDocumentTitle, getNextPage, getPreviousPage, getProjectTitle, parseProjectUrl } from '../../../utils/projects';
import ProjectsPropTypes from '../../../utils/projectsPropTypes';
import Link from '../../atoms/Link';

class SubHeader extends React.Component {
    static propTypes = {
        projects: ProjectsPropTypes,
        pathname: PropTypes.string
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
    }

    componentDidMount() {
        const projectUrlParts = parseProjectUrl(this.props.pathname);
        const nextIndexItem = getNextPage(projectUrlParts, this.props.projects);
        const previousIndexItem = getPreviousPage(projectUrlParts, this.props.projects);

        this.setState({
            currProject: getProjectTitle(projectUrlParts, this.props.projects),
            currTitle: getDocumentTitle(projectUrlParts, this.props.projects),
            nextTitle: nextIndexItem ? nextIndexItem.name : '',
            nextUrl: nextIndexItem ? nextIndexItem.link : '',
            previousTitle: previousIndexItem ? previousIndexItem.name : '',
            previousUrl: previousIndexItem ? previousIndexItem.link : ''
        });
    }

    render() {
        return (<section className="sub-header__wrapper">
            <section className="sub-header">
                <span className="sub-header__title">{this.state.currProject}</span>
                <section className="sub-header__body">
                    <Link href={this.state.previousUrl} className="arrow-button arrow-button--left" disabled={!this.state.previousUrl}></Link>
                    <span className="sub-header__bottom-title">{this.state.currTitle}</span>
                    <Link href={this.state.nextUrl} className="arrow-button arrow-button--right" disabled={!this.state.nextUrl}></Link>
                </section>
            </section>
        </section>);

    }
}
export default SubHeader;
