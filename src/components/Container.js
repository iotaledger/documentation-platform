import React from 'react'
import styled from 'styled-components'
import Footer from './molecules/Footer';

const Main = styled.div`
  margin: 0 auto;
  position: relative;
`;

export default ({ children }) => (
  <Main id="main">
    {children}
    <Footer />
  </Main>
)
