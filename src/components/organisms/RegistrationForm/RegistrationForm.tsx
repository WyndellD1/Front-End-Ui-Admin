import React from 'react';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TextInput } from '../../atoms/TextInput';
import { DatePicker } from '../../molecules/DatePicker';
import { Button } from '../../atoms/Button';
import { theme } from '../../../config';
import { RadioGroup } from '../../atoms/RadioGroup';

const HelperText = styled.div`
  font: normal normal normal 12px/15px Montserrat;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  font: normal normal 600 12px/15px Montserrat;
  color: ${theme.colors.secondary};
  margin: 0 5px;
`;

const StyledButton = styled(Button)`
  &&& {
    background-color: ${theme.colors.secondary};

    :hover {
      background-color: ${theme.colors.primary02};
    }
  }
`;

const RadioGroupContainer = styled.div`
  display: flex;

  @media ${theme.breakpoints.mobile} {
    justify-content: center;
  }
`;

export type Props = {
  onChange: (value: any) => void;
  onRegister: () => void;
};

const Component = ({ onRegister, onChange }: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextInput
          size="small"
          id="firstname"
          fullWidth
          type="text"
          variant="outlined"
          label="First Name"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextInput
          size="small"
          id="middlename"
          fullWidth
          type="text"
          variant="outlined"
          label="Middle Name"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextInput
          size="small"
          id="lastname"
          type="text"
          fullWidth
          variant="outlined"
          label="Last Name"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DatePicker onChange={onChange} size="small" label="Birthdate" />
      </Grid>
      <Grid item xs={12} md={6}>
        <RadioGroupContainer>
          <RadioGroup
            isRow
            radioButtonSize="small"
            label="Gender"
            items={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'femmale' },
            ]}
            id="gender"
          />
        </RadioGroupContainer>
      </Grid>
      <Grid item xs={12}>
        <TextInput
          size="small"
          id="phone"
          fullWidth
          type="text"
          variant="outlined"
          label="Phone Number"
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          size="small"
          id="email"
          fullWidth
          type="text"
          variant="outlined"
          label="E-mail Address"
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          size="small"
          id="password"
          fullWidth
          type="password"
          variant="outlined"
          label="Password"
        />
      </Grid>
      <Grid item xs={12}>
        <HelperText>
          By clicking Register, you agree to our{' '}
          <StyledLink to="/">Terms</StyledLink> and
          <StyledLink to="/"> Data Policy</StyledLink>
        </HelperText>
      </Grid>
      <Grid item xs={12}>
        <StyledButton
          onClick={onRegister}
          fullWidth
          type="contained"
          label="Register"
        />
      </Grid>
    </Grid>
  );
};

export default Component;
