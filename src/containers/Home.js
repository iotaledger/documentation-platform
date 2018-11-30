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
        <Header
          headerTitle='Developer Documentation'
          topTitles={['IOTA.ORG', 'NEWS', 'WALLET', 'QUBIIC', 'ECOSYSTEM']}
        />
        {/*<Cards> these will be reserved for the left floating div
          {
            Object.values(menu).map(({ name, versions }) =>
              <CardElement key={name} to={{ pathname: `/docs/${name}/reference/${Object.keys(versions)[Object.keys(versions).length - 1]}/README`, state: { project: name }}} background="#ff6073">
                {name}
              </CardElement>
            )
          }
        </Cards>*/}
        <CardContainer />
        <div style={{ padding: '0 40px' }}>
          <ProjectTopics />
        </div>
      </Container>
    )}
  />
);
