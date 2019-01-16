import PropTypes from 'prop-types';
import classNames from 'classnames';
import emoji from 'emoji-dictionary';
import 'prismjs/themes/prism.css';
import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import { highlight, loadLanguages } from 'reprism';
import bash from 'reprism/languages/bash';
import c from 'reprism/languages/c';
import cpp from 'reprism/languages/cpp';
import java from 'reprism/languages/java';
import javascript from 'reprism/languages/javascript';
import json from 'reprism/languages/json';
import jsx from 'reprism/languages/jsx';
import python from 'reprism/languages/python';
import { sanitizeHashId } from '../../../utils/paths';
import Heading from '../../atoms/Heading';
import HeadingLabel from '../../atoms/HeadingLabel';
import ProjectTopicsInner from '../../molecules/ProjectTopicsContainer/ProjectTopicsInner';
import Tabs from '../../molecules/Tabs';
import './markdown.css';

loadLanguages(jsx, bash, c, cpp, java, javascript, json, python);

class Markdown extends PureComponent {
    static propTypes = {
        source: PropTypes.string.isRequired,
        query: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            content: ''
        };

        this.tabContainers = [];
        this.projectTopicContainers = [];
        this.headingLabels = [];

        this.html = this.html.bind(this);
        this.textRenderer = this.textRenderer.bind(this);
        this.tableRenderer = this.tableRenderer.bind(this);
        this.tableCellRenderer = this.tableCellRenderer.bind(this);
        this.tableRowRenderer = this.tableRowRenderer.bind(this);
        this.replaceSearchQuery = this.replaceSearchQuery.bind(this);

