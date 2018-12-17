import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Text from './../../atoms/Text'
import { Link } from 'react-static'

class Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      paginatedResult: [],
      foundResult: []
    }
    this.transformLink = this.transformLink.bind(this)
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.foundResult.length !== prevProps.foundResult.length || (this.props.indexStart !== prevProps.indexStart)) {
      console.log('this.props.foundResult', this.props.foundResult)
      this.setState({
        foundResult: this.props.foundResult,
        paginatedResult: this.props.foundResult.slice(this.props.indexStart, this.props.indexEnd + 1)
      })
    }
  }

  transformLink(link) {
    return link.replace(/\\/g,"/");
  }

  render() {

    return (
      <section>
        <Text className='text text--level6'>{`${this.state.foundResult.length} documents found.`}</Text>
        {this.state.paginatedResult.map(elm => {
          return (<div key={elm.id} style={{}}>
            <section><Text className='text text--level3 text--tertiary'>{elm.name}</Text></section>
            <section>
              <Link to={`/${this.transformLink(elm.id)}`} exact>
                <Text on className='text-paragraph'>{`/${this.transformLink(elm.id)}`}</Text>
              </Link>
            </section>
          </div>)
        })}
      </section>
    )
  }
}

export default Result;
