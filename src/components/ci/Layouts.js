import styled, { css } from 'styled-components';

const maxWidthLayout = 1500;
const tabletWidth = 768;
const desktopWidth = 1024;

const media = {
    tablet: (...args) => css`
    @media (min-width: ${tabletWidth}px) and (max-width: ${desktopWidth - 1}px) {
      ${css(...args)};
    }
  `,
    tabletDown: (...args) => css`
    @media (max-width: ${tabletWidth - 1}px) {
      ${css(...args)};
    }
  `,
    desktop: (...args) => css`
    @media (min-width: ${desktopWidth}px) {
      ${css(...args)};
    }
  `
};

const TabletHidden = styled.div`
  ${media.tabletDown`
    display: none;
  `}
`;

const HomePageLayout = styled.div`
  display: flex;
  .left-column {
    flex: 1;
    min-width: 250px;
  }
  .right-column {
    flex: 3;
  }
  ${media.tabletDown`
    .left-column {
      display: none;
    }
  `};
`;

const DocPageLayout = styled.div`
display: flex;
padding: 0 16px;

.left-column {
  min-width: 250px;
  flex: 1;
  padding: 25px 0px 120px 0px;
}
.middle-column {
  min-height: 500px;
  flex: 5;
  padding: 35px 20px 120px 20px;
  overflow:hidden;
}
.right-column {
  padding: 25px 0px 120px 0px;
  flex: 1;
}
${media.tabletDown`
.left-column {
  display: none;
}
.middle-column {
  min-height: unset;
}
.right-column {
  display: none;
}
`};

`;


export { media, maxWidthLayout, HomePageLayout, DocPageLayout, TabletHidden };

