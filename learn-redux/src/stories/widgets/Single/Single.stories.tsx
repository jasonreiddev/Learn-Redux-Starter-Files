import type { Meta, StoryObj } from "@storybook/react";

import { Single } from "./Single";
import { exampleCode } from "../../../data/posts";
import { StoryProps } from "../../../../.storybook/types";

const meta: Meta = {
  component: Single,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    entry: `/view/${exampleCode}`,
  },
};
