import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atoms/Link';
import Heading from '../../atoms/Heading';
import Text from '../../atoms/Text';

const HomePageContent = ({ id, className, content: { header, subheader, topics } }) => (
  <div id={id} className={`home-page-content ${className}`}>
    <Heading className="home-page-content__heading" level={2}>
      {header}
    </Heading>
    <Text className="home-page-content__subheading">
      {subheader}
    </Text>
    <div className="home-page-content-topics">
      {
        topics.map(topic =>
            <div key={topic.header} className="home-page-content-topic__wrapper">
              <Text className="home-page-content-topic__heading text--level6">
                {topic.header}
              </Text>
              <Text className="home-page-content-topic__subheading" html>
                {topic.subheader}
              </Text>
            </div>
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
