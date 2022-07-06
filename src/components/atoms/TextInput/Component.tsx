import React, { ChangeEvent, useState } from 'react';
import { InputAdornment, IconButton, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styled from 'styled-components';
import { theme } from '../../../config';

const StyledTextInput = styled(TextField)`
  & label.Mui-focused {
    color: ${theme.colors.secondary};
  }
  & .MuiInput-underline:after {
    border-bottom-color: ${theme.colors.secondary};
  }
  & .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: ${theme.colors.secondary};
    }
    &.Mui-focused fieldset {
      border-color: ${theme.colors.secondary};
    }
  }
`;

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
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
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
  placeholder,
  onChangeText,
  onBlur,
  value,
}: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [newType, setNewType] = useState<string>('password');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    setNewType(!showPassword ? 'text' : 'password');
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (onChangeText) onChangeText(event.target.value);
  };

  return (
    <StyledTextInput
      onBlur={onBlur}
      onChange={onChange}
      label={label}
      disabled={disabled}
      variant={variant}
      id={id}
      value={value}
      placeholder={placeholder}
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
