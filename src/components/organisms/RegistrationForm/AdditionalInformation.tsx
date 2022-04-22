import React from 'react';
import styled from 'styled-components';
import { Grid, Divider, FormLabel } from '@mui/material';
import { Select } from '../../atoms/Select';
import { RadioGroup } from '../../atoms/RadioGroup';
import { Button } from '../../atoms/Button';
import { theme } from '../../../config';
import { DatePicker } from '../../molecules/DatePicker';
import { Checkbox } from '../../atoms/Checkbox';
import { TextInput } from '../../atoms/TextInput';

const RadioGroupEducationContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${theme.breakpoints.mobile} {
    display: none;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 185px;

  @media ${theme.breakpoints.mobile} {
    justify-content: center;
  }
`;

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

const Label = styled.div`
  font: normal normal 600 18px/30px Montserrat;
  color: ${theme.colors.black01};
`;

const HelperText = styled.small`
  font-family: Montserrat;
  color: ${theme.colors.black01};
`;

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: inherit;
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
    <Grid container spacing={2} sx={{ paddingBottom: '5em' }}>
      <Grid item xs={12}>
        <RadioGroupEducationContainer>
          <Label>Employment</Label>
          <RadioGroup
            fontColor={theme.colors.black01}
            isRow
            radioButtonSize="small"
            label="Are you currently employed?"
            items={[
              { label: 'Yes', value: 'yes' },
              { label: 'No', value: 'no' },
            ]}
            id="employee-status"
          />
        </RadioGroupEducationContainer>
      </Grid>
      <Grid item xs={12}>
        <Select
          size="small"
          id="employment-ector"
          fullWidth
          variant="outlined"
          label="Employment Sector"
          items={[{ value: 'self-employed', label: 'Self-Employed' }]}
        />
      </Grid>

      <Grid item xs={12}>
        <RadioGroupEducationContainer>
          <RadioGroup
            fontColor={theme.colors.black01}
            isRow
            radioButtonSize="small"
            label="Nature of self-employment"
            items={[
              { label: 'Freelance', value: 'freelance' },
              { label: 'Entrepreneur', value: 'entrepreneur' },
            ]}
            id="nature"
          />
        </RadioGroupEducationContainer>
      </Grid>

      <Divider sx={{ marginTop: '2em', width: '100%' }} />

      <Grid item xs={12}>
        <CheckboxContainer>
          <Label>Health Declaration & Conditions</Label>
          <HelperText>Are you vaccinated with the following?</HelperText>
          <CheckboxWrapper>
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="polio-vaccine"
              label="Polio Vaccine"
            />
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="measles"
              label="Measles, mumps, rubella (MMR)"
            />
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="Hepatitis-a"
              label="Hepatitis A"
            />
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="hepatitis-b"
              label="Hepatitis B"
            />

            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="influenza"
              label="Influenza"
            />
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="meningococcal"
              label="Meningococcal"
            />
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="tetanus"
              label="Tetanus, diphtheria, & acellular pertussis"
            />
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="varicella"
              label="Varicella"
            />
          </CheckboxWrapper>
        </CheckboxContainer>
      </Grid>

      <Grid item xs={12}>
        <RadioGroupEducationContainer>
          <RadioGroup
            fontColor={theme.colors.black01}
            isRow
            radioButtonSize="small"
            label="Are you a PWD?"
            items={[
              { label: 'Yes', value: 'yes' },
              { label: 'No', value: 'no' },
            ]}
            id="pwd"
          />
        </RadioGroupEducationContainer>
      </Grid>

      <Grid item xs={12}>
        <CheckboxContainer>
          <HelperText>Health Certificates / Licenses</HelperText>
          <CheckboxWrapper>
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="polio-vaccine"
              label="Lorem ipsum"
            />
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="measles"
              label="Lorem ipsum"
            />
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="Hepatitis-a"
              label="Lorem ipsum"
            />
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="hepatitis-b"
              label="Lorem ipsum"
            />

            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="influenza"
              label="Others"
            />
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="meningococcal"
              label="Lorem ipsum"
            />
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="tetanus"
              label="Lorem ipsum"
            />
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="varicella"
              label="Lorem ipsum"
            />
          </CheckboxWrapper>
        </CheckboxContainer>

        <TextInput
          size="small"
          id="siblings"
          type="text"
          variant="outlined"
          label="Other Certificates / Licenses"
        />
      </Grid>

      <Divider sx={{ marginTop: '2em', width: '100%' }} />

      <Grid item xs={12}>
        <RadioGroupEducationContainer>
          <Label>Other Information</Label>
          <RadioGroup
            fontColor={theme.colors.black01}
            isRow
            radioButtonSize="small"
            label="Are you a registered voter in Tisa?"
            items={[
              { label: 'Yes', value: 'yes' },
              { label: 'No', value: 'no' },
            ]}
            id="employee-status"
          />
        </RadioGroupEducationContainer>
      </Grid>

      <Grid item xs={12}>
        <RadioGroupEducationContainer>
          <RadioGroup
            fontColor={theme.colors.black01}
            isRow
            radioButtonSize="small"
            label="Residency"
            items={[
              { label: 'Permanent Resident', value: 'Permanent Residen' },
              { label: 'Temporary / Renter', value: 'Temporary Renter' },
            ]}
            id="employee-status"
          />
        </RadioGroupEducationContainer>
      </Grid>

      <Grid item xs={12}>
        <CheckboxContainer>
          <HelperText>Disaster License / Certification</HelperText>
          <CheckboxWrapper>
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="polio-vaccine"
              label="Lorem ipsum"
            />
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="measles"
              label="Lorem ipsum"
            />
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="Hepatitis-a"
              label="Lorem ipsum"
            />
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="hepatitis-b"
              label="Lorem ipsum"
            />

            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="influenza"
              label="Others"
            />
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="meningococcal"
              label="Lorem ipsum"
            />
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="tetanus"
              label="Lorem ipsum"
            />
            <Checkbox
              fontColor={theme.colors.black01}
              checkboxSize="small"
              id="varicella"
              label="Lorem ipsum"
            />
          </CheckboxWrapper>
        </CheckboxContainer>
      </Grid>

      <Grid item xs={12}>
        <TextInput
          size="small"
          id="siblings"
          fullWidth
          type="text"
          variant="outlined"
          label="Sports you love to play"
          placeholder="Separate in commas (,)"
        />
      </Grid>

      <Grid item xs={12}>
        <RadioGroupEducationContainer>
          <RadioGroup
            fontColor={theme.colors.black01}
            isRow
            radioButtonSize="small"
            label="Are you a varsity player?"
            items={[
              { label: 'Yes', value: 'yes' },
              { label: 'No', value: 'no' },
            ]}
            id="employee-status"
          />
        </RadioGroupEducationContainer>
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
