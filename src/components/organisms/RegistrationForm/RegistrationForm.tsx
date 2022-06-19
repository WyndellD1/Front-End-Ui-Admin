import React, { ChangeEvent } from 'react';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TextInput } from '../../atoms/TextInput';
import { DatePicker } from '../../molecules/DatePicker';
import { Button } from '../../atoms/Button';
import { theme } from '../../../config';
import { RadioGroup } from '../../atoms/RadioGroup';
import { SignUpValues } from '../../templates/Register/types';

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
  initialValue: SignUpValues & { password: string };
  onChange: (value: any) => void;
  onRegister: () => void;
  onChangeFirstName: (text: string) => void;
  onChangeEmail: (text: string) => void;
  onChangePhone: (text: string) => void;
  onChangePassword: (text: string) => void;
  onChangeMiddleName: (text: string) => void;
  onChangeLastName: (text: string) => void;
  onChangeGender: (text: string) => void;
  onChangeBirthdate: (
    field: string,
    value: any,
    shouldValidate?: boolean,
  ) => void;
  birthDate: any;
};

const Component = ({
  onRegister,
  onChange,
  onChangeFirstName,
  onChangeGender,
  onChangeLastName,
  onChangeMiddleName,
  onChangeEmail,
  onChangePassword,
  onChangePhone,
  onChangeBirthdate,
  birthDate,
  initialValue,
}: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextInput
          onChangeText={onChangeFirstName}
          size="small"
          id="firstname"
          fullWidth
          value={initialValue.firstName}
          type="text"
          variant="outlined"
          label="First Name"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextInput
          onChangeText={onChangeMiddleName}
          size="small"
          id="middlename"
          fullWidth
          type="text"
          variant="outlined"
          label="Middle Name"
          value={initialValue.middleName}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextInput
          onChangeText={onChangeLastName}
          size="small"
          id="lastname"
          type="text"
          fullWidth
          variant="outlined"
          label="Last Name"
          value={initialValue.lastName}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DatePicker
          onChange={(val) => onChangeBirthdate('birthdate', val)}
          size="small"
          initialValue={birthDate}
          label="Birthdate"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <RadioGroupContainer>
          <RadioGroup
            onChange={(event: ChangeEvent, value: string) =>
              onChangeGender(value)
            }
            value={initialValue.gender}
            isRow
            fontColor={theme.colors.black01}
            radioButtonSize="small"
            label="Gender"
            items={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
            ]}
            id="gender"
          />
        </RadioGroupContainer>
      </Grid>
      <Grid item xs={12}>
        <TextInput
          onChangeText={onChangePhone}
          size="small"
          id="phone"
          fullWidth
          type="text"
          variant="outlined"
          label="Phone Number"
          value={initialValue.phoneNumber}
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          onChangeText={onChangeEmail}
          size="small"
          id="email"
          fullWidth
          type="text"
          variant="outlined"
          label="E-mail Address"
          value={initialValue.email}
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          onChangeText={onChangePassword}
          size="small"
          id="password"
          fullWidth
          type="password"
          variant="outlined"
          label="Password"
          value={initialValue.password}
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
