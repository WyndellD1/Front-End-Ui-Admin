import React from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import styled from 'styled-components';
import { TextField } from '@mui/material';
import { theme } from '../../../config';

const StyledTextField = styled(TextField)`
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
  onChange: (date: any, keyboardInputValue?: string) => void;
  initialValue?: any | Date | number | string;
  label: string;
  size?: 'medium' | 'small';
};

const Component = ({ onChange, initialValue, label, size }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        onChange={onChange}
        value={initialValue}
        renderInput={(params) => (
          <StyledTextField fullWidth size={size} {...params} />
        )}
      />
    </LocalizationProvider>
  );
};

export default Component;
