import React from 'react';
import { Link } from 'react-static';
import { getNextPage, getPreviousPage, parseProjectUrl } from "../../utils/helpers";

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
    const projectUrlParts = parseProjectUrl(this.props.pathname);
    const { nextName, nextUrl } = getNextPage(projectUrlParts, this.props.data)
    const { previousName, previousUrl } = getPreviousPage(projectUrlParts, this.props.data)

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
