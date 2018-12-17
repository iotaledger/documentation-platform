import React from "react";
import { Head, SiteData } from "react-static";
import BottomSticky from "../components/atoms/BottomSticky";
import BottomStop from "../components/atoms/BottomStop";
import ScrollInContainer from "../components/atoms/ScrollInContainer";
import ScrollToTop from '../components/atoms/ScrollToTop';
import FloatingMenu from '../components/ci/FloatingMenu';
import Header from '../components/ci/Header';
import { HomePageLayout, maxWidthLayout, TabletHidden } from '../components/ci/Layouts';
import Container from '../components/Container';
import EmailSignup from '../components/molecules/EmailSignup';
import Feedback from '../components/molecules/Feedback';
import CardContainer from '../components/molecules/HomePageCard';
import ProjectTopicsContainer from '../components/molecules/ProjectTopics';
import contentHomePage from '../contentHomePage.json';
import { submitFeedback } from "../utils/feedbackHelper";

export default (props) => (
  <SiteData
    render={({ menu, repo, repoURL, repoName }) => (
      <Container>
        <Head>
          <title>Home | {repoName}</title>
        </Head>
        <Header
          history={props.history}
          headerTitle='Developer Documentation'
          topTitles={contentHomePage.headerTopLinks}
          data={menu}
        />

        <div id="floating-menu-top-limit"></div>
        <div style={{ backgroundColor: '#f3f2f1' }}>
          <HomePageLayout style={{ backgroundColor: '#f3f2f1', width: '100%', minHeight: '482px', maxWidth: maxWidthLayout, margin: 'auto' }}>
            <TabletHidden>
              <div className="left-column" style={{ display: "flex", justifyContent: "center" }}>
                <ScrollInContainer topOffset={60} bottomOffset={120} topMarker="floating-menu-top-limit" bottomMarker="floating-menu-bottom-limit">
                  <FloatingMenu data={menu} />
                </ScrollInContainer>
              </div>
            </TabletHidden>
            <div className="right-column" style={{}}>
              <CardContainer content={contentHomePage.cards} />
            </div>
          </HomePageLayout>
        </div>
        <HomePageLayout style={{ maxWidth: maxWidthLayout, margin: 'auto' }}>
          <TabletHidden>
            <div className="left-column" >
            </div>
          </TabletHidden>
          <div className="right-column" style={{ padding: '25px' }}>
            <ProjectTopicsContainer contentHomePage={contentHomePage} />
          </div>
        </HomePageLayout>
        <div id="floating-menu-bottom-limit" />
        <BottomStop />
        <EmailSignup />
        <BottomSticky zIndex={10}>
          <TabletHidden>
            <Feedback onSubmit={(data) => { submitFeedback(`/docs/home/`, data) }} />
          </TabletHidden>
        </BottomSticky>
        <BottomSticky horizontalAlign="right">
          <ScrollToTop />
        </BottomSticky>
      </Container>
    )}
  />
);
