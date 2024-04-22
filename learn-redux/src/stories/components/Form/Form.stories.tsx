import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

import { StoryProps } from ".storybook/types";
import { Form, FormProps } from "./Form";

const meta: Meta = {
  component: Form,
  args: { callBack: fn() },
};

export default meta;

type Story = StoryObj<FormProps & StoryProps>;

export const Default: Story = {
  args: {
    initialForm: [
      {
        type: "text",
        id: "author",
        placeholder: "author",
        required: true,
        value: "",
        retainOnSubmit: true,
      },
      {
        type: "text",
        id: "comment",
        placeholder: "comment",
        required: true,
        value: "Initial value for comment",
      },
    ],
  },
};