        this.currentTable = undefined;
        this.currentTableRow = 0;
        this.currentTableHeaders = [];
    }

    componentDidMount() {
        let content = this.fixReprismSyntaxHighlighting(this.props.source);

        // Strip the h1 from the start of the content
        content = content.trim().replace(/(^# .*)/, '').trim();

        const tabMatches = this.findTabContainers(content);
        for (let i = 0; i < tabMatches.length; i++) {
            this.tabContainers.push(this.findTabs(tabMatches[i]));
            content = content.replace(tabMatches[i], `<tabs index="${i}"></tabs>`);
        }

        const projectTopicMatches = this.findProjectTopicContainers(content);
        for (let i = 0; i < projectTopicMatches.length; i++) {
            this.projectTopicContainers.push(this.findProjectTopics(projectTopicMatches[i]));
            content = content.replace(projectTopicMatches[i], `<project-topics index="${i}"></tabs>`);
        }

        const headingMatches = this.findHeadingLabels(content);
        for (let i = 0; i < headingMatches.length; i++) {
            content = content.replace(headingMatches[i], `<heading-label index="${i}"></heading-label>`);
        }

        content = this.replaceSearchQuery(content);

        this.setState({
            content
        });
    }

    fixReprismSyntaxHighlighting(content) {
        return content
            .replace(/```Python/g, '```python')
            .replace(/```c\+\+/g, '```cpp')
            .replace(/```proto/g, '```cpp')
            .replace(/```bash/g, '```shell');
    }

    replaceSearchQuery(content) {
        if (this.props.query) {
            const re = new RegExp(`(${this.props.query})`, 'gi');

            content = content.replace(re, '<query text="$1"/>');
        }

        return content;
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
        const re = /#### (.*)\n(\[.*\]\((.*)\))?([\S\s]*?)---/g;

        let match;
        do {
            match = re.exec(projectTopicContainer);
            if (match && match.length === 5) {
                let matchPrimary = /\*\*(.*)\*\* ####/g.exec(match[1]);
                if (matchPrimary && matchPrimary.length === 2) {
                    projectTopics.push({
                        bullet: 'primary',
                        name: matchPrimary[1],
                        description: match[4],
                        link: match[3]
                    });
                } else {
                    let matchSecondary = /__(.*)__ ####/g.exec(match[1]);
                    if (matchSecondary && matchSecondary.length === 2) {
                        projectTopics.push({
                            bullet: 'secondary',
                            name: matchSecondary[1],
                            description: match[4],
                            link: match[3]
                        });
                    } else {
                        let matchPlain = /(.*) ####/g.exec(match[1]);
                        if (matchPlain && matchPlain.length === 2) {
                            projectTopics.push({
                                bullet: 'none',
                                name: matchPlain[1],
                                description: match[4],
                                link: match[3]
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

        let match;
        do {
            match = re.exec(content);
            if (match && match.length === 2) {
                let matchPrimary = /\*\*(.*)\*\*/g.exec(match[1]);
                if (matchPrimary && matchPrimary.length === 2) {
                    this.headingLabels.push({ style: 'primary', content: matchPrimary[1] });
                    matches.push(match[0]);
                } else {
                    let matchSecondary = /__(.*)__/g.exec(match[1]);
                    if (matchSecondary && matchSecondary.length === 2) {
                        this.headingLabels.push({ style: 'secondary', content: matchSecondary[1] });
                        matches.push(match[0]);
                    }
                }
            }
        } while (match);

        return matches;
    }

    html(props) {
        if (props.value.startsWith('<tabs')) {
            const re = /<tabs index="(.*)">/;
            let match = re.exec(props.value);

            if (match && match.length === 2) {
                const index = parseInt(match[1], 10);
                const headers = this.tabContainers[index].map(tc => tc.title);
                const content = this.tabContainers[index].map((tc, idx) => (
                    <ReactMarkdown
                        key={idx}
                        source={tc.content}
                        renderers={{
                            text: this.textRenderer,
                            code: (props) => this.codeBlock(props, false),
                        }} />
                ));
                return (<Tabs headers={headers} contents={content} />);
            }
        } else if (props.value.startsWith('<project-topics')) {
            const re = /<project-topics index="(.*)">/;
            let match = re.exec(props.value);

            if (match && match.length === 2) {
                const index = parseInt(match[1], 10);
                return (<ProjectTopicsInner content={this.projectTopicContainers[index]} compressed={true} />);
            }
        } else if (props.value.startsWith('<heading-label')) {
            const re = /<heading-label index="(.*)">/;
            let match = re.exec(props.value);

            if (match && match.length === 2) {
                const index = parseInt(match[1], 10);
                const headingLabel = this.headingLabels[index];
                return (<HeadingLabel style={headingLabel.style}>{headingLabel.content}</HeadingLabel>);
            }
        } else if (props.value.startsWith('<a name')) {
            const re = /<a name="(.*)"/i;
            let match = re.exec(props.value);

            if (match && match.length === 2) {
                return (<a id={sanitizeHashId(match[1])}></a>);
            }
        } else if (props.value.startsWith('<query')) {
            const re = /<query text="(.*)"/i;
            let match = re.exec(props.value);

            if (match && match.length === 2) {
                return (<span className="search-keyword">{match[1]}</span>);
            }
        }

        // Do default html processing
        // https://github.com/rexxars/react-markdown/blob/b6caaba0437b00132d58337913e66a7d1bfb30ce/src/renderers.js#L100-L113
        if (props.skipHtml) {
            return null;
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
        const localProps = { ...props };
        if (localProps.href.startsWith('http')) {
            localProps.target = '_blank';
            localProps.rel = 'noopener noreferrer';
        } else {
            if (localProps.href.startsWith('#')) {
                // Make sure the tag is consistently named
                localProps.href = sanitizeHashId(localProps.href);
            } else {
                // For local links remove .md extension
                // and also de-escape space characters
                localProps.href = sanitizeHashId(localProps.href).replace(/.md$/i, '');
            }
        }
        return (
            <a  {...localProps} />
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
        );
    }

    inlineCodeBlock(props) {
        return (
            <div
                className="text text-inline--code markdown-code-inline"
                dangerouslySetInnerHTML={{ __html: props.value }} />
        );
    }

    textRenderer(props) {
        return props.children.replace(/:\w+:/gi, name => emoji.getUnicode(name));
    }

    tableRenderer(props) {
        const coreProps = this.getCoreProps(props);
        this.currentTableHeaders = [];
        this.currentTableRow = -1;
        if (props.columnAlignment.length > 3) {
            coreProps.className = 'table--compact';
        }
        return React.createElement('table', coreProps, props.children);
    }

    tableRowRenderer(props) {
        this.currentTableRow++;
        this.currentTableColumn = -1;
        return React.createElement('tr', this.getCoreProps(props), props.children);
    }

    tableCellRenderer(props) {
        const coreProps = this.getCoreProps(props);
        this.currentTableColumn++;
        let children = props.children;

        if (this.currentTableRow === 0) {
            this.currentTableHeaders[this.currentTableColumn] = props.children[0].props.children;
        } else {
            children = [
                React.createElement('span', { className: 'table-body-row-item--inline-header', key: 0 }, this.currentTableHeaders[this.currentTableColumn]),
                React.createElement('span', { key: 1}, children)
            ];
        }
        return React.createElement(
            props.isHeader ? 'th' : 'td',
            coreProps,
            children
        );
    }

    paragraph(props) {
        return (<div className="text-paragraph" {...props} />);
    }

    heading(props) {
        return (
            <React.Fragment>
                <Heading className='text--tertiary' level={props.level} id={sanitizeHashId(props.children[0].props.value)} {...props} />
            </React.Fragment>
        );
    }

    getCoreProps(props) {
        return props['data-sourcepos'] ? { 'data-sourcepos': props['data-sourcepos'] } : {};
    }

    render() {
        return (
            <div className="markdown__wrapper"><ReactMarkdown
                source={this.state.content}
                renderers={{
                    text: this.textRenderer,
                    code: (props) => this.codeBlock(props, true),
                    inlineCode: (props) => this.inlineCodeBlock(props),
                    html: this.html,
                    link: this.aLink,
                    paragraph: this.paragraph,
                    heading: this.heading,
                    table: this.tableRenderer,
                    tableRow: this.tableRowRenderer,
                    tableCell: this.tableCellRenderer
                }}
                skipHtml={false}
                escapeHtml={false} />
            </div>
        );
    }
}

export default Markdown;
