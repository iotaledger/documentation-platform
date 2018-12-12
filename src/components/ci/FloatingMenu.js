import React from 'react';

class FloatingMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<ul className="floating-menu" style={this.props.styles}>
      {Object.values(this.props.data).map(({ name, versions }) => (
        <li
          className="floating-menu__item"
          key={name}
          to={{ state: { project: name } }}
        >
          <a onClick={(e) => window.open(`/docs/${name}/reference/${Object.keys(versions)[Object.keys(versions).length - 1]}/README`, '_blank')}>{name}</a>
        </li>)
      )}

    </ul>)
  }
}
export default FloatingMenu
