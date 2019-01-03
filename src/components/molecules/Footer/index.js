import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { footerSections, footerStaticContent } from '../../../contentFooter.json';
import { getLatestVersionLinks, parseProjectUrl } from '../../../utils/helpers.js';
import { ContentMenuPropTypes } from '../../../utils/propTypes.js';
import Heading from '../../atoms/Heading';
import Link from '../../atoms/Link';
import Text from '../../atoms/Text';

class Footer extends React.Component {
    static propTypes = {
        menu: ContentMenuPropTypes.isRequired,
        history: ReactRouterPropTypes.history,
        location: ReactRouterPropTypes.location
    };

    constructor(props) {
        super(props);

        const projectParts = parseProjectUrl(this.props.location.pathname);

        this.state = {
            projectLinks: getLatestVersionLinks(this.props.menu),
            currentProject: projectParts.projectName
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(urlOrProjectName) {
        if (urlOrProjectName.startsWith('http')) {
            window.open(urlOrProjectName, '_blank');
        } else {
            this.props.history.push(this.state.projectLinks[urlOrProjectName]);
        }
        this.setState({currentProject: urlOrProjectName});
    }

    render() {
        return (
            <footer className="footer">
                <div className="footer__wrapper">
                    <div className="footer-top-content">
                        {
                            footerSections.map(({ heading, links }) =>
                                <section key={heading} className="footer-top-content__wrapper">
                                    <Heading level={3} text={heading} className="footer-top-content__heading" />
                                    {
                                        links.map(({ href, folder, text }) =>
                                            <React.Fragment key={text}>
                                                {href && (
                                                    <Link href={href} className="footer-top-content__link">
                                                        {text}
                                                    </Link>
                                                )}
                                                {folder && (
                                                    <a onClick={() => this.handleClick(folder)} className="footer-top-content__link">
                                                        {text}
                                                    </a>
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
                                value={this.state.currentProject}
                                className="select footer-top-content__dropdown">
                                <option value="">Select a topic</option>
                                {
                                    footerSections.map(({ heading, links }) =>
                                        <optgroup key={heading} label={heading}>
                                            {
                                                links.map(({ href, folder, text }) =>
                                                    <option key={text} value={href || folder}>{text}</option>
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
                                footerStaticContent.address.map(text =>
                                    <Text key={text} className="footer-bottom-content__item" html>
                                        {text}
                                    </Text>
                                )
                            }
                        </section>
                        <section className="footer-bottom-content__wrapper legal">
                            {
                                footerStaticContent.legal.map(text =>
                                    <Text key={text} className="footer-bottom-content__item" html>
                                        {text}
                                    </Text>
                                )
                            }
                        </section>
                        <section className="footer-bottom-content__wrapper copyright">
                            {
                                footerStaticContent.copyright.map(text =>
                                    <Text key={text} className="footer-bottom-content__item" html>
                                        {text}
                                    </Text>
                                )
                            }
                        </section>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
