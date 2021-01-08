import emoji from "emoji-dictionary";
import GoogleMapReact from "google-map-react";
import * as Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-css";
import "prismjs/components/prism-docker";
import "prismjs/components/prism-elixir";
import "prismjs/components/prism-go";
import "prismjs/components/prism-groovy";
import "prismjs/components/prism-http";
import "prismjs/components/prism-java";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-objectivec";
import "prismjs/components/prism-powershell";
import "prismjs/components/prism-python";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-yaml";
import "prismjs/themes/prism.css";
import React, { PureComponent, ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import logoSmall from "../../../assets/logo-small.svg";
import { copyToClipboard } from "../../../utils/clipboard";
import { sanitizeHashId } from "../../../utils/paths";
import Heading from "../../atoms/Heading";
import HeadingLabel from "../../atoms/HeadingLabel";
import MapMarker from "../../atoms/MapMarker";
import MarkdownCard from "../../atoms/MarkdownCard";
import MessageBox from "../../molecules/MessageBox";
import ProjectTopicsInner from "../../molecules/ProjectTopicsContainer/ProjectTopicsInner";
import Tabs from "../../molecules/Tabs";
import "./markdown.css";
import { MarkdownProps } from "./MarkdownProps";
import { MarkdownState } from "./MarkdownState";

class Markdown extends PureComponent<MarkdownProps, MarkdownState> {
    private readonly tabContainers: {
        title: string;
        content: string;
    }[][];

    private readonly projectTopicContainers: {
        name: string;
        link: string;
        description: string;
        bullet?: "none" | "primary" | "secondary";
    }[][];

    private readonly headingLabels: {
        style: string;
        content: string;
    }[];

    private readonly cards: {
        alt: string;
        img: string;
        title: string;
        link: string;
        content: string;
    }[];

    private readonly messageBoxes: {
        type: string;
        title: string;
        content: string;
    }[];

    private readonly objects: {
        center: {
            lat: number;
            lng: number;
        };
        zoom: number;
        markers: {
            lat: number;
            lng: number;
            name: string;
        }[];
    }[];

    private readonly sups: {
        content: string;
    }[];

    private readonly lists: {
        items: string[];
    }[];

    private highlights: string[];

    private currentTableRow: number;

    private currentTableColumn: number;

    private currentTableHeaders: string[];

    private headingCounters: { [id: string]: number };

    private copyIdCounter: number;

    constructor(props: MarkdownProps) {
        super(props);

        this.state = {
            content: "",
            imageUrl: ""
        };

        this.tabContainers = [];
        this.projectTopicContainers = [];
        this.headingLabels = [];
        this.cards = [];
        this.messageBoxes = [];
        this.objects = [];
        this.sups = [];
        this.lists = [];

        this.currentTableRow = 0;
        this.currentTableColumn = 0;
        this.currentTableHeaders = [];
        this.headingCounters = {};
        this.copyIdCounter = 0;
    }

    public componentDidMount(): void {
        this.buildContent();
    }

    public componentDidUpdate(prevProps: MarkdownProps): void {
        if (this.props.source !== prevProps.source || this.props.isDeprecated !== prevProps.isDeprecated) {
            this.buildContent();
        }
    }

    public render(): ReactElement {
        return (
            <div className="markdown__wrapper">
                <ReactMarkdown
                    source={this.state.content}
                    plugins={[gfm]}
                    renderers={{
                        text: props => this.textRenderer(props),
                        code: props => this.codeBlock(props, true),
                        inlineCode: props => this.inlineCodeBlock(props),
                        html: props => this.html(props),
                        link: props => this.aLink(props),
                        paragraph: props => this.paragraph(props),
                        heading: props => this.heading(props),
                        table: props => this.tableRenderer(props),
                        tableRow: props => this.tableRowRenderer(props),
                        tableCell: props => this.tableCellRenderer(props),
                        image: props => this.imageRenderer(props),
                        img: props => this.imageRenderer(props)
                    }}
                    skipHtml={false as never}
                    escapeHtml={false}
                    disallowedTypes={[]}
                />
                {this.state.imageUrl && (
                    <React.Fragment>
                        <div className="image-popup--overlay" />
                        <div
                            className="image-popup" onClick={() => {
                                this.setState({ imageUrl: undefined });
                                document.body.classList.toggle("no-scroll", false);
                            }}
                        >
                            <img src={this.state.imageUrl} />
                        </div>
                    </React.Fragment>
                )}
            </div>
        );
    }

    private buildContent(): void {
        this.highlights = [];
        this.headingCounters = {};
        if (this.props.highlights) {
            this.highlights = this.highlights.concat(this.props.highlights);
        }
        if (this.props.query) {
            if (!this.highlights.includes(this.props.query)) {
                this.highlights.push(this.props.query);
            }
        }

        let content = this.fixPrismSyntaxHighlighting(this.props.source);

        // Strip the h1 from the start of the content
        content = content.trim().replace(/(^# .*)/, "")
            .trim();

        if (this.props.isDeprecated) {
            content = `> *This content is deprecated, please read more relevant content.*\n\n${content}`;
        }

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

        const supMatches = this.findSups(content);
        for (let i = 0; i < supMatches.length; i++) {
            content = content.replace(supMatches[i], `<sups index="${i}"></sup>`);
        }

        const listMatches = this.findLists(content);
        for (let i = 0; i < listMatches.length; i++) {
            content = content.replace(listMatches[i], `<list index="${i}"></list>`);
        }

        const messageBoxMatches = this.findMessageBoxes(content);
        for (let i = 0; i < messageBoxMatches.length; i++) {
            content = content.replace(messageBoxMatches[i], `<message-box index="${i}"></message-box>`);
        }

        const objectMatches = this.findObjects(content);
        for (let i = 0; i < objectMatches.length; i++) {
            content = content.replace(
                objectMatches[i].content,
                `<${objectMatches[i].type} index="${i}"></${objectMatches[i].type}>`
            );
        }

        content = this.replaceSearchQuery(content);

        for (let i = 0; i < markdownMatches.length; i++) {
            content = content.replace(`<markdown index="${i}"></markdown>`, markdownMatches[i]);
        }

        this.setState({
            content
        });
    }

    private fixPrismSyntaxHighlighting(content: string): string {
        return content.replace(/```gradle/g, "```groovy");
    }

    private stripSearchQuery(content: string): string {
        return content.replace(/<query text="(.*?)" \/>/g, "$1");
    }

    private replaceSearchQuery(content: string, useSpan?: boolean): string {
        if (this.highlights.length > 0) {
            const re = new RegExp(
                `(^\\s|\\s$|\\S\\s|\\s\\S)(${this.highlights.join("|")})(^\\s|\\s$|\\S\\s|\\s\\S)`,
                "gi"
            );

            content = useSpan
                ? content.replace(re, "$1<span class=\"search-keyword\">$2</span>$3")
                : content.replace(re, "$1<query text=\"$2\" />$3");
        }

        return content;
    }

    private findMarkdownContainers(content: string): string[] {
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

    private findTabContainers(content: string): string[] {
        const matches = [];
        const re = /^-{20}$([\S\s]*?)^-{20}$/gm;

        let match;
        do {
            match = re.exec(content);
            if (match && match.length === 2) {
                matches.push(match[0]);
            }
        } while (match);

        return matches;
    }

    private findTabs(tabContainer: string): {
        title: string;
        content: string;
    }[] {
        const tabs: {
            title: string;
            content: string;
        }[] = [];

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

    private findProjectTopicContainers(content: string): string[] {
        const matches = [];
        const re = /^-{15}$([\S\s]*?)^-{15}$/gm;

        let match;
        do {
            match = re.exec(content);
            if (match && match.length === 2) {
                matches.push(match[0]);
            }
        } while (match);

        return matches;
    }

    private findProjectTopics(projectTopicContainer: string): {
        bullet: "none" | "primary" | "secondary";
        name: string;
        description: string;
        link: string;
    }[] {
        const projectTopics: {
            bullet: "none" | "primary" | "secondary";
            name: string;
            description: string;
            link: string;
        }[] = [];
        const re = /#### (.*)\n(\[.*]\((.*)\))?([\S\s]*?)---/g;

        let match;
        do {
            match = re.exec(projectTopicContainer);
            if (match && match.length === 5) {
                const matchPrimary = /\*\*(.*)\*\* ####/g.exec(match[1]);
                if (matchPrimary && matchPrimary.length === 2) {
                    projectTopics.push({
                        bullet: "primary",
                        name: matchPrimary[1],
                        description: match[4],
                        link: match[3].replace(/.md$/i, "")
                    });
                } else {
                    const matchSecondary = /__(.*)__ ####/g.exec(match[1]);
                    if (matchSecondary && matchSecondary.length === 2) {
                        projectTopics.push({
                            bullet: "secondary",
                            name: matchSecondary[1],
                            description: match[4],
                            link: match[3].replace(/.md$/i, "")
                        });
                    } else {
                        const matchPlain = /(.*) #{4}/g.exec(match[1]);
                        if (matchPlain && matchPlain.length === 2) {
                            projectTopics.push({
                                bullet: "none",
                                name: matchPlain[1],
                                description: match[4],
                                link: match[3].replace(/.md$/i, "")
                            });
                        }
                    }
                }
            }
        } while (match);

        return projectTopics;
    }

    private findCards(content: string): string[] {
        const matches = [];
        const re = /^-{25}\s+!\[(.*?)]\((.*?)\)\s+#{2} \[(.*?)]\((.*?)\)\s+([\S\s]*?)-{25}$/gm;

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

    private findHeadingLabels(content: string): string[] {
        const matches = [];
        const re = /### (.*) ###/g;

        let match;
        do {
            match = re.exec(content);
            if (match && match.length === 2) {
                const matchPrimary = /\*\*(.*)\*\*/g.exec(match[1]);
                if (matchPrimary && matchPrimary.length === 2) {
                    this.headingLabels.push({ style: "primary", content: matchPrimary[1] });
                    matches.push(match[0]);
                } else {
                    const matchSecondary = /__(.*)__/g.exec(match[1]);
                    if (matchSecondary && matchSecondary.length === 2) {
                        this.headingLabels.push({ style: "secondary", content: matchSecondary[1] });
                        matches.push(match[0]);
                    }
                }
            }
        } while (match);

        return matches;
    }

    private findMessageBoxes(content: string): string[] {
        const matches = [];
        const re = /:::(success:|danger:|warning:|info:)(.+?)?(\n[\S\s]*?)?:::/gm;

        let match;
        do {
            match = re.exec(content);
            if (match && match.length === 4) {
                this.messageBoxes.push({
                    type: match[1].replace(":", ""),
                    title: match[2] && this.emojify(match[2].trim()),
                    content: match[3] && this.emojify(match[3].trim())
                });
                matches.push(match[0]);
            }
        } while (match);

        return matches;
    }

    private findSups(content: string): string[] {
        const matches = [];
        const re = /<sup>(.*?)<\/sup>/gm;

        let match;
        do {
            match = re.exec(content);
            if (match && match.length === 2) {
                this.sups.push({
                    content: match[1]
                });
                matches.push(match[0]);
            }
        } while (match);

        return matches;
    }

    private findLists(content: string): string[] {
        const matches = [];
        const re = /<ul>(.*?)<\/ul>/gm;

        let match;
        do {
            match = re.exec(content);
            if (match && match.length === 2) {
                this.lists.push({
                    items: this.findListItems(match[1])
                });
                matches.push(match[0]);
            }
        } while (match);

        return matches;
    }

    private findListItems(content: string): string[] {
        const re = /<li>(.*?)<\/li>/gm;

        let match;
        const listItems = [];
        do {
            match = re.exec(content);
            if (match && match.length === 2) {
                listItems.push(match[1]);
            }
        } while (match);

        return listItems;
    }

    private findObjects(content: string): {
        content: string;
        type: string;
    }[] {
        const matches = [];
        const re = /¬¬¬\s\[(.*?)]\s([\S\s]*?)\s¬¬¬/gm;

        let match;
        do {
            match = re.exec(content);
            if (match && match.length === 3) {
                if (match[1] === "map") {
                    this.objects.push(JSON.parse(match[2]));
                    matches.push({ type: match[1], content: match[0] });
                }
            }
        } while (match);

        return matches;
    }

    private html(props: { value: string; skipHtml: boolean; isBlock: boolean; escapeHtml: boolean }): ReactElement {
        if (props.value.startsWith("<tabs")) {
            const re = /<tabs index="(.*)">/;
            const match = re.exec(props.value);

            if (match && match.length === 2) {
                const index = Number.parseInt(match[1], 10);
                const headers = this.tabContainers[index].map(tc => tc.title);
                const content = this.tabContainers[index].map((tc, idx) => (
                    <ReactMarkdown
                        key={idx}
                        plugins={[gfm]}
                        source={tc.content}
                        renderers={{
                            text: props2 => this.textRenderer(props2),
                            code: props2 => this.codeBlock(props2, false)
                        }}
                    />
                ));
                return (<Tabs headers={headers} contents={content} />);
            }
        } else if (props.value.startsWith("<project-topics")) {
            const re = /<project-topics index="(.*)">/;
            const match = re.exec(props.value);

            if (match && match.length === 2) {
                const index = Number.parseInt(match[1], 10);
                return (
                    <ProjectTopicsInner
                        content={this.projectTopicContainers[index]}
                        compressed={true}
                        highlights={this.highlights}
                    />
                );
            }
        } else if (props.value.startsWith("<map")) {
            const re = /<map index="(.*)">/;
            const match = re.exec(props.value);

            if (match && match.length === 2) {
                const index = Number.parseInt(match[1], 10);
                const map = this.objects[index];
                return (
                    <div className="markdown-map">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: this.props.googleMapsKey }}
                            defaultCenter={{
                                lat: map.center.lat,
                                lng: map.center.lng
                            }}
                            defaultZoom={map.zoom}
                        >
                            {map.markers?.map((marker, idx) => (
                                <MapMarker lat={marker.lat} lng={marker.lng} key={idx}>
                                    <img src={logoSmall} alt="IOTA" />
                                    {marker.name}
                                </MapMarker>
                            ))}
                        </GoogleMapReact>
                    </div>
                );
            }
        } else if (props.value.startsWith("<heading-label")) {
            const re = /<heading-label index="(.*)">/;
            const match = re.exec(props.value);

            if (match && match.length === 2) {
                const index = Number.parseInt(match[1], 10);
                const headingLabel = this.headingLabels[index];
                return (
                    <HeadingLabel style={headingLabel.style} id={sanitizeHashId(headingLabel.content)}>
                        {headingLabel.content}
                    </HeadingLabel>
                );
            }
        } else if (props.value.startsWith("<card")) {
            const re = /<card index="(.*)">/;
            const match = re.exec(props.value);

            if (match && match.length === 2) {
                const index = Number.parseInt(match[1], 10);
                const card = this.cards[index];
                return (
                    <MarkdownCard
                        id={sanitizeHashId(card.title)}
                        alt={card.alt}
                        img={card.img}
                        title={card.title}
                        link={card.link.replace(/.md$/i, "")}
                    >
                        {this.boldify(card.content)}
                    </MarkdownCard>
                );
            }
        } else if (props.value.startsWith("<message-box")) {
            const re = /<message-box index="(.*)">/;
            const match = re.exec(props.value);

            if (match && match.length === 2) {
                const index = Number.parseInt(match[1], 10);
                const messageBox = this.messageBoxes[index];
                return (
                    <MessageBox
                        type={messageBox.type}
                        title={messageBox.title}
                        content={this.linkify(messageBox.content)}
                    />
                );
            }
        } else if (props.value.startsWith("<sups")) {
            const re = /<sups index="(.*)">/;
            const match = re.exec(props.value);

            if (match && match.length === 2) {
                const index = Number.parseInt(match[1], 10);
                const sup = this.sups[index];
                return (<sup>{sup.content}</sup>);
            }
        } else if (props.value.startsWith("<list")) {
            const re = /<list index="(.*)">/;
            const match = re.exec(props.value);

            if (match && match.length === 2) {
                const index = Number.parseInt(match[1], 10);
                const list = this.lists[index];
                return (<ul>{list.items.map((i, idx) => <li key={idx}>{i}</li>)}</ul>);
            }
        } else if (props.value.startsWith("<a name")) {
            const re = /<a name="(.*)"/i;
            const match = re.exec(props.value);

            if (match && match.length === 2) {
                return (<a id={sanitizeHashId(match[1])} />);
            }
        } else if (props.value.startsWith("<query")) {
            const re = /<query text="(.*)"/i;
            const match = re.exec(props.value);

            if (match && match.length === 2) {
                return (<span className="search-keyword">{match[1]}</span>);
            }
        } else if (props.value.startsWith("<img")) {
            const re = /<img src="(.*?)"\s*(?:alt="(.*?)")?/i;
            const match = re.exec(props.value);

            if (match && (match.length === 2 || match.length === 3)) {
                return this.imageRenderer({
                    src: match[1],
                    alt: match[2] || ""
                });
            }
        }

        // Do default html processing
        // rexxars/react-markdown/blob/b6caaba0437b00132d58337913e66a7d1bfb30ce/src/renderers.js#L100-L113
        if (props.skipHtml) {
            return null;
        }

        const tag = props.isBlock ? "div" : "span";
        if (props.escapeHtml) {
            const comp = React.Fragment || tag;
            return React.createElement(comp, null, props.value);
        }

        const nodeProps = { dangerouslySetInnerHTML: { __html: props.value } };
        return React.createElement(tag, nodeProps);
    }

    private linkify(content: string): (ReactElement | ReactElement[])[] {
        const output = [];
        const re = /\[(.*?)]\((.*?)\)/;
        let match;
        do {
            match = re.exec(content);
            if (match && match.length === 3) {
                output.push((
                    <span
                        style={{ whiteSpace: "pre-line" }}
                        key={output.length}
                    >
                        {content.slice(0, Math.max(0, match.index))}
                    </span>
                ));
                output.push(this.aLink({
                    children: match[1],
                    href: match[2],
                    key: output.length
                }));
                content = content.slice(Math.max(0, match.index + match[0].length));
            } else {
                output.push((<span style={{ whiteSpace: "pre-line" }} key={output.length}>{content}</span>));
            }
        } while (match);

        return output.map(o => this.messageBoxCode(o));
    }

    private messageBoxCode(item: ReactElement): ReactElement | ReactElement[] {
        if (item.type === "span") {
            const output = [];
            const re = /`+([\S\s]*?)`+/;
            let content = item.props.children;
            let match;
            do {
                match = re.exec(content);
                if (match && match.length === 2) {
                    output.push((
                        <span
                            style={{ whiteSpace: "pre-line" }}
                            key={output.length}
                        >
                            {this.boldify(content.slice(0, Math.max(0, match.index)))}
                        </span>
                    ));
                    output.push(this.inlineCodeBlock({ value: match[1] }, output.length));
                    content = content.slice(Math.max(0, match.index + match[0].length));
                } else {
                    output.push((
                        <ReactMarkdown
                            key={output.length}
                            source={content.replace(/\n\n/g, "<br/><br/>")}
                            plugins={[gfm]}
                            skipHtml={false as never}
                            escapeHtml={false}
                            renderers={{
                                html: props => this.html(props)
                            }}
                            disallowedTypes={[]}
                        />
                    ));
                }
            } while (match);

            return output;
        }

        return item;
    }

    private aLink(props: {
        value?: string;
        href?: string;
        children?: ReactElement[] | string;
        key?: number;
        target?: string;
        rel?: string;
    }): ReactElement {
        const localProps = { ...props };
        // eslint-disable-next-line no-script-url
        if (localProps.href.startsWith("javascript:void(0)")) {
            if (typeof (localProps.children) !== "string" &&
                localProps.children && localProps.children.length > 0) {
                if (localProps.children[0].props?.value) {
                    localProps.href = localProps.children[0].props.value;
                    localProps.target = "_blank";
                    localProps.rel = "noopener noreferrer";
                }
            }
        } else if (localProps.href.startsWith("http") || localProps.href.startsWith("iota")) {
            localProps.target = "_blank";
            localProps.rel = "noopener noreferrer";
        } else if (localProps.href.startsWith("#")) {
            // Make sure the tag is consistently named
            localProps.href = sanitizeHashId(localProps.href);
        } else {
            // For local links remove .md extension
            const anchorParts = localProps.href.split("#");
            localProps.href = sanitizeHashId(anchorParts[0], true).replace(/.md$/i, "");
            if (anchorParts.length === 2) {
                localProps.href += `#${sanitizeHashId(anchorParts[1], false, true)}`;
            }
        }
        return (
            <a {...localProps} />
        );
    }

    private codeBlock(props: { value: string; language: string }, wrap: boolean): ReactElement {
        let html = props.value;
        let renderedCode = false;
        try {
            if (Prism.languages[props.language]) {
                const highlight = Prism.highlight(html, Prism.languages[props.language], props.language);
                html = `<pre className="language-${props.language
                    }"><code className="language-${props.language}">${highlight}</code></pre>`;
                renderedCode = true;
            } else {
                // eslint-disable-next-line no-console
                console.error(`Unrecognized language for syntax highlighter ${props.language}`);
            }
        } catch {
            // Don't care what the error was just render as markup instead
        }
        if (!renderedCode) {
            html = `<pre className="language-markup"><code className="language-${props.language}">${html}</code></pre>`;
        }

        html = this.replaceSearchQuery(html, true);

        if (wrap) {
            this.copyIdCounter++;
            const elemName = `copy-feedback-${this.copyIdCounter}`;
            return (
                <div className="markdown-code__wrapper">
                    <span className="markdown-code-copy--wrapper">
                        <span className="markdown-code-copy-feedback" id={elemName}>Copied</span>
                        <button
                            type="button"
                            className="markdown-code--copy"
                            onClick={() => this.handleCopy(props.value, elemName)}
                        />
                    </span>
                    <div className="markdown-code" dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            );
        }
        return (
            <div
                className="markdown-code"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        );
    }

    private inlineCodeBlock(props: { value: string }, key?: number): ReactElement {
        return (
            <div
                className="text text-inline--code markdown-code-inline"
                dangerouslySetInnerHTML={{ __html: props.value }}
                key={key}
            />
        );
    }

    private textRenderer(props: { value: string; children: ReactElement[] }): ReactElement {
        if (props.value) {
            props.value = this.emojify(props.value);
        }
        if (props.children) {
            props.children = props.children.map(c => this.textRenderer(c.props));
        }
        return React.createElement("span", this.getCoreProps(props), props.children);
    }

    private emojify(item: string): string {
        if (!item) {
            return null;
        }
        return item.replace(/:\w+:/gi, name => emoji.getUnicode(name) || name);
    }

    private boldify(content: string): ReactElement[] {
        const output = [];
        const re = /\*\*(.*?)\*\*/;
        let match;
        do {
            match = re.exec(content);
            if (match && match.length === 2) {
                output.push((<span key={output.length}>{content.slice(0, Math.max(0, match.index))}</span>));
                output.push((<strong key={output.length}>{match[1]}</strong>));
                content = content.slice(Math.max(0, match.index + match[0].length));
            } else {
                output.push((<span key={output.length}>{content}</span>));
            }
        } while (match);
        return output;
    }

    private tableRenderer(props: { columnAlignment: string; children: ReactElement[] }): ReactElement {
        const coreProps = this.getCoreProps(props);
        this.currentTableHeaders = [];
        this.currentTableRow = -1;
        if (props.columnAlignment.length > 3) {
            coreProps.className = "table--compact";
        }
        return React.createElement("table", coreProps, props.children);
    }

    private tableRowRenderer(props: { children: ReactElement }): ReactElement {
        this.currentTableRow++;
        this.currentTableColumn = -1;
        return React.createElement("tr", this.getCoreProps(props), props.children);
    }

    private tableCellRenderer(props: { isHeader: boolean; children: ReactElement[] }): ReactElement {
        const coreProps = this.getCoreProps(props);
        this.currentTableColumn++;
        let children = props.children;

        if (this.currentTableRow === 0) {
            this.currentTableHeaders[this.currentTableColumn] =
                props.children.length > 0 ? props.children[0].props.children : "";
        } else {
            children = [
                React.createElement(
                    "span",
                    { className: "table-body-row-item--inline-header", key: 0 },
                    this.currentTableHeaders[this.currentTableColumn]),
                React.createElement("span", { key: 1 }, children)
            ];
        }
        return React.createElement(
            props.isHeader ? "th" : "td",
            coreProps,
            children
        );
    }

    private paragraph(props: { [key: string]: unknown }): ReactElement {
        return (<div className="text-paragraph" {...props} />);
    }

    private heading(props: { level: number; value: string; children: ReactElement[] }): ReactElement {
        let id = sanitizeHashId(
            this.stripSearchQuery(props.children.map(a => a.props.value as string).join("")), false, true);
        if (this.headingCounters[id] === undefined) {
            this.headingCounters[id] = -1;
        }
        this.headingCounters[id]++;
        if (this.headingCounters[id] > 0) {
            id = `${id}_${this.headingCounters[id]}`;
        }
        return (
            <Heading className="text--tertiary" level={props.level} id={id} {...props} />
        );
    }

    private imageRenderer(props: { src: string; alt: string }): ReactElement {
        return (
            <img
                src={props.src} alt={props.alt || ""} onClick={e => {
                    this.setState({ imageUrl: (e.target as HTMLImageElement).src });
                    document.body.classList.toggle("no-scroll", true);
                }}
            />
        );
    }

    private getCoreProps(props: { [id: string]: unknown }): { [id: string]: unknown } {
        return props["data-sourcepos"] ? { "data-sourcepos": props["data-sourcepos"] } : {};
    }

    private handleCopy(code: string, elemName: string): void {
        copyToClipboard(code);

        document.querySelector(`#${elemName}`).classList.toggle("markdown-code-copy-feedback--active", true);

        setTimeout(() => {
            document.querySelector(`#${elemName}`).classList.toggle("markdown-code-copy-feedback--active", false);
        }, 2000);
    }
}

export default Markdown;
