import PropTypes from 'prop-types';
import React from 'react';
import Link from '../Link';

class MarkdownCard extends React.Component {
    static propTypes = {
        alt: PropTypes.string,
        img: PropTypes.string,
        title: PropTypes.string,
        link: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        id: PropTypes.string
    };

    render() {
        return (
            <div className="markdown-card">
                <div className="markdown-card--inner">
                    <Link href={this.props.link} id={this.props.id}>
                        <img className="markdown-card--image" src={this.props.img} alt={this.props.alt} />
                        <div className="markdown-card--content">
                            <div className="markdown-card--title">{this.props.title}</div>
                            {this.props.children}
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default MarkdownCard;
