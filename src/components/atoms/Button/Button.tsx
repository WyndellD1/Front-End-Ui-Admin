import React from 'react';
import styled from 'styled-components';
import { Button, IconButton } from '@mui/material';

const StyledButton = styled(Button)``;

export type Props = {
  type?: 'contained' | 'outlined' | 'text';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  iconButton?: React.ReactElement;
  fullWidth?: boolean;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
};

const Component = ({
  type = 'contained',
  size = 'medium',
  backgroundColor,
  label,
  disabled,
  isLoading,
  startIcon,
  endIcon,
  color,
  fullWidth,
  iconButton,
  onClick,
  ...props
}: Props) => {
  return iconButton ? (
    <IconButton color={color}>{iconButton}</IconButton>
  ) : (
    <StyledButton
      variant={type}
      disabled={disabled}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      style={{ backgroundColor }}
      onClick={onClick}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

export default Component;
