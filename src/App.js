import React from "react";
import { Router, onLoading } from "react-static";
import { hot } from "react-hot-loader";
import nprogress from "nprogress";
import { loadLanguages } from "reprism";
import Routes from "react-static-routes";

import "nprogress/nprogress.css";
import "react-smackdown/themes/smackdown-light.css";
import "iota-css-theme";
import "./style.css";

import jsx from "reprism/languages/jsx";
import bash from "reprism/languages/bash";
import c from "reprism/languages/c";
import cpp from "reprism/languages/cpp";
import java from "reprism/languages/java";
import javascript from "reprism/languages/javascript";
import json from "reprism/languages/json";
import python from "reprism/languages/python";

loadLanguages(jsx, bash, c, cpp, java, javascript, json, python);

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
        <Routes />
      </Router>
    );
  }
}

export default hot(module)(App);
