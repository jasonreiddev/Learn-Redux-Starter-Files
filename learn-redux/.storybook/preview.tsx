import * as React from "react";
import type { Preview, StoryObj, StoryContext } from "@storybook/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import "../src/styles/style.scss";
import postsReducer from "@reducers/posts";
import commentsReducer from "@reducers/comments";
import { RootState } from "src/store";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    }
  },
  decorators: [
    (Story: StoryObj, context: StoryContext) => {
      const mockStore = configureStore({
        preloadedState: context.initialArgs.preloadedState as RootState,
        reducer: {
          posts: postsReducer,
          comments: commentsReducer,
        },
      });

      return (
        <Provider store={mockStore}>
          <MemoryRouter initialEntries={[context.initialArgs.entry || "/"]}>
          <Routes>
              <Route path="/" element={<Story />} />
              <Route path="/view/:postCode" element={<Story />} />
            </Routes>        
          </MemoryRouter>
        </Provider>
      );
    },
  ],
};

export default preview;
