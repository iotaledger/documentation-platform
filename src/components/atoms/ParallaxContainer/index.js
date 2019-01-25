import Parallax from 'parallax-js';
import PropTypes from 'prop-types';
import React from 'react';
import './parallaxContainer.css';


class ParallaxContainer extends React.PureComponent {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])
    };

    componentDidMount() {
        this.parallaxInstance = new Parallax(this.parallaxEl, {});
    }

    render() {
        return (
            <div className="parallax" ref={(el) => (this.parallaxEl = el)}>
                {this.props.children}
            </div>
        );
    }
}

export default ParallaxContainer;
