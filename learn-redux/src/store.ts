import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "./reducers/posts";
import commentsReducer from "./reducers/comments";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
  },
});

// Infer types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
