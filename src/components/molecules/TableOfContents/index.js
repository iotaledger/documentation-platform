import ReactRouterPropTypes from 'react-router-prop-types';
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
        compact: PropTypes.bool,
        history: ReactRouterPropTypes.history
    };

    constructor(props) {
        super(props);

        this.state = {
            activeTarget: undefined,
            filteredItems: this.props.items
        };
    }

    componentDidMount() {
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClick = this.handleClick.bind(this);

        document.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleScroll);
    }

    componentDidUpdate(prevProps) {
        if (this.props.items.length !== prevProps.items.length || !this.targets) {
            const headingCounters = {};

            let filteredItems = this.props.items;
            if (filteredItems.length > 30) {
                filteredItems = filteredItems.filter(i => i.level <= 2);
            }

            this.targets = filteredItems.map(item => {
                let id = item.link;

                if (headingCounters[id] === undefined) {
                    headingCounters[id] = -1;
                }
                headingCounters[id]++;
                if (headingCounters[id] > 0) {
                    id = `${id}_${headingCounters[id]}`;
                }

                item.link = id;

                const target = document.getElementById(item.link.substring(1));
                if (!target) {
                    // eslint-disable-next-line no-console
                    console.error(`Unable to find TOC link '${item.link.substring(1)}' in content`);
                }

                return target;
            }).filter(t => t !== undefined && t !== null);

            this.setState(
                {
                    filteredItems
                },
                () => {
                    this.handleScroll();
                    let defaultTarget = this.props.history.location && this.props.history.location.hash;
                    if (defaultTarget) {
                        const elem = document.querySelector(defaultTarget);
                        if (elem) {
                            scrollIntoView(elem);
                        }
                    }
                }
            );
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

    isElementInViewport(el) {
        const rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    handleClick(e) {
        e.preventDefault();

        const href = e.target.getAttribute('href');
        const target = document.querySelector(href);
        if (!target) {
            // eslint-disable-next-line no-console
            console.error(`Unable to find TOC link '${href}' in content`);
        } else {
            scrollIntoView(target, () => {
                this.props.history.replace(
                    `${this.props.history.location.pathname}${this.props.history.location.search}${href === '#root' ? '' : href}`);
            });
        }
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
                    {this.state.filteredItems.map((item, idx) => (
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
