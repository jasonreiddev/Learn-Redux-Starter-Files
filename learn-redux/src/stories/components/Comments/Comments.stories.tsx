import type { Meta, StoryObj } from "@storybook/react";

import { Comments, CommentsProps } from "./Comments";
import { exampleCode, posts } from "../../../data/posts";
import { StoryProps } from "../../../../.storybook/types";

const meta: Meta = {
  component: Comments,
};

export default meta;

type Story = StoryObj<CommentsProps & StoryProps>;

export const Default: Story = {
  args: {
    postCode: exampleCode,
  },
};

export const NoCommentsAndLikes: Story = {
  args: {
    ...Default.args,
    preloadedState: {
      comments: {},
      posts: [{ ...posts.find((post) => post.code == exampleCode), likes: 0 }],
    },
  },
};

export const _999CommentsAndLikes: Story = {
  args: {
    ...Default.args,
    preloadedState: {
      comments: {
        [exampleCode]: Array.from({ length: 999 }).map(() => {
          return { user: "Jason", text: "Hello World" };
        }),
      },
      posts: [
        { ...posts.find((post) => post.code == exampleCode), likes: 999 },
      ],
    },
  },
};
