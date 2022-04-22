import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../config';

const StyledLabel = styled(FormControlLabel)<{ $fontColor?: string }>`
  &&& {
    font-size: 12px;
    color: ${({ $fontColor }) => $fontColor || theme.colors.secondary};
  }
`;

type RadioButtonTypes = {
  label: string;
  value: string;
};

export type Props = {
  label: string;
  id: string;
  fontColor?: string;
  checkboxSize?: 'small' | 'medium';
};

const Component = ({ label, id, fontColor, checkboxSize }: Props) => {
  return (
    <FormGroup>
      <StyledLabel
        control={
          <Checkbox
            size={checkboxSize}
            sx={{
              '&.Mui-checked': { color: theme.colors.secondary },
              '&:hover': { bgcolor: 'transparent' },
            }}
          />
        }
        label={label}
        $fontColor={fontColor}
        id={id}
      />
    </FormGroup>
  );
};

export default Component;
