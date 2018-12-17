import React from 'react'

const versionStyle = {
  position: 'fixed',
  bottom: '200px',
  left: '31px'
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
      <div>
        <select value={this.state.currVersion} onChange={(e) => this.props.onChange(e.target.value)}>
          <option value="">Jump to version</option>
          {this.state.versions.map((version, indx) => (<option key={indx} value={version} >{version}</option>))}
        </select>
      </div>
    </div>)
  }
}

export default VersionPicker
