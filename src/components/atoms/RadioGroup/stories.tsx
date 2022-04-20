import React from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { RadioGroup } from '.';
import { Props } from './RadioGroup';

export default {
  title: 'Atoms/RadioGroup',
  component: RadioGroup,
} as Meta;

const Template: Story<Props> = (args: Props) => <RadioGroup {...args} />;

export const RadioGroupButton = Template.bind({});
RadioGroupButton.args = {
  isRow: true,
  label: 'Gender',
  id: 'gender',
  items: [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'femmale' },
  ],
};
