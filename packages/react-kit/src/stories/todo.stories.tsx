import type { Meta, StoryObj } from '@storybook/react';
import { Todo } from '../components/todo';

const meta = {
  title: 'Todo',
  component: Todo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Todo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};