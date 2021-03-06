import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import { Router, Route } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
import history from "./history";
import App from "./components/App";

ReactDOM.render(
  <Root>
    <Router history={history}>
      <LastLocationProvider>
      <Route path="/" component={App} />
      </LastLocationProvider>
    </Router>
  </Root>,
  document.getElementById("root")
);

