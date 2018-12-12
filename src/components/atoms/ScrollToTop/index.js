import React, { PureComponent } from 'react';
import button from './../../../assets/back-to-top.svg'

export default class Sticky extends PureComponent {
  static defaultProps = {
    top: 350,
  };

  constructor(props) {
    super(props);
    this.setSticky = this.setSticky.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.setSticky);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.setSticky);
  }

  onScrollToTop() {
    const target = document.querySelector('#main');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  setSticky() {
    const { elem } = this;
    const { top } = this.props;
    if (typeof window !== 'undefined') {
      window.requestAnimationFrame(() => {
        const scrollTop =
          window.pageYOffset !== undefined
            ? window.pageYOffset
            : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        if (scrollTop >= top) {
          elem.style.position = 'fixed';
          elem.style.bottom = '130px';
        } else {
          elem.style.position = 'relative';
          elem.style.bottom = 'unset';
        }
      });
    }
  }

  render() {
    return (
      <div className="scroll-to-top" ref={elem => (this.elem = elem)} onClick={this.onScrollToTop}>
        <img src={button} alt="scroll To Top" />
      </div>
    );
  }
}
