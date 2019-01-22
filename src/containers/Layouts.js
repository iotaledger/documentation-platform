import styled, { css } from 'styled-components';

const maxWidthLayout = 1495;
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
  position: relative;
  padding-bottom: 100px;
  > aside {
    position: absolute;
    top: 0px;
    left: 50%;
    width: 100%;
    height: 100%;
    max-width: 1495px;
    box-sizing: border-box;
    padding: 0 40px;
    z-index: 2;
    transform: translate(-50%, 0);
    pointer-events: none;
  }
  > aside > div{
    pointer-events: all;
    width: 250px;
  }
  > article > div {
    max-width: 1495px;
    margin: auto;
    padding-right: 40px;
    padding-left: 290px;
    box-sizing: border-box;
  }
  ${media.tabletDown`
    > aside {
      display: none;
    }
    > article > div {
      padding-right: 16px;
      padding-left: 16px;
    }
  `};
`;

const DocPageLayout = styled.div`
display: flex;
justify-content: space-between;
margin: 0 auto;
max-width: ${maxWidthLayout}px;

.left-column{
  flex: 0 0 300px;
  padding: 70px 0px 120px 40px;
  box-sizing: border-box;
}
.middle-column {
  min-height: 500px;
  flex: 1;
  padding: 70px 65px 120px 55px;
  max-width: 720px;
  box-sizing: border-box;
  overflow:hidden;
}
.middle-toc {
  display: none;
}
.right-column {
  flex: 0 0 300px;
  padding: 70px 40px 120px 0;
  box-sizing: border-box;
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
  padding: 35px 16px 60px 16px;
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
  margin: 72px auto;
  max-width: 820px;
  .middle-column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ${media.tabletDown`
    margin: 32px;
  `};
`;

export { media, maxWidthLayout, HomePageLayout, DocPageLayout, SearchPageLayout, TabletHidden };

