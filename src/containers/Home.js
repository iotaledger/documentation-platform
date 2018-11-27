import React from "react";
import { SiteData, Link, Head } from "react-static";
import styled from "styled-components";
import Button from '../components/atoms/Button';
import Select from '../components/atoms/Select';
import Card from '../components/molecules/HomePageCard';
import Content from '../components/molecules/HomePageContent';
import contentHomePage from '../contentHomePage.json';

import logoImg from "../assets/Logo.svg";
import card1 from "../assets/1.png";
import card2 from "../assets/2.png";
import card3 from "../assets/3.png";

const cards = [card1, card2, card3]

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 5vw;
  text-align: center;

  .backgrounds {
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    .background1,
    .background2 {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .background1 {
      transform: scale(3) rotate(50deg);
      transform-origin: top left;
      background: linear-gradient(
        to bottom,
        rgba(0, 120, 150, 0.05),
        transparent 15px
      );
    }

    .background2 {
      transform: scale(3) rotate(-25deg);
      transform-origin: top right;
      background: linear-gradient(
        to bottom,
        rgba(0, 120, 150, 0.05),
        transparent 15px
      );
    }
  }

  .github {
    margin-top: 2rem;
    width: 150px;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-align: stretch;
  justify-content: stretch;
  flex-wrap: wrap;
  width: 1000px;
  max-width: 95%;
`;

const CardElement = styled(Link)`
  flex: 1 1 150px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  background: ${props => props.background};
  color: white;
  border-radius: 5px;
  padding: 2vh 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.1s ease-out;
  white-space: nowrap;

  :hover {
    transform: translate(3px, -5px);
    box-shadow: -6px 10px 40px rgba(0, 0, 0, 0.2);
  }
`;

class Home extends React.Component {
  render() {
    return (
      <SiteData
        render={({ menu, repo, repoURL, repoName }) => (
          <Styles>
            <Head>
              <title>Home | {repoName}</title>
            </Head>
            <div className="backgrounds">
              <div className="background1" />
              <div className="background2" />
            </div>
            <img
              src={logoImg}
              alt=""
              style={{ display: "block", margin: "0 auto" }}
            />
            <h1>IOTA Documentation</h1>
            <h2>
              The most bestest blazingliest fastest freaking documentation site.
            </h2>
            <p>
              This awesome site was built to help you find product documentation across all IOTA's libraries and services.
            </p>
            <Cards>
              {
                Object.values(menu).map(({ name, versions }) =>
                  <CardElement key={name} to={{ pathname: `/docs/${name}/reference/${Object.keys(versions)[Object.keys(versions).length - 1]}/README`, state: { project: name }}} background="#ff6073">
                    {name}
                  </CardElement>
                )
              }
            </Cards>
            <Button onClick={() => console.log('button clicked')}>Hello</Button>
            <Select
              label='Please select'
              options={['one', 'two', 'three']}
              selectedOption={'two'}
              onChange={(value) => console.log('onChange', value)}
              required
            />
            <div className="cards__wrapper">
              {
                contentHomePage.cards.map((card, index) =>
                  <Card key={card.text} content={{...card, image: cards[index]}}/>
                )
              }
            </div>
            <div className="project__wrapper">
              {
                contentHomePage.content.map(content =>
                  <Content key={content.header} content={content} />
                )
              }
            </div>
            <div className="github">
              <Link to={repoURL}>
                <img
                  src={`https://img.shields.io/github/stars/${repo}.svg?style=social&label=Star`}
                  alt="Github Stars"
                />
              </Link>
            </div>
          </Styles>
        )}
      />
    )
  }
}

export default Home;
