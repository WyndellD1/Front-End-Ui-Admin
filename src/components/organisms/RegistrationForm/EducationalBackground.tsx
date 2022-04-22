import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { Select } from '../../atoms/Select';
import { RadioGroup } from '../../atoms/RadioGroup';
import { Button } from '../../atoms/Button';
import { theme } from '../../../config';
import { DatePicker } from '../../molecules/DatePicker';

const RadioGroupEducationContainer = styled.div`
  display: flex;

  @media ${theme.breakpoints.mobile} {
    display: none;
  }
`;

const RadioGroupContainer = styled.div`
  display: none;

  @media ${theme.breakpoints.mobile} {
    justify-content: center;
  }
`;

const EducationSelectContainer = styled.div`
  display: none;

  @media ${theme.breakpoints.mobile} {
    display: flex;
  }
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

export type EducationStatusTypes = 'student' | 'graduate' | 'youth' | string;

export type Props = {
  clickNext?: () => void;
  clickPrevious?: () => void;
  onChangeEducationStatus: (event: React.ChangeEvent) => void;
  formValues: { date: Date | null; educationStatus: EducationStatusTypes };
  onChangeDateAttended: (value: any) => void;
};

const Component = ({
  clickNext,
  clickPrevious,
  onChangeEducationStatus,
  onChangeDateAttended,
  formValues,
}: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <RadioGroupEducationContainer>
          <RadioGroup
            fontColor={theme.colors.black01}
            isRow
            radioButtonSize="small"
            onChange={onChangeEducationStatus}
            value={formValues.educationStatus}
            label="Current Education Status"
            items={[
              { label: 'Student', value: 'student' },
              { label: 'Graduate', value: 'graduate' },
              { label: 'Out of School Youth', value: 'youth' },
            ]}
            id="education-status"
          />
        </RadioGroupEducationContainer>
        <EducationSelectContainer>
          <Select
            size="small"
            id="education-status"
            fullWidth
            variant="outlined"
            onChange={onChangeEducationStatus}
            value={formValues.educationStatus}
            label="Current Education Status"
            items={[
              { label: 'Student', value: 'student' },
              { label: 'Graduate', value: 'graduate' },
              { label: 'Out of School Youth', value: 'youth' },
            ]}
          />
        </EducationSelectContainer>
      </Grid>
      {formValues && formValues.educationStatus === 'youth' && (
        <Grid item xs={12}>
          <DatePicker
            onChange={onChangeDateAttended}
            size="small"
            label="Year last attended"
          />
        </Grid>
      )}
      {formValues &&
        ['graduate', 'student'].includes(formValues.educationStatus) && (
          <>
            <Grid item xs={12}>
              <Select
                size="small"
                id="year"
                fullWidth
                variant="outlined"
                label="Year Level"
                items={[{ value: 10, label: '10' }]}
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                size="small"
                id="course"
                fullWidth
                variant="outlined"
                label="Course"
                items={[{ value: 10, label: '10' }]}
              />
            </Grid>
          </>
        )}
      {formValues && formValues.educationStatus === 'graduate' && (
        <Grid item xs={12}>
          <RadioGroupContainer>
            <RadioGroup
              fontColor={theme.colors.black01}
              isRow
              radioButtonSize="small"
              onChange={() => {}}
              label="Are you a board passer?"
              items={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
              ]}
              id="board-passer"
            />
          </RadioGroupContainer>
        </Grid>
      )}
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
