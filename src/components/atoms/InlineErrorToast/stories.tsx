import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { InlineErrorToast } from '.';
import { Props } from './Component';

const Container = styled.div`
  width: 436px;
`;

export default {
  title: 'atoms/InlineErrorToast',
  component: InlineErrorToast,
  argTypes: {
    message: { control: { type: 'text' } },
    id: { control: { type: 'text' } },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <InlineErrorToast {...args} />;
const withContainerTemplate: Story<Props> = (args: Props) => (
  <Container>
    <InlineErrorToast {...args} />
  </Container>
);

export const DefaultInlineErrorToast = Template.bind({});
DefaultInlineErrorToast.args = {
  message: 'API ERROR Common',
  onClose: action('on-click-close'),
};

export const withContainer = withContainerTemplate.bind({});
withContainer.args = {
  message: 'API ERROR Common',
  id: '',
  onClose: action('on-click-close'),
};
