import React from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { SocialMedia } from '.';
import { Props } from './Component';

export default {
  title: 'Organisms/SocialMedia',
  component: SocialMedia,
} as Meta;

const Template: Story<Props> = (args: Props) => <SocialMedia {...args} />;

export const SocialMediaForm = Template.bind({});
SocialMediaForm.args = {};
