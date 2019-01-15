import PropTypes from 'prop-types';
import React from 'react';
import ProjectTopics from './ProjectTopics';

class ProjectTopicsContainer extends React.Component {
    static propTypes = {
        content: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                links: PropTypes.arrayOf(
                    PropTypes.shape({
                        name: PropTypes.string.isRequired,
                        link: PropTypes.string.isRequired,
                        description: PropTypes.string.isRequired,
                    })
                ).isRequired
            })).isRequired
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
        );
    }
}

export default ProjectTopicsContainer;
