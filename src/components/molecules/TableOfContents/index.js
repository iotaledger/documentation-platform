import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { scrollIntoView } from '../../../utils/scroll';

class TableOfContents extends React.PureComponent {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        })),
        title: PropTypes.string.isRequired,
        compact: PropTypes.bool
    };

    constructor(props) {
        super(props);
    }

    handleClick(e) {
        e.preventDefault();

        scrollIntoView(document.querySelector(e.target.getAttribute('href')));

        // document.querySelector(e.target.getAttribute('href')).scrollIntoView({
        //     block: 'start',
        //     behavior: 'smooth'
        // });
    }

    render() {
        return (
            <div className={classNames('table-of-contents',
                { 'table-of-contents__compact': this.props.compact })
            }>
                <h3 className="table-of-contents__section-title">
                    {this.props.title}
                </h3>
                <ul className="table-of-contents__section">
                    {this.props.items.map((item, idx) => (
                        <li key={idx} className={classNames('table-of-contents-list-item', {'table-of-contents-list-item__sub' : item.level > 2})}>
                            <a href={item.link} onClick={this.handleClick}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TableOfContents;
