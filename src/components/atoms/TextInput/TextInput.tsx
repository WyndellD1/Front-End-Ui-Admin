import { Input } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledTextInput = styled(Input)``;

export type Props = {
  id: string;
  type: 'text' | 'password' | 'email';
  disabled?: boolean;
  placeholder?: string;
  suffix?: React.ReactElement;
};

const Component = ({ type, id, disabled, placeholder, suffix }: Props) => {
  return type === 'password' ? (
    <StyledTextInput.Password
      id={id}
      disabled={disabled}
      placeholder={placeholder}
    />
  ) : (
    <StyledTextInput suffix={suffix} />
  );
};

export default Component;
