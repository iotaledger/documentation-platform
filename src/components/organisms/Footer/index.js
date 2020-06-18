import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import FooterDataPropTypes from '../../../utils/footerDataPropTypes';
import ProjectsPropTypes from '../../../utils/projectsPropTypes';
import { createProjectLinks, parseProjectUrl } from '../../../utils/projects';
import Heading from '../../atoms/Heading';
import Link from '../../atoms/Link';
import ScrollToTop from '../../atoms/ScrollToTop';
import Text from '../../atoms/Text';

class Footer extends React.Component {
    static propTypes = {
        footerData: FooterDataPropTypes,
        projects: ProjectsPropTypes.isRequired,
        history: ReactRouterPropTypes.history,
        location: ReactRouterPropTypes.location
    };

    constructor(props) {
        super(props);

        const projectParts = parseProjectUrl(this.props.location.pathname);

        const projectLinks = createProjectLinks(this.props.projects);

        let dynamicSections = [ {
            heading: props.footerData.footerDocsSectionTitle,
            links: projectLinks
        } ];

        this.state = {
            projectLinks: createProjectLinks(this.props.projects),
            currentProjectFolder: projectParts.projectFolder,
            footerSections: dynamicSections.concat(props.footerData.footerSections),
            footerStaticContent: props.footerData.footerStaticContent
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(urlOrProjectFolder) {
        if (urlOrProjectFolder.startsWith('http')) {
            window.open(urlOrProjectFolder, '_blank');
        } else {
            this.props.history.push(this.state.projectLinks.find(pl => pl.folder === urlOrProjectFolder).link);
        }
        this.setState({currentProject: urlOrProjectFolder});
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
                                this.state.footerStaticContent.address.map(text =>
                                    <Text key={text} className="footer-bottom-content__item" html>
                                        {text}
                                    </Text>
                                )
                            }
                        </section>
                        <section className="footer-bottom-content__wrapper legal">
                            {
                                this.state.footerStaticContent.legal.map(text =>
                                    <Text key={text} className="footer-bottom-content__item" html>
                                        {text}
                                    </Text>
                                )
                            }
                        </section>
                        <section className="footer-bottom-content__wrapper copyright">
                            {
                                this.state.footerStaticContent.copyright.map(text =>
                                    <Text key={text} className="footer-bottom-content__item" html>
                                        {text}
                                    </Text>
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
