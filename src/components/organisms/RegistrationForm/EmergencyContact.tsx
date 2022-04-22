import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { TextInput } from '../../atoms/TextInput';
import { Select } from '../../atoms/Select';
import { Button } from '../../atoms/Button';
import { theme } from '../../../config';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  gap: 1em;

  button {
    flex: 1;

    :nth-child(1) {
      border: 1px solid ${theme.colors.secondary};
      color: ${theme.colors.secondary};
    }

    :nth-child(2) {
      background-color: ${theme.colors.secondary};
      border: 0;
      color: ${theme.colors.white};
    }

    :hover {
      :nth-child(2) {
        background-color: ${theme.colors.primary02};
      }
    }

    @media ${theme.breakpoints.mobile} {
      flex: 1 1 100%;
    }
  }
`;

type Props = {
  clickNext?: () => void;
  clickPrevious?: () => void;
};

const Component = ({ clickNext, clickPrevious }: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextInput
          size="small"
          id="members"
          fullWidth
          type="text"
          variant="outlined"
          label="Name"
        />
      </Grid>
      <Grid item xs={12}>
        <Select
          size="small"
          id="religion"
          fullWidth
          variant="outlined"
          label="Relationship"
          items={[
            { value: '', label: '' },
            { value: 10, label: '10' },
          ]}
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          size="small"
          id="members"
          fullWidth
          type="text"
          variant="outlined"
          label="Contact Number"
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          size="small"
          id="members"
          fullWidth
          type="text"
          variant="outlined"
          label="Address"
        />
      </Grid>

      <Grid item xs={12}>
        <ButtonContainer>
          <Button
            type="outlined"
            onClick={clickPrevious}
            label="PREVIOUS"
            fullWidth
          />
          <Button
            type="contained"
            onClick={clickNext}
            label="Finish"
            fullWidth
          />
        </ButtonContainer>
      </Grid>
    </Grid>
  );
};

export default Component;
