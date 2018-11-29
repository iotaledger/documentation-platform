import React from 'react'
import styled, { css } from 'styled-components'
import iotaIntroImg from '../../assets/Images/1.png'
import gettingStartImg from '../../assets/Images/2.png'
import nextSetp from '../../assets/Images/3.png'


class CardContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<section className="cards-container">
      <div className="cards-container__caption">
          <span className="cards-container__text">New to IOTA?</span>
      </div>

      <div className="card">
        <img className="card__image" src={iotaIntroImg} alt="IOTA intro" />
        <a href="#" className="card__label text text--level5">What is IOTA?</a>
      </div>
      <div className="card">
        <img className="card__image" src={gettingStartImg} alt="IOTA intro" />
        <a href="#" className="card__label text text--level5">Getting Started</a>
      </div>
      <div className="card">
        <img className="card__image" src={nextSetp} alt="IOTA intro" />
        <a href="#" className="card__label text text--level5">Next Steps</a>
      </div>
    </section>)
  }
}

export default CardContainer
