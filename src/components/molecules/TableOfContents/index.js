import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { currentScrollTop, scrollIntoView } from '../../../utils/scroll';

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

        this.state = {
            activeTarget: undefined
        };
    }

    componentDidMount() {
        this.handleScroll = this.handleScroll.bind(this);

        document.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleScroll);
    }

    componentDidUpdate(prevProps) {
        if (this.props.items.length !== prevProps.items.length || !this.targets) {
            const headingCounters = {};
    
            this.targets = this.props.items.map(item => {
                let id = item.link;

                if (headingCounters[id] === undefined) {
                    headingCounters[id] = -1;
                }
                headingCounters[id]++;
                if (headingCounters[id] > 0) {
                    id = `${id}_${headingCounters[id]}`;
                }

                item.link = id;
    
                return document.getElementById(item.link.substring(1));
            });

            this.handleScroll();
        }
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleScroll);
    }

    handleScroll() {
        if (this.targets && this.targets.length > 0) {
            let activeTarget = this.targets[0].id;
            const scrollTop = currentScrollTop();

            for (let i = 0; i < this.targets.length; i++) {
                if (scrollTop >= this.targets[i].offsetTop - 200) {
                    activeTarget = this.targets[i].id;
                }
            }

            if (activeTarget !== this.state.activeTarget) {
                this.setState({
                    activeTarget
                });
            }
        }
    }

    handleClick(e) {
        e.preventDefault();

        scrollIntoView(document.querySelector(e.target.getAttribute('href')));
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
                        <li key={idx} className={classNames(
                            'table-of-contents-list-item',
                            { 'table-of-contents-list-item__sub': item.level > 2 },
                            { 'table-of-contents-list-item__selected': this.state.activeTarget === item.link.substring(1) })}>
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
