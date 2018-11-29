import React from "react";
import { SiteData, Link, Head } from "react-static";
import styled from "styled-components";
import Container from './../components/Container'
import Header from './../components/ci/Header'
import CardContainer from './../components/ci/CardContainer'

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
      </Container>
    )}
  />
);
