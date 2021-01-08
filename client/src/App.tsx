import "iota-css-theme";
import React, { ReactNode } from "react";
import { Root, Routes } from "react-static";
import "./style.css";

class App extends React.Component {
    public render(): ReactNode {
        return (
            <Root>
                <React.Suspense fallback={<div />}>
                    <Routes path="*" />
                </React.Suspense>
            </Root>
        );
    }
}

export default App;
