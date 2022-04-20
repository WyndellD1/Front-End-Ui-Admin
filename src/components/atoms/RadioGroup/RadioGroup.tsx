import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../config';

const StyledLabel = styled(FormLabel)`
  &&& {
    font-size: 12px;
    color: ${theme.colors.secondary};
  }
`;

type RadioButtonTypes = {
  label: string;
  value: string;
};

export type Props = {
  isRow?: boolean;
  label: string;
  id: string;
  items: RadioButtonTypes[];
  radioButtonSize: 'small' | 'medium';
  fontSize?: string;
};

const Component = ({
  isRow,
  label,
  id,
  items,
  radioButtonSize,
  fontSize,
}: Props) => {
  return (
    <FormControl>
      <StyledLabel id={id}>{label}</StyledLabel>
      <RadioGroup row={isRow}>
        {items.map((item: RadioButtonTypes) => {
          return (
            <FormControlLabel
              control={
                <Radio
                  size={radioButtonSize}
                  sx={{
                    color: theme.colors.secondary,
                    '&.Mui-checked': { color: theme.colors.secondary },
                    '& .MuiSvgIcon-root': { fontSize: fontSize || '14px' },
                  }}
                />
              }
              value={item.value}
              label={item.label}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default Component;
