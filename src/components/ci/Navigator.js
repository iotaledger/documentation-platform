import React from 'react'
import { getNextPage, getPreviousPage } from './../../utils/helpers'

class Navigator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nextTitle: '',
      nextUrl: '',
      previousTitle: '',
      previousUrl: ''
    }
    this.navigate = this.navigate.bind(this)
  }
  componentDidMount() {
    // /docs/IRI/reference/2.0/getInclusionStates
    const fullUrl = this.props.pathname.split('/')
    const projectName = fullUrl[2]
    const currTitle = fullUrl[fullUrl.length - 1]
    const currVersion = fullUrl[fullUrl.length - 2]
    const  { nextName, nextUrl } = getNextPage(projectName, currTitle, currVersion, this.props.data)
    const { previousName, previousUrl } = getPreviousPage(projectName, currTitle, currVersion, this.props.data)

    this.setState({
      nextTitle: nextName,
      nextUrl: nextUrl,
      previousTitle: previousName,
      previousUrl: previousUrl
    })
  }
  navigate(direction) {
    alert('coming soon, please dont touch!')
  }
  render() {
    return (<section className="navigator">
   <button className="navigator__back" onClick={this.navigate}>
     <div className="navigator__label">Prev</div>
     <span className="navigator__title">{this.state.previousTitle}</span>
   </button>
   <button className="navigator__next" onClick={this.navigate}>
     <div className="navigator__label">Next</div>
     <span className="navigator__title">{this.state.nextTitle}</span>
   </button>
</section>)

  }
}
 export default Navigator
