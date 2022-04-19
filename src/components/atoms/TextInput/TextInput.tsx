import React, { useState } from 'react';
import { InputAdornment, IconButton, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styled from 'styled-components';

const StyledTextInput = styled(TextField)``;

export type Props = {
  id: string;
  type: 'text' | 'password' | 'email';
  disabled?: boolean;
  label: string;
  variant: 'filled' | 'outlined' | 'standard';
  error?: boolean;
  size?: 'medium' | 'small';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  inputProps?: Object;
  fullWidth?: boolean;
};

const Component = ({
  type,
  size,
  id,
  disabled,
  label,
  error,
  variant = 'outlined',
  color,
  inputProps,
  fullWidth,
}: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [newType, setNewType] = useState<string>('password');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    setNewType(!showPassword ? 'text' : 'password');
  };

  return (
    <StyledTextInput
      label={label}
      disabled={disabled}
      variant={variant}
      id={id}
      error={error}
      type={type === 'password' ? newType : type}
      color={color}
      fullWidth={fullWidth}
      InputProps={
        type === 'password' && !inputProps
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    aria-label="toggle password"
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : inputProps
      }
      size={size}
    />
  );
};

export default Component;
