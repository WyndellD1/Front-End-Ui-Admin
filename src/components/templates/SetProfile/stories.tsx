import React from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { SetProfile } from '.';
import { Props } from './Component';

export default {
  title: 'Templates/SetProfile',
  component: SetProfile,
} as Meta;

const Template: Story<Props> = (args: Props) => <SetProfile {...args} />;

export const VerifyEmailPage = Template.bind({});
VerifyEmailPage.args = {};
