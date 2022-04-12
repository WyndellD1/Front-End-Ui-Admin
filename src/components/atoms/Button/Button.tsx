import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{
  isPrimary: boolean;
  size: 'small' | 'medium' | 'large';
}>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  color: ${({ isPrimary }) => (isPrimary ? 'white' : '#333')};
  background-color: ${({ isPrimary }) =>
    isPrimary ? '#1ea7fd' : '#transparent'};

  font-size: ${({ size }) =>
    size === 'small' ? '12px' : size === 'medium' ? '14px' : '16px'};
  padding: ${({ size }) =>
    size === 'small'
      ? '10px 16px'
      : size === 'medium'
      ? '11px 20px'
      : '12px 24px'};
`;

export type Props = {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
};

const Component = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: Props) => {
  return (
    <StyledButton
      isPrimary={primary}
      size={size}
      type="button"
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

export default Component;
