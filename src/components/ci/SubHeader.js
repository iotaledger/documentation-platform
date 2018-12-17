import React from 'react'
import { Link } from 'react-static'
import { getNextPage, getPreviousPage } from './../../utils/helpers'


class SubHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currTitle: '',
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
    const currVersion = fullUrl[4]
    const currTitle = fullUrl[fullUrl.length - 1]
    const  { nextName, nextUrl } = getNextPage(projectName, currTitle, currVersion, this.props.data)
    const { previousName, previousUrl } = getPreviousPage(projectName, currTitle, currVersion, this.props.data)

    this.setState({
      currTitle,
      nextTitle: nextName,
      nextUrl: nextUrl,
      previousTitle: previousName,
      previousUrl: previousUrl
    })
  }
  render() {
    return (<section className="sub-header">
  <span className="sub-header__title">IOTA Basics</span>
  <section className="sub-header__body">
    <Link to={this.state.previousUrl} exact>
    <button className="arrow-button arrow-button--left"></button>
             </Link>
    <span className="sub-header__bottom-title">{this.state.currTitle}</span>
     <Link to={this.state.nextUrl} exact>
    <button className="arrow-button arrow-button--right"></button>
             </Link>
  </section>
</section>)

  }
}
 export default SubHeader
