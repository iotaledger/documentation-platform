import React from 'react'

const versionStyle = {
  margin: "20px"
}

class VersionPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      versions: [],
      currVersion: ''
    }
  }

  componentDidMount() {
    const url = this.props.currUrl.split('/')
    this.setState({
      currVersion: url[url.length - 2],
      versions: Object.keys(this.props.versions.versions)
    })
  }

  render() {
    return (<div style={versionStyle}>
      <span>Version&nbsp;</span>
      <select value={this.state.currVersion} onChange={(e) => this.props.onChange(e.target.value)}>
        {this.state.versions.map((version, indx) => (<option key={indx} value={version} >{version}</option>))}
      </select>
    </div>)
  }
}

export default VersionPicker
