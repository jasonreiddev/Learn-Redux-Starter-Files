import * as React from "react";
import type { Preview } from "@storybook/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Switch } from "react-router-dom";

import "!style-loader!css-loader!sass-loader!../src/styles/style.scss";
import postsReducer from "../src/reducers/posts";
import commentsReducer from "../src/reducers/comments";
import { State } from "../src/types";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const mockStore = configureStore({
        preloadedState: context.initialArgs.preloadedState as State,
        reducer: {
          posts: postsReducer,
          comments: commentsReducer,
        },
      });

      return (
        <Provider store={mockStore}>
          <MemoryRouter initialEntries={[context.initialArgs.entry || "/"]}>
            <Switch>
              <Route path="/view/:postCode">
                <Story />
              </Route>
              <Route path="/">
                <Story />
              </Route>
            </Switch>
          </MemoryRouter>
        </Provider>
      );
    },
  ],
};

export default preview;
