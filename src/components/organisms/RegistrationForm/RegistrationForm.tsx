import React from 'react';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import { TextInput } from '../../atoms/TextInput';
import { DatePicker } from '../../molecules/DatePicker';
import { Button } from '../../atoms/Button';

const HelperText = styled.div`
  display: flex;
  justify-content: center;
`;

export type Props = {
  onChange: (value: any) => void;
};

const Component = ({ onChange }: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextInput
          size="medium"
          id="firstname"
          fullWidth
          type="text"
          variant="outlined"
          label="First Name"
        />
      </Grid>
      <Grid item xs={6}>
        <TextInput
          size="medium"
          id="middlename"
          fullWidth
          type="text"
          variant="outlined"
          label="Middle Name"
        />
      </Grid>
      <Grid item xs={6}>
        <TextInput
          size="medium"
          id="lastname"
          type="text"
          fullWidth
          variant="outlined"
          label="Last Name"
        />
      </Grid>
      <Grid item xs={6}>
        <DatePicker onChange={onChange} label="Middle Name" />
      </Grid>
      <Grid item xs={6}>
        <TextInput
          size="medium"
          id="lastname"
          fullWidth
          type="text"
          variant="outlined"
          label="Last Name"
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          size="medium"
          id="phone"
          fullWidth
          type="text"
          variant="outlined"
          label="Phone Number"
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          size="medium"
          id="email"
          fullWidth
          type="text"
          variant="outlined"
          label="E-mail Address"
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          size="medium"
          id="password"
          fullWidth
          type="password"
          variant="outlined"
          label="Password"
        />
      </Grid>
      <Grid item xs={12}>
        <HelperText>
          By clicking Register, you agree to our Terms and Data Policy
        </HelperText>
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth type="contained" label="Register" />
      </Grid>
    </Grid>
  );
};

export default Component;
