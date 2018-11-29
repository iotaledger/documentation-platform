import React from 'react'
import styled, { css } from 'styled-components'
import logo from './../../assets/Logo.svg'

class ProjectTopics extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div className="project__wrapper">
      <div className="project">
      	<h2 className="heading project__heading">IOTA Basics</h2>
      	<span className="text project__subheading">Learn about the basic ideas and concepts around IOTA</span>
      	<div className="project-topics">
      		<a target="_blank" href="https://iota.org" rel="noopener noreferrer" className="link project-topic__link">
      			<span className="text project-topic__heading text--level6">Introduction</span>
      			<span className="text project-topic__subheading">Learn about the basic ideas and concepts around IOTA and etc</span>
      		</a>
      		<a target="_blank" href="https://iota.org" rel="noopener noreferrer" className="link project-topic__link">
      			<span className="text project-topic__heading text--level6">Seeds, Private Keys &amp; Accounts</span>
      			<span className="text project-topic__subheading">Learn about the basic ideas and concepts around IOTA and etc</span>
      		</a>
      		<a target="_blank" href="https://iota.org" rel="noopener noreferrer" className="link project-topic__link">
      			<span className="text project-topic__heading text--level6">Transactions</span>
      			<span className="text project-topic__subheading">Learn about the basic ideas and concepts around IOTA and etc</span>
      		</a>
      		<a target="_blank" href="https://iota.org" rel="noopener noreferrer" className="link project-topic__link">
      			<span className="text project-topic__heading text--level6">Networks</span>
      			<span className="text project-topic__subheading">Learn about the basic ideas and concepts around IOTA and etc</span>
      		</a>
      		<a target="_blank" href="https://iota.org" rel="noopener noreferrer" className="link project-topic__link">
      			<span className="text project-topic__heading text--level6">Support</span>
      			<span className="text project-topic__subheading">Learn about the basic ideas and concepts around IOTA and etc</span>
      		</a>
      	</div>
      </div>
    </div>)
  }
}

export default ProjectTopics
