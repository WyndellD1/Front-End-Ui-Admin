import { FacebookRounded, Google } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../config';
import { Button } from '../../atoms/Button';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;

  button {
    flex: 1;

    @media ${theme.breakpoints.mobile} {
      flex: 1 1 100%;
    }
  }
`;

export type Props = {};

const Component = ({}: Props) => {
  return (
    <Container>
      <Button
        startIcon={<FacebookRounded />}
        type="outlined"
        label="Register with Facebook"
        fullWidth
      />
      <Button
        startIcon={<Google />}
        color="error"
        type="outlined"
        label="Register with Google"
        fullWidth
      />
    </Container>
  );
};

export default Component;
