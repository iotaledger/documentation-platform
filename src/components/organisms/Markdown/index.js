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
import Tabs from '../../molecules/Tabs';
import "./markdown.css";

loadLanguages(jsx, bash, c, cpp, java, javascript, json, python);

class Markdown extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    }

    this.tabContainers = [];

    this.html = this.html.bind(this);
  }

  findTabContainers(content) {
    const tabContainers = [];
    const re = /<tabs>([\S\s]*?)<\/tabs>/g;

    let match;
    do {
      match = re.exec(content);
      if (match && match.length === 2) {
        tabContainers.push(match[1]);
      }
    } while (match);

    return tabContainers;
  }

  findTabs(tabContainer) {
    const tabs = [];
    const re = /<tab title="(.*)">([\S\s]*?)<\/tab>/g;

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

  componentDidMount() {
    const tabContainers = this.findTabContainers(this.props.source);
    let content = this.props.source;

    for (let i = 0; i < tabContainers.length; i++) {
      this.tabContainers.push(this.findTabs(tabContainers[i]));
      content = content.replace(`<tabs>${tabContainers[i]}</tabs>`, `<tabs index="${i}"></tabs>`)
    }

    this.setState({
      content
    })
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
    } else if (props.value.startsWith("<blockquote")) {
      const re = /<blockquote>([\S\s]*?)<\/blockquote>/;
      let match = re.exec(props.value);

      if (match && match.length === 2) {
        return (
          <div dangerouslySetInnerHTML={{ __html: `<blockquote>${match[1].trim().replace(/\n/g, "<br/>")}</blockquote>` }} />
        )
      }
    }

    return (
      <div dangerouslySetInnerHTML={{ __html: props.value }} />
    )
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
