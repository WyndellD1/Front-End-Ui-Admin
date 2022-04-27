import React from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { Home } from '.';
import { Props } from './Home';

export default {
  title: 'Templates/LandingPage',
  component: Home,
} as Meta;

const Template: Story<Props> = (args: Props) => <Home {...args} />;

export const LandingPage = Template.bind({});
LandingPage.args = {};
