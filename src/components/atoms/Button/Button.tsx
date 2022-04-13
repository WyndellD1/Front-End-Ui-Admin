import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(Button)``;

export type Props = {
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  backgroundColor?: string;
  size?: 'large' | 'middle' | 'small';
  label: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  shape?: 'default' | 'circle' | 'round';
  icon?: React.ReactElement;
};

const Component = ({
  type = 'default',
  size = 'middle',
  shape = 'default',
  backgroundColor,
  label,
  disabled,
  ghost,
  icon,
  isLoading,
  onClick,
  ...props
}: Props) => {
  return (
    <StyledButton
      type={type}
      ghost={ghost}
      disabled={disabled}
      size={size}
      icon={icon}
      shape={shape}
      loading={isLoading}
      style={{ backgroundColor }}
      onClick={onClick}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

export default Component;
