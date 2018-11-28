import React from 'react'
import styled, { css } from 'styled-components'

const Main = styled.div`
  margin: 0 auto;
  position: relative;
`;

class Container extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<Main>
      {this.props.children}
    </Main>)
  }
}

export default Container
