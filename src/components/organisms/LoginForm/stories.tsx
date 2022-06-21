import React from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { LoginForm } from '.';
import { Props } from './Component';

export default {
  title: 'Organisms/LoginForm',
  component: LoginForm,
} as Meta;

const Template: Story<Props> = (props: Props) => {
  return <LoginForm {...props} />;
};

export const Login = Template.bind({});
Login.args = {};
