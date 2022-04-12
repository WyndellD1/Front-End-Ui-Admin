import React from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { Button } from '.';
import { Props } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<Props> = (args: Props) => <Button {...args} />;

export const Buttons = Template.bind({});
Buttons.args = {
  label: 'Button',
};
