import React from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { EmailVerified } from '.';
import { Props } from './Component';

export default {
  title: 'Templates/EmailVerified',
  component: EmailVerified,
} as Meta;

const Template: Story<Props> = (args: Props) => <EmailVerified {...args} />;

export const EmailVerifiedTemplate = Template.bind({});
EmailVerifiedTemplate.args = {};
