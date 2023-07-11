import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimarySmall: Story = {
  args: {
    children: 'Primary',
    color: 'primary',
    size: 'sm',
  },
};

export const PrimaryLarge: Story = {
  args: {
    children: 'Primary',
    color: 'primary',
    size: 'lg',
  },
};
