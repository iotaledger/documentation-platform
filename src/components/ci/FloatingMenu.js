import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-static'

class FloatingMenu extends React.Component {
  static defaultProps = {
    data: undefined,
    highlightedItem: undefined
  };

  static propTypes = {
    data:
      PropTypes.arrayOf(
        PropTypes.shape(
          {
            name: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
          }
        )
      ).isRequired,
    highlightedItem: PropTypes.string
  };

  constructor(props) {
    super(props)
  }

  render() {
    return (<ul className="floating-menu" style={this.props.styles}>
      {
        this.props.data.map((item) => (
          <li
            key={item.name}
            className={
              classNames('floating-menu__item',
                {
                  'floating-menu__item--selected': this.props.highlightedItem === item.name || (item.link[0] === "#" && this.props.highlightedItem === item.link)
                })}
          >
            {item.link[0] !== "#" && (
              <Link to={item.link} exact>
                {item.name}
              </Link>
            )}
            {item.link[0] === "#" && (
              <Link to={item.link}>
                {item.name}
              </Link>
            )}
          </li>
        ))
      }
    </ul>);
  }
}

export default FloatingMenu
