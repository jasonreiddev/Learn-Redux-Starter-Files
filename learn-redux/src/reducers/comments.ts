import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Comments } from "src/types";
import { comments } from "@data/comments";

const initialState: Comments = comments;

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (
      state,
      action: PayloadAction<{
        postCode: string;
        author: string;
        comment: string;
      }>
    ) => {
      const { postCode, author, comment } = action.payload;
      if (!state[postCode]) {
        state[postCode] = [];
      }
      state[postCode].push({ user: author, text: comment });
    },
    removeComment: (
      state,
      action: PayloadAction<{ postCode: string; i: number }>
    ) => {
      const { postCode, i } = action.payload;
      if (state[postCode]) {
        state[postCode].splice(i, 1);
      }
    },
  },
});

export const { addComment, removeComment } = commentsSlice.actions;

export default commentsSlice.reducer;
