import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { FoundationDataHelper } from '../../../utils/foundationDataHelper';
import FoundationDataPropTypes from '../../../utils/foundationDataPropTypes';
import { createProjectLinks, parseProjectUrl } from '../../../utils/projects';
import ProjectsPropTypes from '../../../utils/projectsPropTypes';
import Heading from '../../atoms/Heading';
import Link from '../../atoms/Link';
import ScrollToTop from '../../atoms/ScrollToTop';
import Text from '../../atoms/Text';

class Footer extends React.Component {
    static propTypes = {
        foundationData: FoundationDataPropTypes,
        projects: ProjectsPropTypes.isRequired,
        history: ReactRouterPropTypes.history,
        location: ReactRouterPropTypes.location
    };

    constructor(props) {
        super(props);

        const projectParts = parseProjectUrl(this.props.location.pathname);

        const projectLinks = createProjectLinks(this.props.projects);

        let dynamicSections = [{
            heading: 'Developer Docs',
            links: projectLinks
        }];

        this.state = {
            projectLinks: createProjectLinks(this.props.projects),
            currentProjectFolder: projectParts.projectFolder,
            footerSections: dynamicSections.concat(
                props.foundationData.footerSections.map(fs => ({
                    heading: fs.label,
                    links: fs.items.map(l => ({
                        name: l.label,
                        link: l.url
                    }))
                }))
            )
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(urlOrProjectFolder) {
        if (urlOrProjectFolder.startsWith('http')) {
            window.open(urlOrProjectFolder, '_blank');
        } else {
            this.props.history.push(this.state.projectLinks.find(pl => pl.folder === urlOrProjectFolder).link);
        }
        this.setState({ currentProject: urlOrProjectFolder });
    }

    render() {
        return (
            <footer className="footer">
                <div className="footer__wrapper">
                    <div className="footer-top-content">
                        {
                            this.state.footerSections.map(({ heading, links }) =>
                                <section key={heading} className="footer-top-content__wrapper">
                                    <Heading level={3} text={heading} className="footer-top-content__heading" />
                                    {
                                        links.map(item =>
                                            <React.Fragment key={item.name}>
                                                {item.link && (
                                                    <Link href={item.link} className="footer-top-content__link">
                                                        {item.name}
                                                    </Link>
                                                )}
                                            </React.Fragment>
                                        )
                                    }
                                </section>
                            )
                        }
                    </div>
                    <div className="footer-top-content__dropdown-wrapper">
                        <Heading level={3} text="Jump to a section" className="footer-top-content__heading" />
                        <div className="select-wrapper">
                            <select
                                onChange={(e) => this.handleClick(e.target.value)}
                                value={this.state.currentProjectFolder}
                                className="select footer-top-content__dropdown">
                                <option value="">Select a topic</option>
                                {
                                    this.state.footerSections.map(({ heading, links }) =>
                                        <optgroup key={heading} label={heading}>
                                            {
                                                links.map(item =>
                                                    <option key={item.name} value={item.folder || item.link}>{item.name}</option>
                                                )
                                            }
                                        </optgroup>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <div className="footer-bottom-content">
                        <section className="footer-bottom-content__wrapper">
                            {
                                this.props.foundationData.registeredAddress.value.map((text, idx) =>
                                    <Text key={idx} className="footer-bottom-content__item" isHtml={true}>
                                        {text}
                                    </Text>
                                )
                            }
                        </section>
                        <section className="footer-bottom-content__wrapper">
                            {
                                this.props.foundationData.information.map((item, idx) =>
                                    <span key={idx} className="text footer-bottom-content__item">
                                        {FoundationDataHelper.createValue(item)}
                                    </span>
                                )
                            }
                        </section>
                        <ScrollToTop />
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
