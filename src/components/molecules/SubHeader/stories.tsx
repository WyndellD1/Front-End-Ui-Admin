import React from 'react';
import { Meta } from '@storybook/react';
import { Story } from '@storybook/react/types-6-0';
import { SubHeader } from '.';
import { Props } from './SubHeader';

export default {
  title: 'Organisms/SubHeader',
  component: SubHeader,
} as Meta;

const Template: Story<Props> = (args: Props) => <SubHeader {...args} />;

export const SubHeaderText = Template.bind({});
SubHeaderText.args = {
  title: 'Title',
};
