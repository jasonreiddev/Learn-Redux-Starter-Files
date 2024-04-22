import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { StoryProps } from ".storybook/types";
import { Main, MainProps } from "./Main";
import { PhotoGrid } from "@widgets/PhotoGrid/PhotoGrid";
import { exampleCode } from "@data/posts";
import { Single } from "@widgets/Single/Single";
import { Spinner } from "@components/Spinner/Spinner";

const meta: Meta = {
  component: Main,
};

export default meta;

type Story = StoryObj<MainProps & StoryProps>;

export const Default: Story = {};

export const _PhotoGrid: Story = {
  args: {
    ...Default.args,
    children: <PhotoGrid />,
  },
};

export const _Single: Story = {
  args: {
    ...Default.args,
    entry: `/view/${exampleCode}`,
    children: <Single />,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    children: <Spinner />,
  },
};
