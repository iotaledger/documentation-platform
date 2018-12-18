import PropTypes from 'prop-types';
import React from 'react';
import ProjectTopics from './ProjectTopics';

class ProjectTopicsContainer extends React.Component {
  static propTypes = {
    content: PropTypes.arrayOf(
      PropTypes.shape({
        header: PropTypes.string.isRequired,
        subheader: PropTypes.string.isRequired,
        topics: PropTypes.arrayOf(
          PropTypes.shape({
            header: PropTypes.string.isRequired,
            subheader: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            bullet: PropTypes.oneOf(["none", "primary", "secondary"])
          })
        ).isRequired
      })
    )
  };

  render() {
    return (
      <div className="project__wrapper">
        {
          this.props.content.map((c, idx) =>
            <ProjectTopics key={idx} content={c} />
          )
        }
      </div>
    )
  }
}

export default ProjectTopicsContainer;
