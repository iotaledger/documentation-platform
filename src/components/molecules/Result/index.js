import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Text from './../../atoms/Text'
import { Link } from 'react-static'

class Result extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        <Text className='text text--level6'>{`${this.props.foundResult.length} documents found.`}</Text>
        {this.props.foundResult.map(elm => {
          return (<div key={elm.id} style={{}}>
            <section><Text className='text text--level3 text--tertiary'>{elm.name}</Text></section>
            <section>
              <Link to={elm.id} exact>
                <Text className='text-paragraph'>{elm.id}</Text>
              </Link>
            </section>
          </div>)
        })}
      </section>
    )
  }
}

export default Result;
