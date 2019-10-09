import emoji from 'emoji-dictionary';
import GoogleMapReact from 'google-map-react';
import 'prismjs/themes/prism.css';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import ReactRouterPropTypes from 'react-router-prop-types';
import { highlight, loadLanguages } from 'reprism';
import bash from 'reprism/languages/bash';
import c from 'reprism/languages/c';
import cpp from 'reprism/languages/cpp';
import java from 'reprism/languages/java';
import javascript from 'reprism/languages/javascript';
import json from 'reprism/languages/json';
import jsx from 'reprism/languages/jsx';
import python from 'reprism/languages/python';
import logoSmall from '../../../assets/logo-small.svg';
import { copyToClipboard } from '../../../utils/clipboard';
import { sanitizeHashId } from '../../../utils/paths';
import Heading from '../../atoms/Heading';
import HeadingLabel from '../../atoms/HeadingLabel';
import MapMarker from '../../atoms/MapMarker';
import MarkdownCard from '../../atoms/MarkdownCard';
import MessageBox from '../../molecules/MessageBox';
import ProjectTopicsInner from '../../molecules/ProjectTopicsContainer/ProjectTopicsInner';
import Tabs from '../../molecules/Tabs';
import Feed from '../../organisms/Feed';
import './markdown.css';

loadLanguages(jsx, bash, c, cpp, java, javascript, json, python);

class Markdown extends PureComponent {
    static propTypes = {
        source: PropTypes.string.isRequired,
        query: PropTypes.string,
        highlights: PropTypes.arrayOf(PropTypes.string),
        apiEndpoint: PropTypes.string,
        googleMapsKey: PropTypes.string,
        history: ReactRouterPropTypes.history,
        onContentChanged: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            content: '',
            imageUrl: ''
        };

        this.tabContainers = [];
        this.projectTopicContainers = [];
        this.headingLabels = [];
        this.cards = [];
        this.messageBoxes = [];
        this.objects = [];

        this.html = this.html.bind(this);
        this.heading = this.heading.bind(this);
        this.textRenderer = this.textRenderer.bind(this);
        this.tableRenderer = this.tableRenderer.bind(this);
        this.tableCellRenderer = this.tableCellRenderer.bind(this);
        this.tableRowRenderer = this.tableRowRenderer.bind(this);
        this.replaceSearchQuery = this.replaceSearchQuery.bind(this);
        this.stripSearchQuery = this.stripSearchQuery.bind(this);
        this.codeBlock = this.codeBlock.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
        this.handleFeedLoaded = this.handleFeedLoaded.bind(this);
        this.imageRenderer = this.imageRenderer.bind(this);

