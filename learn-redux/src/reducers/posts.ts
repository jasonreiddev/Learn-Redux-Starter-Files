import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Post } from "../types";
import { posts } from "../data/posts";

const initialState: Post[] = posts;

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    incrementLikes: (state, action: PayloadAction<{ postId: string }>) => {
      const i = state.findIndex((post) => post.id == action.payload.postId);
      if (state[i]) {
        state[i] = { ...state[i], likes: state[i].likes + 1 };
      }
    },
  },
});

export const { incrementLikes } = postsSlice.actions;

export default postsSlice.reducer;
