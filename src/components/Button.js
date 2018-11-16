import React from 'react';

class Button extends React.PureComponent {
  render () {
    return <button onClick={this.props.onClick}>{this.props.children}</button>
  }
}

export default Button
