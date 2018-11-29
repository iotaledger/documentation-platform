import { reloadRoutes } from "react-static/node";
import fs from "fs-extra";
import path from "path";
import React, { Component } from "react";
import { ServerStyleSheet } from "styled-components";
import chokidar from "chokidar";
import { getDocPages, buildMenuItems } from './buildList'

chokidar.watch("../docs").on("all", () => reloadRoutes());

const packageFile = "package.json"; // Point this to your package.json file
const repoName = "IOTA Documentation";
const repo = "iotaledger/documentation";
const repoURL = `https://github.com/${repo}`;

try {
  // eslint-disable-next-line
  process.env.REPO_VERSION = require(path.resolve(packageFile)).version;
} catch (err) {
  //
}

// These are the documentation pages. They can either use the `markdownSrc` to point
// to a markdown file, or they can use `component` to point to a react component
const docPages = getDocPages('docs')

// This is the side menu for the documentation section.
// You can nest items in `children` to create groups.
// If a group name has a `link` prop, it will also act as a link in addition to a header.
const menu = buildMenuItems('docs')

const readFile = src => fs.readFileSync(path.resolve(src), "utf8")

const fixReprismSyntaxHighlighting = content => content
  .replace(/```Python/g, '```python')
  .replace(/```c\+\+/g, '```cpp')
  .replace(/```proto/g, '```cpp')

// No need to touch any of this, unless you want to.
export default {
  getSiteData: () => ({
    menu,
    repo,
    repoURL,
    repoName
  }),
  getRoutes: () => [
    {
      path: "/",
      component: "src/containers/Home"
    },
    ...docPages.map(page => ({
      path: page.path,
      component: "src/containers/Doc",
      getData: async () => ({
        markdown: fixReprismSyntaxHighlighting(await readFile(page.markdownSrc)),
        editPath:
          repoURL +
          path.join(
            "/blob/master/",
            __dirname.split("/").pop(),
            page.markdownSrc
          ),
        title: page.title
      })
    })),
    {
      is404: true,
      component: "src/containers/404"
    }
  ],
  renderToHtml: (render, Comp, meta) => {
    try{
      const sheet = new ServerStyleSheet();
      const html = render(sheet.collectStyles(<Comp />));
      meta.styleTags = sheet.getStyleElement();
      return html;
    } catch (e) {
      console.log("ERROR", e);
    }
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700%7CMaterial+Icons"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
              integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
              crossorigin="anonymous"
            />
            {renderMeta.styleTags}
            <title>{repoName}</title>
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  },
};
