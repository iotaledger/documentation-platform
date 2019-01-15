import PropTypes from 'prop-types';
import React from 'react';
import Heading from '../../atoms/Heading';
import Text from '../../atoms/Text';
import ProjectTopicsInner from './ProjectTopicsInner';

class ProjectTopics extends React.Component {
    static propTypes = {
        content: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            links: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    link: PropTypes.string.isRequired,
                    description: PropTypes.string.isRequired,
                })
            ).isRequired
        }).isRequired
    };

    render() {
        return (
            <div className="project" id={this.props.content.name.toLowerCase().replace(/ /g, '_')}>
                <Heading className="project__heading" level={2}>
                    {this.props.content.name}
                </Heading>
                <Text className="project__subheading">
                    {this.props.content.description}
                </Text>
                <ProjectTopicsInner content={this.props.content.links} />
            </div>
        );
    }
}

export default ProjectTopics;
