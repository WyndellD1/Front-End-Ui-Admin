import React from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { Select } from '.';
import { Props } from './Select';

export default {
  title: 'Atoms/Select',
  component: Select,
} as Meta;

const Template: Story<Props> = (args: Props) => <Select {...args} />;

export const SelectInput = Template.bind({});
SelectInput.args = {};