        this.currentTable = undefined;
        this.currentTableRow = 0;
        this.currentTableHeaders = [];
        this.headingCounters = {};
        this.copyIdCounter = 0;
    }

    handleCopy(code, elemName) {
        copyToClipboard(code);

        document.getElementById(elemName).classList.toggle('markdown-code-copy-feedback--active', true);

        setTimeout(() => {
            document.getElementById(elemName).classList.toggle('markdown-code-copy-feedback--active', false);
        }, 2000);
    }

    componentDidMount() {
        this.highlights = [];
        this.headingCounters = {};
        if (this.props.highlights) {
            this.highlights = this.highlights.concat(this.props.highlights);
        }
        if (this.props.query) {
            if (this.highlights.indexOf(this.props.query) < 0) {
                this.highlights.push(this.props.query);
            }
        }

        let content = this.fixReprismSyntaxHighlighting(this.props.source);

        // Strip the h1 from the start of the content
        content = content.trim().replace(/(^# .*)/, '').trim();

        const markdownMatches = this.findMarkdownContainers(content);
        for (let i = 0; i < markdownMatches.length; i++) {
            content = content.replace(markdownMatches[i], `<markdown index="${i}"></markdown>`);
        }

        const tabMatches = this.findTabContainers(content);
        for (let i = 0; i < tabMatches.length; i++) {
            this.tabContainers.push(this.findTabs(tabMatches[i]));
            content = content.replace(tabMatches[i], `<tabs index="${i}"></tabs>`);
        }

        const projectTopicMatches = this.findProjectTopicContainers(content);
        for (let i = 0; i < projectTopicMatches.length; i++) {
            this.projectTopicContainers.push(this.findProjectTopics(projectTopicMatches[i]));
            content = content.replace(projectTopicMatches[i], `<project-topics index="${i}"></project-topics>`);
        }

        const headingMatches = this.findHeadingLabels(content);
        for (let i = 0; i < headingMatches.length; i++) {
            content = content.replace(headingMatches[i], `<heading-label index="${i}"></heading-label>`);
        }

        const cardMatches = this.findCards(content);
        for (let i = 0; i < cardMatches.length; i++) {
            content = content.replace(cardMatches[i], `<card index="${i}"></card>`);
        }

        const messageBoxMatches = this.findMessageBoxes(content);
        for (let i = 0; i < messageBoxMatches.length; i++) {
            content = content.replace(messageBoxMatches[i], `<message-box index="${i}"></message-box>`);
        }

        const objectMatches = this.findObjects(content);
        for (let i = 0; i < objectMatches.length; i++) {
            content = content.replace(objectMatches[i].content, `<${objectMatches[i].type} index="${i}"></${objectMatches[i].type}>`);
        }

        content = this.replaceSearchQuery(content);

        for (let i = 0; i < markdownMatches.length; i++) {
            content = content.replace(`<markdown index="${i}"></markdown>`, markdownMatches[i]);
        }

        this.setState({
            content
        });
    }

    componentDidUpdate() {
        this.highlights = [];
        this.headingCounters = {};
    }

    fixReprismSyntaxHighlighting(content) {
        return content
            .replace(/```Python/g, '```python')
            .replace(/```c\+\+/g, '```cpp')
            .replace(/```proto/g, '```cpp')
            .replace(/```bash/g, '```shell');
    }

    stripSearchQuery(content) {
        return content.replace(/<query text="(.*?)" \/>/g, '$1');
    }

    replaceSearchQuery(content, useSpan) {
        if (this.highlights.length > 0) {
            const re = new RegExp(`(^\\s|\\s$|\\S\\s|\\s\\S)(${this.highlights.join('|')})(^\\s|\\s$|\\S\\s|\\s\\S)`, 'gi');

            if (useSpan) {
                content = content.replace(re, '$1<span class="search-keyword">$2</span>$3');
            } else {
                content = content.replace(re, '$1<query text="$2" />$3');
            }
        }

        return content;
    }

    findMarkdownContainers(content) {
        const matches = [];
        const re = /^```markdown([\S\s]*?)```$/gm;

        let match;
        do {
            match = re.exec(content);
            if (match && match.length === 2) {
                matches.push(match[0]);
            }
        } while (match);

        return matches;
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
                        link: match[3].replace(/.md$/i, '')
                    });
                } else {
                    let matchSecondary = /__(.*)__ ####/g.exec(match[1]);
                    if (matchSecondary && matchSecondary.length === 2) {
                        projectTopics.push({
                            bullet: 'secondary',
                            name: matchSecondary[1],
                            description: match[4],
                            link: match[3].replace(/.md$/i, '')
                        });
                    } else {
                        let matchPlain = /(.*) ####/g.exec(match[1]);
                        if (matchPlain && matchPlain.length === 2) {
                            projectTopics.push({
                                bullet: 'none',
                                name: matchPlain[1],
                                description: match[4],
                                link: match[3].replace(/.md$/i, '')
                            });
                        }
                    }
                }
            }
        } while (match);

        return projectTopics;
    }

    findCards(content) {
        const matches = [];
        const re = /^-------------------------\s+!\[(.*?)\]\((.*?)\)\s+## \[(.*?)\]\((.*?)\)\s+([\S\s]*?)-------------------------$/gm;

        let match;
        do {
            match = re.exec(content);
            if (match && match.length === 6) {
                this.cards.push({
                    alt: match[1],
                    img: match[2],
                    title: match[3],
                    link: match[4],
                    content: match[5]
                });
                matches.push(match[0]);
            }
        } while (match);

        return matches;
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

    findMessageBoxes(content) {
        const matches = [];
        const re = /:::(success:|danger:|warning:|info:)(.+?)?(\n[\s\S]*?)?:::/gm;

        let match;
        do {
            match = re.exec(content);
            if (match && match.length === 4) {
                this.messageBoxes.push({
                    type: match[1].replace(':', ''),
                    title: match[2] && this.emojify(match[2].trim()),
                    content: match[3] && this.emojify(match[3].trim())
                });
                matches.push(match[0]);
            }
        } while (match);

        return matches;
    }

    findObjects(content) {
        const matches = [];
        const re = /¬¬¬\s\[(.*?)\]\s([\s\S]*?)\s¬¬¬/gm;

        let match;
        do {
            match = re.exec(content);
            if (match && match.length === 3) {
                if (match[1] === 'feed' || match[1] === 'map') {
                    this.objects.push(JSON.parse(match[2]));
                    matches.push({ type: match[1], content: match[0] });
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
                return (<ProjectTopicsInner content={this.projectTopicContainers[index]} compressed={true} highlights={this.highlights} />);
            }
        } else if (props.value.startsWith('<feed')) {
            const re = /<feed index="(.*)">/;
            let match = re.exec(props.value);

            if (match && match.length === 2) {
                const index = parseInt(match[1], 10);
                const feed = this.objects[index];
                return (<Feed
                    displayType={feed.displayType}
                    context={feed.context}
                    apiEndpoint={this.props.apiEndpoint}
                    googleMapsKey={this.props.googleMapsKey}
                    onLoaded={this.handleFeedLoaded}
                    history={this.props.history}
                />);
            }
        } else if (props.value.startsWith('<map')) {
            const re = /<map index="(.*)">/;
            let match = re.exec(props.value);

            if (match && match.length === 2) {
                const index = parseInt(match[1], 10);
                const map = this.objects[index];
                return (<div className="markdown-map">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: this.props.googleMapsKey }}
                        defaultCenter={{
                            lat: map.center.lat,
                            lng: map.center.lng
                        }}
                        defaultZoom={map.zoom}
                    >
                        {map.markers && map.markers.map((marker, idx) => (
                            <MapMarker lat={marker.lat} lng={marker.lng} key={idx}>
                                <img src={logoSmall} alt="IOTA" />
                                {marker.name}
                            </MapMarker>
                        ))}
                    </GoogleMapReact>
                </div>);
            }
        } else if (props.value.startsWith('<heading-label')) {
            const re = /<heading-label index="(.*)">/;
            let match = re.exec(props.value);

            if (match && match.length === 2) {
                const index = parseInt(match[1], 10);
                const headingLabel = this.headingLabels[index];
                return (<HeadingLabel style={headingLabel.style} id={sanitizeHashId(headingLabel.content)}>{headingLabel.content}</HeadingLabel>);
            }
        } else if (props.value.startsWith('<card')) {
            const re = /<card index="(.*)">/;
            let match = re.exec(props.value);

            if (match && match.length === 2) {
                const index = parseInt(match[1], 10);
                const card = this.cards[index];
                return (<MarkdownCard
                    id={sanitizeHashId(card.title)}
                    alt={card.alt}
                    img={card.img}
                    title={card.title}
                    link={card.link.replace(/.md$/i, '')}
                >{this.boldify(card.content)}</MarkdownCard>);
            }
        } else if (props.value.startsWith('<message-box')) {
            const re = /<message-box index="(.*)">/;
            let match = re.exec(props.value);

            if (match && match.length === 2) {
                const index = parseInt(match[1], 10);
                const messageBox = this.messageBoxes[index];
                return (<MessageBox type={messageBox.type} title={messageBox.title} content={this.linkify(messageBox.content)} />);
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
        } else if (props.value.startsWith('<img')) {
            const re = /<img src="(.*?)"\s*(?:alt="(.*?)")?/i;
            let match = re.exec(props.value);

            if (match && (match.length === 2 || match.length === 3)) {
                return this.imageRenderer({
                    src: match[1],
                    alt: match[2] || ''
                });
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

    linkify(content) {
        const output = [];
        const re = /\[(.*?)\]\((.*?)\)/;
        let match;
        do {
            match = re.exec(content);
            if (match && match.length === 3) {
                output.push((<span style={{ whiteSpace: 'pre-line' }} key={output.length}>{content.substring(0, match.index)}</span>));
                output.push(this.aLink({
                    children: match[1],
                    href: match[2],
                    key: output.length
                }));
                content = content.substring(match.index + match[0].length);
            } else {
                output.push((<span style={{ whiteSpace: 'pre-line' }} key={output.length}>{content}</span>));
            }
        } while (match);

        return output.map(o => this.messageBoxCode(o));
    }

    messageBoxCode(item) {
        if (item.type === 'span') {
            const output = [];
            const re = /(?:`+)([\s\S]*?)(?:`+)/;
            let content = item.props.children;
            let match;
            do {
                match = re.exec(content);
                if (match && match.length === 2) {
                    output.push((<span style={{ whiteSpace: 'pre-line' }} key={output.length}>{this.boldify(content.substring(0, match.index))}</span>));
                    output.push(this.inlineCodeBlock({ value: match[1] }, output.length));
                    content = content.substring(match.index + match[0].length);
                } else {
                    output.push((<span style={{ whiteSpace: 'pre-line' }} key={output.length}>{this.boldify(content)}</span>));
                }
            } while (match);
            return output;
        }

        return item;
    }

    aLink(props) {
        const localProps = { ...props };
        if (localProps.href.startsWith('javascript:void(0)')) {
            if (localProps.children && localProps.children.length > 0) {
                if (localProps.children[0].props && localProps.children[0].props.value) {
                    localProps.href = localProps.children[0].props.value;
                    localProps.target = '_blank';
                    localProps.rel = 'noopener noreferrer';
                }
            }
        } else if (localProps.href.startsWith('http') || localProps.href.startsWith('iota')) {
            localProps.target = '_blank';
            localProps.rel = 'noopener noreferrer';
        } else {
            if (localProps.href.startsWith('#')) {
                // Make sure the tag is consistently named
                localProps.href = sanitizeHashId(localProps.href);
            } else {
                // For local links remove .md extension
                const anchorParts = localProps.href.split('#');
                localProps.href = sanitizeHashId(anchorParts[0], true).replace(/.md$/i, '');
                if (anchorParts.length === 2) {
                    localProps.href += `#${sanitizeHashId(anchorParts[1], false, true)}`;
                }
            }
        }
        return (
            <a {...localProps} />
        );
    }

    codeBlock(props, wrap) {
        let html = props.value;
        try {
            html = highlight(html, props.language);
        } catch (err) {
            html = `<pre className="reprism markup language-markup"><code>${html}</code></pre>`;
        }
        html = this.replaceSearchQuery(html, true);

        if (wrap) {
            this.copyIdCounter++;
            const elemName = `copy-feedback-${this.copyIdCounter}`;
            return (
                <div className='markdown-code__wrapper'>
                    <span className='markdown-code-copy--wrapper'>
                        <span className='markdown-code-copy-feedback' id={elemName}>Copied</span>
                        <button className='markdown-code--copy' onClick={() => this.handleCopy(props.value, elemName)} />
                    </span>
                    <div className='markdown-code' dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            );
        } else {
            return (
                <div
                    className='markdown-code'
                    dangerouslySetInnerHTML={{ __html: html }} />
            );
        }
    }

    inlineCodeBlock(props, key) {
        return (
            <div
                className="text text-inline--code markdown-code-inline"
                dangerouslySetInnerHTML={{ __html: props.value }}
                key={key} />
        );
    }

    textRenderer(props) {
        return this.emojify(props.children);
    }

    emojify(item) {
        return item.replace(/:\w+:/gi, name => emoji.getUnicode(name) || name);
    }

    boldify(content) {
        const output = [];
        const re = /\*\*(.*?)\*\*/;
        let match;
        do {
            match = re.exec(content);
            if (match && match.length === 2) {
                output.push((<span key={output.length}>{content.substring(0, match.index)}</span>));
                output.push((<strong key={output.length}>{match[1]}</strong>));
                content = content.substring(match.index + match[0].length);
            } else {
                output.push((<span key={output.length}>{content}</span>));
            }
        } while (match);
        return output;
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
            this.currentTableHeaders[this.currentTableColumn] = props.children.length > 0 ? props.children[0].props.children : '';
        } else {
            children = [
                React.createElement('span', { className: 'table-body-row-item--inline-header', key: 0 }, this.currentTableHeaders[this.currentTableColumn]),
                React.createElement('span', { key: 1 }, children)
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
        let id = sanitizeHashId(this.stripSearchQuery(props.children.map(a => a.props.value).join('')), false, true);
        if (this.headingCounters[id] === undefined) {
            this.headingCounters[id] = -1;
        }
        this.headingCounters[id]++;
        if (this.headingCounters[id] > 0) {
            id = `${id}_${this.headingCounters[id]}`;
        }
        return (
            <Heading className='text--tertiary' level={props.level} id={id} {...props} />
        );
    }

    imageRenderer(props) {
        return (<img src={props.src} alt={props.alt || ''} onClick={(e) => {
            this.setState({ imageUrl: e.target.src });
            document.body.classList.toggle('no-scroll', true);
        }} />);
    }

    getCoreProps(props) {
        return props['data-sourcepos'] ? { 'data-sourcepos': props['data-sourcepos'] } : {};
    }

    handleFeedLoaded(itemCount) {
        if (this.props.onContentChanged) {
            this.props.onContentChanged(itemCount);
        }
    }

    render() {
        return (
            <div className="markdown__wrapper">
                <ReactMarkdown
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
                        tableCell: this.tableCellRenderer,
                        image: this.imageRenderer,
                        img: this.imageRenderer
                    }}
                    skipHtml={false}
                    escapeHtml={false} />
                {this.state.imageUrl && (
                    <React.Fragment>
                        <div className="image-popup--overlay" />
                        <div className="image-popup" onClick={() => {
                            this.setState({ imageUrl: undefined });
                            document.body.classList.toggle('no-scroll', false);
                        }}>
                            <img src={this.state.imageUrl} />
                        </div>
                    </React.Fragment>
                )}
            </div>
        );
    }
}

export default Markdown;
