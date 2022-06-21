import React from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { Login } from '.';
import { Props } from './Component';

export default {
  title: 'Templates/Register',
  component: Login,
} as Meta;

const Template: Story<Props> = (args: Props) => <Login {...args} />;

export const RegistrationTemplate = Template.bind({});
RegistrationTemplate.args = {};
