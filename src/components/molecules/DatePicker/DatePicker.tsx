import React from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import styled from 'styled-components';
import { TextField } from '@mui/material';

const StyledDatePicker = styled(DatePicker)``;

export type Props = {
  onChange: (date: any, keyboardInputValue?: string) => void;
  initialValue?: any | Date | number | string;
  label: string;
};

const Component = ({ onChange, initialValue, label }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StyledDatePicker
        label={label}
        onChange={onChange}
        value={initialValue}
        renderInput={(params) => <TextField fullWidth {...params} />}
      />
    </LocalizationProvider>
  );
};

export default Component;
