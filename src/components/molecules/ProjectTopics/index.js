import React from 'react'
import ProjectTopics from './ProjectTopics'

const ProjectTopicsContainer = ({ contentHomePage }) => (
  <div className="project__wrapper">
    {
      contentHomePage.content.map(content =>
        <ProjectTopics key={content.header} content={content} />
      )
    }
  </div>
)

export default ProjectTopicsContainer
