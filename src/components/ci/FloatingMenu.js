import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-static'

const getLink = (name, versions) =>
  `/docs/${name}/reference/${Object.keys(versions)[Object.keys(versions).length - 1]}/README`

const FloatingMenu = ({ data, highlightedItem, styles }) => (
  <ul className="floating-menu" style={styles}>
    {
      Object.values(data).map(({ name, versions }) => (
        <li
          key={name}
          className={classNames('floating-menu__item', {
            'floating-menu__item--selected': highlightedItem === name
          })}
        >
          <Link to={getLink(name, versions)} exact>
            {name}
          </Link>
        </li>
      ))
    }
  </ul>
)

export default FloatingMenu
