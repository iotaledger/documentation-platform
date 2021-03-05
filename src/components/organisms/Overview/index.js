import React from 'react';
import { createProjectLinks, parseProjectUrl } from '../../../utils/projects';
import ProjectsPropTypes from '../../../utils/projectsPropTypes';
import Heading from '../../atoms/Heading';

class Overview extends React.Component {
    static propTypes = {
        projects: ProjectsPropTypes.isRequired,
    };

    constructor(props) {
        super(props);


        const real_projects = [
            {
                name: "Access",
                link: "/docs/iota-access/1.0/overview",
                description: ""
            },
            {
                name: "Identity",
                link: "http://identity.docs.iots.org/",
                description: ""
            },
            {
                name: "Stronghold",
                link: "http://stronghold.docs.iota.org/",
                description: ""
            },
            {
                name: "Client",
                link: "https://client-lib.docs.iota.org",
                description: ""
            },
            {
                name: "Wallet",
                link: "https://wallet-lib.docs.iota.org",
                description: ""
            },
            {
                name: "Smart Contracts",
                link: "https://iscp.docs.iota.org",
                description: ""
            },
            {
                name: "Streams",
                link: "/docs/iota-streams/1.0/overview",
                description: ""
            },
            {
                name: "HORNET",
                link: "https://gohornet.github.io/hornet",
                description: ""
            },
            {
                name: "Bee",
                link: "https://bee.docs.iota.org",
                description: ""
            },
            {
                name: "goShimmer",
                link: "https://goshimmer.docs.iota.org",
                description: ""
            },

        ];
        
        const projectLinks = createProjectLinks(this.props.projects);
        console.log("projectLinks", projectLinks)

        let dynamicSections = [{
            heading: 'Developer Docs',
            links: projectLinks
        }];

        this.state = {
            realProjects: real_projects,
            projectLinks: createProjectLinks(this.props.projects)
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(urlOrProjectFolder) {
        if (urlOrProjectFolder.startsWith('http')) {
            window.open(urlOrProjectFolder, '_blank');
        } else {
            this.props.history.push(this.state.projectLinks.find(pl => pl.folder === urlOrProjectFolder).link);
        }
        this.setState({ currentProject: urlOrProjectFolder });
    }

    render() {
        return (
            <div className="overview">
                <h2 className="heading project_heading">Overview</h2>
                <div className="overview__wrapper">
                {
                    this.state.realProjects.map((c, idx) =>
                        <div className="overview__item">
                            <a href={c.link} target="_blank">{ c.name }</a>
                        </div>
                    )
                }
            </div>
            </div>
        );
    }
}

export default Overview;
