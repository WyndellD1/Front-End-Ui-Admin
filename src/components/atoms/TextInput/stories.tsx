import React from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { TextInput } from '.';
import { Props } from './Component';

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<Props> = (args: Props) => <TextInput {...args} />;

export const InputText = Template.bind({});
InputText.args = {
  type: 'text',
  label: 'Text Input',
};

export const InputTextPassword = Template.bind({});
InputTextPassword.args = {
  type: 'password',
  label: 'Password Input',
};
