import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { PureComponent } from 'react';

class ScrollToTop extends PureComponent {
    static defaultProps = {
        visibleTop: 350
    };

    static propTypes = {
        visibleTop: PropTypes.number
    };

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        };

        this.setSticky = this.setSticky.bind(this);
        this.lastScrollPos = 0;
    }

    componentDidMount() {
        document.addEventListener('scroll', this.setSticky);
        this.setSticky();
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.setSticky);
    }

    onScrollToTop() {
        const target = document.querySelector('#root');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setSticky() {
        if (typeof window !== 'undefined') {
            window.requestAnimationFrame(() => {
                const scrollTop =
                    window.pageYOffset !== undefined
                        ? window.pageYOffset
                        : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                
                this.setState({ isVisible: scrollTop >= this.props.visibleTop && this.lastScrollPos > scrollTop });

                this.lastScrollPos = scrollTop

            });
        }
    }

    render() {
        return (
            <button
                className={
                    classNames(
                        'scroll-to-top',
                        { 'scroll-to-top--hidden': !this.state.isVisible }
                    )
                }
                onClick={this.onScrollToTop}>
                <i className="icon icon-chevron-up"></i>
            </button>
        );
    }
}

export default ScrollToTop;