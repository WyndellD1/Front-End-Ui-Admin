import React from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { Select } from '.';
import { Props, SelectItem } from './Select';

export default {
  title: 'Atoms/Select',
  component: Select,
} as Meta;

const mockData: SelectItem[] = [
  { label: 'This is a value', value: 'value' },
  { label: 'This is a value 1', value: 'value 1' },
];

const Template: Story<Props> = (args: Props) => <Select {...args} />;

export const SelectInput = Template.bind({});
SelectInput.args = {
  items: mockData,
  label: 'Select an item',
  value: 'value',
};
