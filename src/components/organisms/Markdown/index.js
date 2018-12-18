import classNames from 'classnames';
import emoji from 'emoji-dictionary';
import "prismjs/themes/prism.css";
import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-static';
import { highlight, loadLanguages } from 'reprism';
import bash from "reprism/languages/bash";
import c from "reprism/languages/c";
import cpp from "reprism/languages/cpp";
import java from "reprism/languages/java";
import javascript from "reprism/languages/javascript";
import json from "reprism/languages/json";
import jsx from "reprism/languages/jsx";
import python from "reprism/languages/python";
import Heading from '../../atoms/Heading';
import HeadingLabel from '../../atoms/HeadingLabel';
import Tabs from '../../molecules/Tabs';
import "./markdown.css";
import ProjectTopicsContainer from '../../molecules/ProjectTopics';
import ProjectTopicsInner from '../../molecules/ProjectTopics/ProjectTopicsInner';

loadLanguages(jsx, bash, c, cpp, java, javascript, json, python);

class Markdown extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    }

    this.tabContainers = [];
    this.projectTopicContainers = [];
    this.headingLabels = [];

    this.html = this.html.bind(this);
  }

  componentDidMount() {
    let content = this.props.source;

    const tabMatches = this.findTabContainers(this.props.source);
    for (let i = 0; i < tabMatches.length; i++) {
      this.tabContainers.push(this.findTabs(tabMatches[i]));
      content = content.replace(tabMatches[i], `<tabs index="${i}"></tabs>`)
    }

    const projectTopicMatches = this.findProjectTopicContainers(this.props.source);
    for (let i = 0; i < projectTopicMatches.length; i++) {
      this.projectTopicContainers.push(this.findProjectTopics(projectTopicMatches[i]));
      content = content.replace(projectTopicMatches[i], `<project-topics index="${i}"></tabs>`)
    }

    const headingMatches = this.findHeadingLabels(this.props.source);
    for (let i = 0; i < headingMatches.length; i++) {
      content = content.replace(headingMatches[i], `<heading-label index="${i}"></heading-label>`)
    }

    this.setState({
      content
    })
  }

  findTabContainers(content) {
    const matches = [];
    const re = /^--------------------$([\S\s]*?)^--------------------$/gm;

    let match;
    do {
      match = re.exec(content);
      if (match && match.length === 2) {
        matches.push(match[0]);
      }
    } while (match);

    return matches;
  }

  findTabs(tabContainer) {
    const tabs = [];
    const re = /### (.*)([\S\s]*?)---/g;

    let match;
    do {
      match = re.exec(tabContainer);
      if (match && match.length === 3) {
        tabs.push({
          title: match[1],
          content: match[2]
        });
      }
    } while (match);

    return tabs;
  }

  findProjectTopicContainers(content) {
    const matches = [];
    const re = /^---------------$([\S\s]*?)^---------------$/gm;

    let match;
    do {
      match = re.exec(content);
      if (match && match.length === 2) {
        matches.push(match[0]);
      }
    } while (match);

    return matches;
  }

  findProjectTopics(projectTopicContainer) {
    const projectTopics = [];
    const re = /#### (.*)([\S\s]*?)---/g;

    let match;
    do {
      match = re.exec(projectTopicContainer);
      if (match && match.length === 3) {
        let matchPrimary = /\*\*(.*)\*\* ####/g.exec(match[1]);
        if (matchPrimary && matchPrimary.length === 2) {
          projectTopics.push({ 
            bullet: "primary",
            header: matchPrimary[1],
            subheader: match[2] 
          });
        } else {
          let matchSecondary = /__(.*)__ ####/g.exec(match[1]);
          if (matchSecondary && matchSecondary.length === 2) {
            projectTopics.push({ 
              bullet: "secondary",
              header: matchSecondary[1],
              subheader: match[2] 
            });
          } else {
            let matchPlain = /(.*) ####/g.exec(match[1]);
            if (matchPlain && matchPlain.length === 2) {
                projectTopics.push({ 
                bullet: "none",
                header: matchPlain[1],
                subheader: match[2] 
              });
            }
          }
        }
      }
    } while (match);

    return projectTopics;
  }

  findHeadingLabels(content) {
    const matches = [];
    const re = /### (.*) ###/g;
    const rePrimary = /\*\*(.*)\*\*/g;
    const reSecondary = /__(.*)__/g;

    let match;
    do {
      match = re.exec(content);
      if (match && match.length === 2) {
        let matchPrimary = rePrimary.exec(match[1]);
        if (matchPrimary && matchPrimary.length === 2) {
          this.headingLabels.push({ style: "primary", content: matchPrimary[1] });
          matches.push(match[0]);
        } else {
          let matchSecondary = reSecondary.exec(match[1]);
          if (matchSecondary && matchSecondary.length === 2) {
            this.headingLabels.push({ style: "secondary", content: matchSecondary[1] });
            matches.push(match[0]);
          }
        }
      }
    } while (match);

    return matches;
  }

  html(props) {
    if (props.value.startsWith("<tabs")) {
      const re = /<tabs index="(.*)">/;
      let match = re.exec(props.value);

      if (match && match.length === 2) {
        const index = parseInt(match[1], 10);
        const headers = this.tabContainers[index].map(tc => tc.title);
        const content = this.tabContainers[index].map(tc => (
          <ReactMarkdown
            source={tc.content}
            renderers={{
              text: this.textRenderer,
              code: (props) => this.codeBlock(props, false),
            }} />
        ));
        return (<Tabs headers={headers} contents={content} />);
      }
    } else if (props.value.startsWith("<project-topics")) {
      const re = /<project-topics index="(.*)">/;
      let match = re.exec(props.value);

      if (match && match.length === 2) {
        const index = parseInt(match[1], 10);
        return (<ProjectTopicsInner topics={this.projectTopicContainers[index]} compressed={true}/>);
      }
    } else if (props.value.startsWith("<heading-label")) {
      const re = /<heading-label index="(.*)">/;
      let match = re.exec(props.value);

      if (match && match.length === 2) {
        const index = parseInt(match[1], 10);
        const headingLabel = this.headingLabels[index];
        return (<HeadingLabel style={headingLabel.style}>{headingLabel.content}</HeadingLabel>);
      }
    }

    // Do default html processing
    // https://github.com/rexxars/react-markdown/blob/b6caaba0437b00132d58337913e66a7d1bfb30ce/src/renderers.js#L100-L113
    if (props.skipHtml) {
      return null
    }

    const tag = props.isBlock ? 'div' : 'span';
    if (props.escapeHtml) {
      const comp = React.Fragment || tag;
      return React.createElement(comp, null, props.value);
    }

    const nodeProps = { dangerouslySetInnerHTML: { __html: props.value } };
    return React.createElement(tag, nodeProps);
  }

  aLink(props) {
    const to = props.href.startsWith('/') ? props.href.replace('.md', '') : props.href;

    return (
      <Link to={to}>{props.children[0].props.value}</Link>
    );
  }

  codeBlock(props, wrap) {
    let html;
    try {
      html = highlight(props.value, props.language);
    } catch (err) {
      html = `<pre className="reprism markup language-markup"><code>${props.value}</code></pre>`;
    }

    return (
      <div
        className={
          classNames(
            { 'markdown-code': wrap }
          )
        }
        dangerouslySetInnerHTML={{ __html: html }} />
    )
  }

  inlineCodeBlock(props) {
    return (
      <div
        className="text text-inline--code markdown-code-inline"
        dangerouslySetInnerHTML={{ __html: props.value }} />
    )
  }

  textRenderer(props) {
    return props.children.replace(/:\w+:/gi, name => emoji.getUnicode(name))
  }

  paragraph(props) {
    return (<div className="text-paragraph" {...props} />);
  }

  heading(props) {
    return (
      <Heading className='text--tertiary' level={props.level}>{props.children[0].props.value}</Heading>
    );
  }

  render() {
    return <ReactMarkdown
      source={this.state.content}
      renderers={{
        text: this.textRenderer,
        code: (props) => this.codeBlock(props, true),
        inlineCode: (props) => this.inlineCodeBlock(props),
        html: this.html,
        link: this.aLink,
        paragraph: this.paragraph,
        heading: this.heading
      }}
      skipHtml={false}
      escapeHtml={false} />
  }
}

export default Markdown
