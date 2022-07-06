import React from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { VerifyEmail } from '.';
import { Props } from './Component';

export default {
  title: 'Templates/VerifyEmail',
  component: VerifyEmail,
} as Meta;

const Template: Story<Props> = (args: Props) => <VerifyEmail {...args} />;

export const VerifyEmailPage = Template.bind({});
VerifyEmailPage.args = {};
