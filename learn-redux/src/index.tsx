import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "!style-loader!css-loader!sass-loader!./styles/style.scss";
import { Main } from "./stories/pages/Main/Main";
import { PhotoGrid } from "./stories/widgets/PhotoGrid/PhotoGrid";
import { Single } from "./stories/widgets/Single/Single";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Main>
          <Switch>
            <Route path="/view/:postCode">
              <Single />
            </Route>
            <Route path="/">
              <PhotoGrid />
            </Route>
          </Switch>
        </Main>
      </Router>
    </Provider>
  );
}

// Doesn't look like index.html is rendered?
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
