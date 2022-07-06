import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import { TextInput } from '../../atoms/TextInput';
import { theme } from '../../../config';
import { Checkbox } from '../../atoms/Checkbox';
import { Button } from '../../atoms/Button';
import { InlineErrorToast } from '../../atoms/InlineErrorToast';

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

const ErrorMessage = styled.span`
  width: 436px;
  color: ${theme.colors.textError};
  margin-top: 8px;
  text-align: left;

  @media ${theme.breakpoints.mobile} {
    width: 100%;
  }
`;

const ApiErrorWrapper = styled.div`
  width: 100%;
  height: min-content;
  margin-top: 16px;
  margin-bottom: 16px;
  padding-left: 16px;
`;

export type Props = {
  onLogin: () => void;
  onChangeEmail: (text: string) => void;
  onChangePassword: (text: string) => void;
  errors: {
    email?: string;
    apiError?: string;
  };
  setFieldTouched: (
    field: string,
    isTouched?: boolean,
    shouldValidate?: boolean,
  ) => void;
  disabled?: boolean;
  onBlurEmail: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const Component = ({
  onLogin,
  onChangeEmail,
  onChangePassword,
  errors,
  setFieldTouched,
  onBlurEmail,
  disabled,
}: Props) => {
  const [apiError, setApiError] = useState<string | undefined>(undefined);

  useEffect(() => {
    setApiError(errors?.apiError);
  }, [errors?.apiError]);

  return (
    <Grid container spacing={2}>
      {apiError && (
        <ApiErrorWrapper>
          <InlineErrorToast
            message={apiError}
            onClose={() => setApiError('')}
          />
        </ApiErrorWrapper>
      )}
      <Grid item xs={12}>
        <TextInput
          onChangeText={(value: string) => {
            setFieldTouched('email');
            onChangeEmail(value);
          }}
          onBlur={onBlurEmail}
          size="small"
          fullWidth
          type="text"
          label="E-mail Address"
          id="email"
          variant="outlined"
          error={!!errors.email}
        />
        {errors?.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </Grid>
      <Grid item xs={12}>
        <TextInput
          onChangeText={onChangePassword}
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
          onClick={onLogin}
          fullWidth
          type="contained"
          label="Login"
          disabled={disabled}
        />
      </Grid>
    </Grid>
  );
};

export default Component;
