import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Main, MainProps } from "./Main";
import { StoryProps } from "../../../../.storybook/types";
import { PhotoGrid } from "../../widgets/PhotoGrid/PhotoGrid";
import { exampleCode } from "../../../data/posts";
import { Single } from "../../widgets/Single/Single";

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
