import React from 'react';
import { Link } from 'react-static';
import { getNextPage, getPreviousPage, parseProjectUrl } from '../../utils/helpers';


class SubHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currProject: '',
      currTitle: '',
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
      currProject: projectUrlParts.projectName,
      currTitle: projectUrlParts.projectDocTitle,
      nextTitle: nextName,
      nextUrl: nextUrl,
      previousTitle: previousName,
      previousUrl: previousUrl
    })
  }

  render() {
    return (<section className="sub-header">
      <span className="sub-header__title">{this.state.currProject}</span>
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
