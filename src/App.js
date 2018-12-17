import React from "react";
import { Router, onLoading } from "react-static";
import { hot } from "react-hot-loader";
import nprogress from "nprogress";
import Routes from "react-static-routes";

import "nprogress/nprogress.css";
import "iota-css-theme";
import "./style.css";

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
