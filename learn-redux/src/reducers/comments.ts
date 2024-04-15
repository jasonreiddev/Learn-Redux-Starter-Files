import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Comments } from "../types";
import { comments } from "../data/comments";

const initialState: Comments = comments;

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (
      state,
      action: PayloadAction<{ postId: string; author: string; comment: string }>
    ) => {
      const { postId, author, comment } = action.payload;
      if (!state[postId]) {
        state[postId] = [];
      }
      state[postId].push({ user: author, text: comment });
    },
    removeComment: (
      state,
      action: PayloadAction<{ postId: string; i: number }>
    ) => {
      const { postId, i } = action.payload;
      if (state[postId]) {
        state[postId].splice(i, 1);
      }
    },
  },
});

export const { addComment, removeComment } = commentsSlice.actions;

export default commentsSlice.reducer;
