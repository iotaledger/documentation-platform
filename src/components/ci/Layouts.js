import styled, { css } from 'styled-components';

const maxWidthLayout = 1420;
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

const TabletHidden = styled.div`
  @media (max-width: ${tabletWidth}px) {
      display: none;
  };
`;

const HomePageLayout = styled.div`
  display: flex;
  .left-column {
    width: 100%;
    flex: 1;
    min-width: 150px;
  }
  .right-column {
    width: 100%;
    flex: 3;
  }
`;

const DocPageLayout = styled.div`
display: flex;
padding: 0 16px;

.left-column {
  display: none;
  width: 100%;
  flex: 1;
}
.middle-column {
  padding: 15px 20px 0px 0px;
  width: 60%;
  flex: 5;
}
.right-column {
  display: none;
  width: 100%;
  flex: 1;
}
`;


export { media, maxWidthLayout, HomePageLayout, DocPageLayout, TabletHidden };

