import React from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { Register } from '.';
import { Props } from './Register';

export default {
  title: 'Templates/Register',
  component: Register,
} as Meta;

const Template: Story<Props> = (args: Props) => <Register {...args} />;

export const RegistrationTemplate = Template.bind({});
RegistrationTemplate.args = {};
