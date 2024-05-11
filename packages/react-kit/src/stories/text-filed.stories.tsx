import type { Meta, StoryObj } from "@storybook/react";
import { TextFiled } from "../components/text-filed";

const meta = {
  title: "TextFiled",
  component: TextFiled,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof TextFiled>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
