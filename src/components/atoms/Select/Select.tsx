import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import styled from 'styled-components';
import { theme } from '../../../config';

const StyledFormControl = styled(FormControl)`
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

type SelectItem = {
  id?: number;
  value: any;
  label: string;
};

export type Props = {
  id: string;
  value?: any;
  label: string;
  onChange?: (event: any) => void;
  items: SelectItem[];
  disabled?: boolean;
  variant: 'filled' | 'outlined' | 'standard';
  error?: boolean;
  size?: 'medium' | 'small';
  fullWidth?: boolean;
  inputProps?: Object;
};

const Component = ({
  onChange,
  label,
  value,
  id,
  items,
  variant,
  disabled,
  error,
  size,
  fullWidth,
  inputProps,
}: Props) => {
  return (
    <StyledFormControl
      fullWidth={fullWidth}
      size={size}
      error={error}
      disabled={disabled}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        id={id}
        label={label}
        value={value}
        onChange={onChange}
        variant={variant}
        inputProps={inputProps}
      >
        {items.map((item: SelectItem) => {
          return (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </StyledFormControl>
  );
};

export default Component;
