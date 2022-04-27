import React from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import { Appbar } from '.';
import { Props } from './Appbar';

export default {
  title: 'Organisms/Appbar',
  component: Appbar,
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <BrowserRouter>
    <Appbar {...args} />
  </BrowserRouter>
);

export const AppbarNav = Template.bind({});
AppbarNav.args = {};
