import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

// Your top level component
import App from "./App";

// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== "undefined") {
  const target = document.querySelector("#root");

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render;

  // eslint-disable-next-line @typescript-eslint/ban-types
  const render = (Comp: Function): void => {
    renderMethod(
        <AppContainer>
            <Comp />
        </AppContainer>,
      target
    );
  };

  // Render!
  render(App);

  // Hot Module Replacement
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mod = module as any;
  if (mod?.hot) {
    mod.hot.accept("./App", () => {
      render(App);
    });
  }
}
