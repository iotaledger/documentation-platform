import React from 'react'
import styled, { css } from 'styled-components'

const tabletWidth = 768;
const desktopWidth = 1024;

const media = {
  tablet: (...args) => css`
    @media (min-width: ${tabletWidth}px) and (max-width: ${desktopWidth - 1}px) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${desktopWidth}px) {
      ${css(...args)};
    }
  `
}

const HomePageLayout = styled.div`
  display: flex;
  //width: 100%;
  .left-column {
    display: none;
    width: 100%;
    flex: 1;
    min-width: 150px;
  }
  .righ-column {
    width: 100%;
    flex: 3;
  }
  ${media.desktop`
    .left-column {
      display: block;
    }
  `};
`;

const DocPageLayout = styled.div`
  ${media.tablet``};
  ${media.desktop``};
`;


export {
  media,
  HomePageLayout,
  DocPageLayout
}
