import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { TextInput } from '../../atoms/TextInput';
import { Select } from '../../atoms/Select';
import { RadioGroup } from '../../atoms/RadioGroup';
import { Button } from '../../atoms/Button';
import { theme } from '../../../config';

const RadioGroupContainer = styled.div`
  display: flex;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  gap: 1em;

  button {
    flex: 1;
    border: 1px solid ${theme.colors.gray02};
    color: ${theme.colors.gray02};

    :hover {
      border: 1px solid ${theme.colors.gray02};
    }

    :nth-child(2) {
      background-color: ${theme.colors.secondary};
      border: 0;

      :hover {
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
        <Select
          size="small"
          id="sitio"
          fullWidth
          variant="outlined"
          label="Sitio"
          items={[{ value: 10, label: '10' }]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Select
          size="small"
          id="religion"
          fullWidth
          variant="outlined"
          label="Religion"
          items={[
            { value: '', label: '' },
            { value: 10, label: '10' },
          ]}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Select
          size="small"
          id="civil-status"
          fullWidth
          variant="outlined"
          label="Civil Status"
          items={[
            { value: '', label: '' },
            { value: 10, label: '10' },
          ]}
        />
      </Grid>
      <Grid item xs={12}>
        <RadioGroupContainer>
          <RadioGroup
            isRow
            radioButtonSize="small"
            fontColor={theme.colors.black01}
            label="Are you a solo parent?"
            items={[
              { label: 'Yes', value: 'yes' },
              { label: 'No', value: 'no' },
            ]}
            id="solo-parent"
          />
        </RadioGroupContainer>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextInput
          size="small"
          id="members"
          fullWidth
          type="text"
          variant="outlined"
          label="No. of members in family"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextInput
          size="small"
          id="siblings"
          fullWidth
          type="text"
          variant="outlined"
          label="How many siblings?"
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
          <Button type="contained" onClick={clickNext} label="NEXT" fullWidth />
        </ButtonContainer>
      </Grid>
    </Grid>
  );
};

export default Component;
