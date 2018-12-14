import React from 'react'
import { getNextPage, getPreviousPage } from './../../utils/helpers'
import { Link } from 'react-static'

class Navigator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nextTitle: '',
      nextUrl: '',
      previousTitle: '',
      previousUrl: ''
    }
  }
  componentDidMount() {
    // /docs/IRI/reference/2.0/getInclusionStates
    const fullUrl = this.props.pathname.split('/')
    const projectName = fullUrl[2]
    const currTitle = fullUrl[fullUrl.length - 1]
    const currVersion = fullUrl[fullUrl.length - 2]
    const { nextName, nextUrl } = getNextPage(projectName, currTitle, currVersion, this.props.data)
    const { previousName, previousUrl } = getPreviousPage(projectName, currTitle, currVersion, this.props.data)

    this.setState({
      nextTitle: nextName,
      nextUrl: nextUrl,
      previousTitle: previousName,
      previousUrl: previousUrl
    })
  }
  render() {
    return (<section className="navigator">
      <Link to={this.state.previousUrl} exact className="navigator__back">
        <div className="navigator__label">Prev</div>
        <span className="navigator__title">{this.state.previousTitle}</span>
      </Link>
      <Link to={this.state.nextUrl} exact className="navigator__next">
        <div className="navigator__label">Next</div>
        <span className="navigator__title">{this.state.nextTitle}</span>
      </Link>
    </section>)

  }
}
export default Navigator
