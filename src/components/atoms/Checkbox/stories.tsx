import React from 'react';
import { Meta } from '@storybook/react';
import SearchIcon from '@mui/icons-material/Search';
import { Story } from '@storybook/react/types-6-0';
import { Checkbox } from '.';
import { Props } from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<Props> = (args: Props) => <Checkbox {...args} />;

export const CheckboxInput = Template.bind({});
CheckboxInput.args = {
  label: 'This is a checkbox',
  id: 'checkbox',
};
