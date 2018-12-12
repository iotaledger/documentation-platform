import React from "react";
import { Head, SiteData } from "react-static";
import Feedback from '../components/molecules/Feedback';
import contentHomePage from '../contentHomePage.json';
import { submitFeedback } from "../utils/feedbackHelper";
import FloatingMenu from './../components/ci/FloatingMenu';
import Header from './../components/ci/Header';
import { HomePageLayout, maxWidthLayout } from './../components/ci/Layouts';
import Container from './../components/Container';
import EmailSignup from './../components/molecules/EmailSignup';
import Footer from './../components/molecules/Footer';
import CardContainer from './../components/molecules/HomePageCard';
import ProjectTopicsContainer from './../components/molecules/ProjectTopics';

export default () => (
  <SiteData
    render={({ menu, repo, repoURL, repoName }) => (
      <Container>
        <Head>
          <title>Home | {repoName}</title>
        </Head>
        <Header
          headerTitle='Developer Documentation'
          // headerTopLinks={contentHomePage.headerTopLinks}
          topTitles={contentHomePage.headerTopLinks}
          data={menu}
        />

        <div style={{ backgroundColor: '#f3f2f1' }}>
          <HomePageLayout style={{ backgroundColor: '#f3f2f1', width: '100%', minHeight: '482px', maxWidth: maxWidthLayout, margin: 'auto' }}>
            <div className="left-column">
            </div>
            <div className="right-column" style={{}}>
              <CardContainer content={contentHomePage.cards} />
            </div>
          </HomePageLayout>
        </div>
        <HomePageLayout style={{ maxWidth: maxWidthLayout, margin: 'auto' }}>
          <div className="left-column" >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <FloatingMenu data={menu} styles={{ position: 'fixed', top: '400px' }} />
              <Feedback
                styles={{ position: 'fixed', top: '400px', left: '20px' }}
                onSubmit={(data) => { submitFeedback(`/home`, data) }} />
            </div>
          </div>
          <div className="right-column" style={{ padding: '25px' }}>
            <ProjectTopicsContainer contentHomePage={contentHomePage} />
          </div>
        </HomePageLayout>
        <EmailSignup />
        <Footer content={contentHomePage.footer} />
      </Container>
    )}
  />
);
