import React from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import { AdminHeader } from '.';
import { Props } from './Component';

export default {
  title: 'Organisms/AdminHeader',
  component: AdminHeader,
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <BrowserRouter>
    <AdminHeader {...args} />
  </BrowserRouter>
);

export const AdminHeaderNav = Template.bind({});
AdminHeaderNav.args = {};
