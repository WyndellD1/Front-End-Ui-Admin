import { Card, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  box-shadow: 0px 5px 10px #0000000d;
  border-radius: 20px;
`;

export type Props = {
  img?: string;
  imgHeight?: string;
  children?: React.ReactElement | React.ReactElement[] | string;
  width?: string;
};

const Component = ({ img, imgHeight, children, width }: Props) => {
  return (
    <StyledCard sx={{ width: `${width}px` || '300px' }}>
      <CardMedia image={img} component="img" height={imgHeight} />
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
};

export default Component;
