import React from 'react'
import styled, { css } from 'styled-components'
import ProjectTopics from './ProjectTopics'

class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div className="project__wrapper">
              {
                this.props.contentHomePage.content.map(content =>
                  <ProjectTopics key={content.header} content={content} />
                )
              }
    </div>)
  }
}
 export default Card
