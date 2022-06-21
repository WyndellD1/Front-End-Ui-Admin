import React from 'react';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import { TextInput } from '../../atoms/TextInput';
import { theme } from '../../../config';
import { Checkbox } from '../../atoms/Checkbox';
import { Button } from '../../atoms/Button';

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  &&& {
    background-color: ${theme.colors.secondary};

    :hover {
      background-color: ${theme.colors.primary02};
    }
  }
`;

export type Props = {};

const Component = ({}: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextInput
          size="small"
          fullWidth
          type="text"
          label="E-mail Address"
          id="email"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          size="small"
          fullWidth
          type="password"
          label="Password"
          id="password"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <CheckboxContainer>
          <Checkbox
            fontColor={theme.colors.black01}
            checkboxSize="small"
            id="remember-me"
            label="Remember Me"
          />
        </CheckboxContainer>
      </Grid>
      <Grid item xs={12}>
        <StyledButton
          onClick={() => {}}
          fullWidth
          type="contained"
          label="Login"
        />
      </Grid>
    </Grid>
  );
};

export default Component;
