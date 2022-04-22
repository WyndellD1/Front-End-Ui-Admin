import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { theme } from '../../../config';

export type Props = {
  totalItems: number;
  value: number;
  size?: number;
  sx?: Object;
};

const Component = ({ totalItems, value, size, sx }: Props) => {
  const normalise = (minValue: number, totalValue: number) =>
    (minValue * 100) / totalValue;

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        value={100}
        size={size}
        variant="determinate"
        sx={{ color: theme.colors.gray03 }}
      />
      <CircularProgress
        size={size}
        variant="determinate"
        value={normalise(value, totalItems)}
        sx={
          sx
            ? sx
            : {
                color: theme.colors.secondary,
                position: 'absolute',
                left: 0,
              }
        }
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {value} of {totalItems}
        </Typography>
      </Box>
    </Box>
  );
};
export default Component;
