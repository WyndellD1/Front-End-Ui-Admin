import React from 'react';
import { Meta } from '@storybook/react';
import SearchIcon from '@mui/icons-material/Search';
import { Story } from '@storybook/react/types-6-0';
import { Button } from '.';
import { Props } from './Component';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<Props> = (args: Props) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  label: 'Button',
};

export const IconButton = Template.bind({});
IconButton.args = {
  label: '',
  type: 'text',
  iconButton: <SearchIcon />,
  color: 'primary',
  size: 'small',
};
