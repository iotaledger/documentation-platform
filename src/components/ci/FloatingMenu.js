import React from 'react';

class FloatingMenu extends React.Component {
  constructor(props) {
    super(props)
    this.handleNavigate = this.handleNavigate.bind(this)
  }
  handleNavigate(name, versions) {
    const url = `/docs/${name}/reference/${Object.keys(versions)[Object.keys(versions).length - 1]}/README`
    if(this.props.samePage) {
      window.open(url, "_self")

    } else {
      window.open(url, '_blank')
    }
  }
  render() {
    return (<ul className="floating-menu" style={this.props.styles}>
      {Object.values(this.props.data).map(({ name, versions }) => (
        <li
          className={`floating-menu__item ${this.props.highlightedItem === name ? 'floating-menu__item--selected' : ''}`}
          key={name}
          to={{ state: { project: name } }}
        >
          <a
            onClick={e =>this.handleNavigate(name, versions)}>
            {name}
          </a>
        </li>)
      )}

    </ul>)
  }
}
export default FloatingMenu
