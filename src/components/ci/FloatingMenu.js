import React from 'react'
import styled, { css } from 'styled-components'
import logo from './../../assets/Logo.svg'

class FloatingMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<ul className="floating-menu" style={this.props.styles}>
    {Object.values(this.props.data).map(({ name, versions }) => (
      <li
        className="floating-menu__item"
        style={{ cursor: 'pointer' }}
        key={name}
        to={{ state: { project: name }}}
        onClick={(e) => window.open(`/docs/${name}/reference/${Object.keys(versions)[Object.keys(versions).length - 1]}/README`, '_blank') }
      >
        {name}
      </li>)
    )}

</ul>)
  }
}
 export default FloatingMenu
