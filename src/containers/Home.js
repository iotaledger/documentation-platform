import React from "react";
import { SiteData, Link, Head } from "react-static";
import styled from "styled-components";
import Container from './../components/Container'
import Header from './../components/ci/Header'
import CardContainer from './../components/ci/CardContainer'
import ProjectTopics from './../components/ci/ProjectTopics'


import logoImg from "../logo.png";

export default () => (
  <SiteData
    render={({ menu, repo, repoURL, repoName }) => (
      <Container>
        <Head>
          <title>Home | {repoName}</title>
        </Head>
        <Header />
        <CardContainer />
        <div style={{ padding: '0 40px' }}>
          <ProjectTopics />
        </div>
      </Container>
    )}
  />
);
