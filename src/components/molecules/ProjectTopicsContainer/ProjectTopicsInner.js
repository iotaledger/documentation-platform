import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Link from '../../atoms/Link';

class ProjectTopicsInner extends React.Component {
  static propTypes = {
    topics: PropTypes.arrayOf(PropTypes.shape({
      header: PropTypes.string.isRequired,
      subheader: PropTypes.string.isRequired,
      href: PropTypes.string,
      bullet: PropTypes.oneOf(["none", "primary", "secondary"])
    })).isRequired,
    compressed: PropTypes.bool
  };

  render() {
    return (
      <div className={
        classNames(
          'project-topics',
          { 'project-topics__compressed': this.props.compressed }
        )
      }>
        {
          this.props.topics.map((topic, idx) =>
            <React.Fragment key={idx}>
              {topic.href && (
                  <Link href={topic.href} className="project-topic__link">
                    <span className={
                      classNames(
                        'project-topic__heading',
                        'text--level6',
                        { 'project-topic__primary-bullet': topic.bullet === "primary" },
                        { 'project-topic__secondary-bullet': topic.bullet === "secondary" }
                      )
                    }>
                      {topic.header}
                    </span>
                    <span className="project-topic__subheading" dangerouslySetInnerHTML={{ __html: topic.subheader }} />
                  </Link>
                )
              }
              {!topic.href && (
                  <div className="project-topic__link">
                    <span className={
                      classNames(
                        'project-topic__heading',
                        'text--level6',
                        { 'project-topic__primary-bullet': topic.bullet === "primary" },
                        { 'project-topic__secondary-bullet': topic.bullet === "secondary" }
                      )
                    }>
                      {topic.header}
                    </span>
                    <span className="project-topic__subheading" dangerouslySetInnerHTML={{ __html: topic.subheader }} />
                  </div>
                )
              }
            </React.Fragment>
          )}
      </div>
    )
  }
}

export default ProjectTopicsInner;
