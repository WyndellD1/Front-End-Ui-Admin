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

const StyledLabel = styled(FormLabel)<{ $fontColor?: string }>`
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
  isRow?: boolean;
  label: string;
  id: string;
  items: RadioButtonTypes[];
  radioButtonSize: 'small' | 'medium';
  fontSize?: string;
  fontColor?: string;
  value?: any;
  onChange?: (event: React.ChangeEvent) => void;
};

const Component = ({
  isRow,
  label,
  id,
  items,
  radioButtonSize,
  fontSize,
  fontColor,
  onChange,
  value,
}: Props) => {
  return (
    <FormControl>
      <StyledLabel $fontColor={fontColor} id={id}>
        {label}
      </StyledLabel>
      <RadioGroup row={isRow} onChange={onChange} value={value}>
        {items.map((item: RadioButtonTypes, index) => {
          return (
            <FormControlLabel
              key={index}
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
