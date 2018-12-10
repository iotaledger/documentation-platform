import React from "react";
import { SiteData, Link, Head } from "react-static";
import styled from "styled-components";
import Container from './../components/Container'
import Header from './../components/ci/Header'
import Footer from './../components/molecules/Footer'
import EmailSignup from './../components/molecules/EmailSignup'
import ProjectTopicsContainer from './../components/molecules/ProjectTopics'
import CardContainer from './../components/molecules/HomePageCard'
import { HomePageLayout } from './../components/ci/Layouts'
import FloatingMenu from './../components/ci/FloatingMenu'
import contentHomePage from '../contentHomePage.json';
import { maxWidthLayout } from './../components/ci/Layouts'

/*
background-color: red;
width: 280%;
margin-left: -100%;
height: 100px;
*/
import logoImg from "../logo.png";

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
        />

        <div style={{backgroundColor: '#f3f2f1'}}>
        <HomePageLayout style={{backgroundColor: '#f3f2f1', width: '100%', minHeight: '482px', maxWidth: maxWidthLayout, margin: 'auto'}}>
              <div className="left-column">
              </div>
              <div className="right-column" style={{}}>
                  <CardContainer content={contentHomePage.cards} />
              </div>
        </HomePageLayout>
        </div>
        <HomePageLayout style={{ maxWidth: maxWidthLayout, margin: 'auto' }}>
          <div className="left-column" >
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <FloatingMenu data={menu} styles={{ position: 'fixed', top: '400px'}} />
            </div>
          </div>
          <div className="right-column" style={{ padding: '25px' }}>
            <ProjectTopicsContainer contentHomePage={contentHomePage}  />
          </div>
        </HomePageLayout>
        <EmailSignup />
        <Footer content={contentHomePage.footer} />
      </Container>
    )}
  />
);
