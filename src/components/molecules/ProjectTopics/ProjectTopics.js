import PropTypes from 'prop-types';
import React from 'react';
import Heading from '../../atoms/Heading';
import Text from '../../atoms/Text';
import ProjectTopicsInner from './ProjectTopicsInner';

class ProjectTopics extends React.Component {
  static propTypes = {
    content: PropTypes.shape({
      header: PropTypes.string.isRequired,
      subheader: PropTypes.string.isRequired,
      topics: PropTypes.arrayOf(PropTypes.shape({
        header: PropTypes.string.isRequired,
        subheader: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        bullet: PropTypes.oneOf(["none", "primary", "secondary"])
      })).isRequired
    })
  };

  render() {
    const { header, subheader, topics} = this.props.content;

    return (
      <div className="project">
        {header && (
          <Heading className="project__heading" level={2}>
            {header}
          </Heading>
        )}
        {subheader && (
          <Text className="project__subheading">
            {subheader}
          </Text>
        )}
        <ProjectTopicsInner topics={topics} />
      </div>
    )
  }
}

export default ProjectTopics;
