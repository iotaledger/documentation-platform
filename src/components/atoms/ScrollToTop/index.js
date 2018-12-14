import classNames from 'classnames';
import React, { PureComponent } from 'react';

export default class Sticky extends PureComponent {
  static defaultProps = {
    visibleTop: 350
  };

  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };

    this.setSticky = this.setSticky.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.setSticky);
    this.setSticky();
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.setSticky);
  }

  onScrollToTop() {
    const target = document.querySelector('#main');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  setSticky() {
    if (typeof window !== 'undefined') {
      window.requestAnimationFrame(() => {
        const scrollTop =
          window.pageYOffset !== undefined
            ? window.pageYOffset
            : (document.documentElement || document.body.parentNode || document.body).scrollTop;

          this.setState({ isVisible: scrollTop >= this.props.visibleTop});
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
        <i className="fa fa-chevron-up"></i>
      </button>
    );
  }
}
