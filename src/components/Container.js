import React from 'react'
import styled from 'styled-components'
import Footer from './molecules/Footer';

const Main = styled.div`
  margin: 0 auto;
  position: relative;
`;

export default ({ children, menu, history, location }) => (
  <Main id="main">
    {children}
    <Footer menu={menu} history={history} location={location}/>
  </Main>
)
