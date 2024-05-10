import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/button';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    children:'SUBMIT'
  }
};