import type { Meta, StoryObj } from "@storybook/react";
import { Todo } from "../components/todo";
import { noop } from "@repo/shared";

const meta = {
  title: "Todo",
  component: Todo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Todo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    complete: true,
    createdAt: new Date().toDateString(),
    content: "Hello world~",
    onDeleteClick: noop,
  },
};
