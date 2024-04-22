import type { Meta, StoryObj } from "@storybook/react";

import { StoryProps } from ".storybook/types";
import { PhotoGrid } from "./PhotoGrid";
import { exampleCode, posts } from "@data/posts";

const meta: Meta = {
  component: PhotoGrid,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {};

export const OnePost: Story = {
  args: {
    ...Default.args,
    preloadedState: {
      comments: {},
      posts: posts.filter((post) => post.code == exampleCode),
    },
  },
};

export const NoPosts: Story = {
  args: {
    ...Default.args,
    preloadedState: { comments: {}, posts: [] },
  },
};
