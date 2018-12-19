import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-static';

class TreeMenu extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        header: PropTypes.string,
        link: PropTypes.string
      }).isRequired
    ),
    highlightedItem: PropTypes.string
  };

  constructor(props) {
    super(props)

    this.state = {
      sections: this.buildSections(this.props.data)
    };
  }

  buildSections(data) {
    const sections = [];
    let inSection;

    for (let i = 0; i < data.length; i++) {
      const nameParts = data[i].name.split("/");
      if (nameParts.length === 1) {
        sections.push({
          type: "section-link",
          link: data[i].link,
          name: data[i].name
        })
        inSection = undefined;
      } else {
        const currentSection = inSection ? inSection.name : "";
        if (nameParts[0] !== currentSection) {
          inSection = {
            type: "section-header",
            name: nameParts[0],
            items: []
          }
          sections.push(inSection);
        }
        inSection.items.push({
          name: nameParts.slice(1).join("/"),
          link: data[i].link
        });
      }
    }

    return sections;
  }

  render() {
    const { sections } = this.state;
    return (<div className="tree-menu">
      {sections.map((section, idx) => (
        <React.Fragment key={idx}>
          {section.type === "section-link" && (
            <h3
              className={
                classNames(
                  'tree-menu__section-title',
                  { 'tree-menu__section-title--selected': this.props.highlightedItem === section.link }
                )
              }><Link to={section.link}>{section.name}</Link></h3>
          )}
          {section.type === "section-header" && (
            <React.Fragment>
              <h3 className="tree-menu__section-title">{section.name}</h3>
              <ul className="tree-menu__section">
                {section.items.map((item, idx2) => (
                  <li
                    key={idx2}
                    className={
                      classNames(
                        'tree-menu__section-item',
                        { 'tree-menu__section-item--selected': this.props.highlightedItem === item.link }
                      )
                    }
                  ><Link to={item.link}>{item.name}</Link></li>
                ))}
              </ul>
            </React.Fragment>
          )}
        </React.Fragment>
      ))}
    </div>)
  }
}
export default TreeMenu
