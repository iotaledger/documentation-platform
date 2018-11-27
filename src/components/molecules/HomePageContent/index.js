import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atoms/Link';
import Heading from '../../atoms/Heading';
import Text from '../../atoms/Text';

const HomePageContent = ({ id, className, content: { header, subheader, topics } }) => (
  <div id={id} className={`project ${className}`}>
    <Heading className="project__heading" level={2}>
      {header}
    </Heading>
    <Text className="project__subheading">
      {subheader}
    </Text>
    <div className="project-topics">
      {
        topics.map(topic =>
            <Link key={topic.header} href={topic.href} className="project-topic__link">
              <Text className="project-topic__heading text--level6">
                {topic.header}
              </Text>
              <Text className="project-topic__subheading" html>
                {topic.subheader}
              </Text>
            </Link>
        )
      }
    </div>
  </div>
);

HomePageContent.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.exact({
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
    topics: PropTypes.arrayOf(PropTypes.shape({
      header: PropTypes.string.isRequired,
      subheader: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })),
  }),
};

HomePageContent.defaultProps = {
  className: '',
};

export default HomePageContent;
