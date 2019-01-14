import styled, { css } from 'styled-components';

const maxWidthLayout = 1420;
const tabletWidth = 768;
const desktopWidth = 1024;
const desktopNarrowWidth = 1180;

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
  `,
  desktopDown: (...args) => css`
    @media (max-width: ${desktopWidth}px) {
      ${css(...args)};
    }
  `,
  desktopNarrowDown: (...args) => css`
    @media (max-width: ${desktopNarrowWidth}px) {
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
justify-content: space-between;

.left-column {
  flex: 0 0 280px;
  padding: 25px 0px 120px 40px;
  box-sizing: border-box;
}
.middle-column {
  min-height: 500px;
  flex: 1;
  padding: 20px 60px 120px 20px;
  max-width: 720px;
  box-sizing: border-box;
  overflow:hidden;
}
.middle-toc {
  display: none;
}
.right-column {
  flex: 0 0 300px;
  padding: 25px 0px 120px 0;
}
${media.desktopNarrowDown`
.left-column {
  display: none;
}
`};
${media.desktopDown`
justify-content: center;
.left-column {
  display: none;
}
.middle-column {
  min-height: unset;
  padding: 35px 16px 120px 16px;
}
.right-column {
  display: none;
}
.middle-toc {
  display: block;
  margin-bottom: 30px;
}
`};

`;

const SearchPageLayout = styled.div`
  margin: 80px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  .middle-column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ${media.tabletDown`
    margin: 40px;
  `};
`;

export { media, maxWidthLayout, HomePageLayout, DocPageLayout, SearchPageLayout, TabletHidden };

