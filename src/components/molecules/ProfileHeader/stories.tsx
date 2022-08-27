import React from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import { ProfileHeader } from '.';
import { Props } from './Component';

export default {
  title: 'Organisms/ProfileHeader',
  component: ProfileHeader,
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <BrowserRouter>
    <ProfileHeader {...args} />
  </BrowserRouter>
);

export const ProfileHeaderNav = Template.bind({});
ProfileHeaderNav.args = {};
