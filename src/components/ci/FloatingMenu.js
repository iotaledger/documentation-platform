import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-static'

const getLink = (name, versions) =>
  `/docs/${name}/reference/${Object.keys(versions)[Object.keys(versions).length - 1]}/README`

class FloatingMenu extends React.Component {
  static defaultProps = {
    data: undefined,
    highlightedItem: undefined
  };

  static propTypes = {
    data: PropTypes.objectOf(
      PropTypes.shape(
        {
          name: PropTypes.string,
          versions: PropTypes.objectOf(
            PropTypes.arrayOf(
              PropTypes.shape(
                {
                  name: PropTypes.string,
                  link: PropTypes.string
                }
              )
            )
          )
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
        Object.values(this.props.data).map(({ name, versions }) => (
          <li
            key={name}
            className={classNames('floating-menu__item', {
              'floating-menu__item--selected': this.props.highlightedItem === name
            })}
          >
            <Link to={getLink(name, versions)} exact>
              {name}
            </Link>
          </li>
        ))
      }
    </ul>);
  }
}

export default FloatingMenu
