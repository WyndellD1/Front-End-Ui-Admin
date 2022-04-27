import React from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import { Register } from '.';
import { Props } from './Register';

export default {
  title: 'Templates/Register',
  component: Register,
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <BrowserRouter>
    <Register {...args} />
  </BrowserRouter>
);

export const RegistrationTemplate = Template.bind({});
RegistrationTemplate.args = {};
