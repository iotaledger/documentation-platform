import React from "react";
import { Router, onLoading } from "react-static";
import styled, { injectGlobal } from "styled-components";
import { hot } from "react-hot-loader";
import nprogress from "nprogress";
import { loadLanguages } from "reprism";
//
import Routes from "react-static-routes";

import "nprogress/nprogress.css";
import "react-smackdown/themes/smackdown-light.css";
import "iota-css-theme";

import jsx from "reprism/languages/jsx";
import bash from "reprism/languages/bash";
import c from "reprism/languages/c";
import cpp from "reprism/languages/cpp";
import java from "reprism/languages/java";
import javascript from "reprism/languages/javascript";
import json from "reprism/languages/json";
import python from "reprism/languages/python";

loadLanguages(jsx, bash, c, cpp, java, javascript, json, python);

injectGlobal`
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 16px;
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }
  * {
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
  }
  #root {
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: #108db8;
  }

  img {
    max-width: 100%;
  }

  pre, code {
    user-select: text;
  }

  pre {
    font-size: 14px;
    border-radius: 5px;
  }

  code.code-inline {
    background: rgba(0,0,0,.05);
    padding: 2px 5px;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,.05);
    font-size: .8em;
    line-height: 1.5;
  }

  .react-syntax-highlighter-line-number {
    pointer-events: none;
  }

  .sidebar {
    .content {
      hr {
        height: 0.25em;
        padding: 0;
        margin: 24px 0;
        background-color: #e1e4e8;
        border: 0;
      }

      table {
        font-size: 16px;
        line-height: 1.5;
        border-color: grey;
        border-spacing: 0;
        border-collapse: collapse;
        margin-top: 0;
        margin-bottom: 16px;

        thead {
          display: table-header-group;
          vertical-align: middle;
          border-color: inherit;
        }

        tr {
          background-color: #fff;
          border-top: 1px solid #c6cbd1;

          &:nth-child(2n) {
            background-color: #f6f8fa;
          }
        }

        th, td {
          padding: 6px 13px;
          border: 1px solid #dfe2e5;
        }

        th {
          font-weight: 600;
        }
      }

      .search-keyword {
        background-color: yellow;
      }

      .erratum-text {
        color: #ce312d;
      }
    }
  }
`;

const AppStyles = styled.div`
  min-height: 100vh;
`;

class App extends React.Component {
  componentDidMount() {
    onLoading(loading => {
      if (loading) {
        nprogress.start();
      } else {
        nprogress.done();
      }
    });
  }
  render() {
    return (
      <Router>
        <AppStyles>
          <Routes />
        </AppStyles>
      </Router>
    );
  }
}

export default hot(module)(App);
