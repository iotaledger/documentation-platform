import 'iota-css-theme';
import React from 'react';
import { Root, Routes } from 'react-static';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css';

class App extends React.Component {
    render() {
        return (
            <Root>
                <React.Suspense fallback={<div/>}>
                    <Router>
                        <Routes path="*" />
                    </Router>
                </React.Suspense>
            </Root>
        );
    }
}

export default App;
