import 'iota-css-theme';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import React from 'react';
import { hot } from 'react-hot-loader';
import { onLoading, Router } from 'react-static';
import Routes from 'react-static-routes';
import './style.css';

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
