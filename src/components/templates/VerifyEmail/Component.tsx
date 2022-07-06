import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../config';
import { useAuthHooks } from '../../../hooks/auth';
import { useGlobalState } from '../../../hooks/global';
import { Button } from '../../atoms/Button';
import { VerifyEmail } from '../../atoms/Icons';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VerifyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 488px;
  height: max-content;
`;

const VerifyTitle = styled.p`
  font-weight: 700;
  font-size: 34px;
  line-height: 49px;
  padding: 0;
  margin: 0;
`;

const StyledVerifyIcon = styled(VerifyEmail)`
  margin-top: 23px;
`;

const VerifyPrompt = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  padding: 0;
  margin: 0;
  margin-top: 23px;
`;

const VerifyLabels = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  padding: 0;
  margin: 0;
  margin-top: 11px;
`;

const StyledResendLink = styled.span<{ isDisabled?: boolean }>`
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  padding: 0;
  margin: 0;
  color: ${theme.colors.primary02};
  margin-left: 4px;
  margin-top: 11px;
  cursor: pointer;
  text-decoration: none;

  :hover {
    text-decoration: ${(props) => (props.isDisabled ? 'none' : 'underline')};
  }
`;

const HomeButtonWrapper = styled.div`
  width: 150px;
  height: 35px;
  margin-top: 20px;
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

const Component = ({}: Props): React.ReactElement => {
  const {
    useCurrentUser: { currentUser },
  } = useGlobalState();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { useResendVerification } = useAuthHooks();
  const { resendVerification } = useResendVerification();

  const { mutate: resendVerificationEmail, isLoading: isResending } =
    useMutation(
      () => {
        return resendVerification();
      },
      {
        onSuccess: () => {
          enqueueSnackbar('Email verification sent', {
            variant: 'success',
            anchorOrigin: { vertical: 'top', horizontal: 'right' },
            autoHideDuration: 5000,
          });
        },
        onError: (error) => {
          const err = error as AxiosError;
          const errMessage = err.response?.data as {
            message: string;
          };
          enqueueSnackbar(errMessage, {
            variant: 'error',
            anchorOrigin: { vertical: 'top', horizontal: 'right' },
            autoHideDuration: 5000,
          });
        },
      },
    );

  return (
    <Container>
      <VerifyWrapper>
        <VerifyTitle>Create an account</VerifyTitle>
        <StyledVerifyIcon />
        <VerifyPrompt>We have sent a confirmation email.</VerifyPrompt>
        <VerifyLabels>We sent an email to the following address</VerifyLabels>
        <VerifyLabels>
          Please authenticate your SK Tisa account to{' '}
          {currentUser?.user.details.email}
        </VerifyLabels>
        <div>
          <VerifyLabels>If you don't have an email</VerifyLabels>
          <StyledResendLink
            onClick={() => resendVerificationEmail()}
            isDisabled={isResending}
          >
            Resend verification email
          </StyledResendLink>
        </div>
        <HomeButtonWrapper>
          <StyledButton
            fullWidth
            type="contained"
            label="Home"
            onClick={() => navigate('/')}
          />
        </HomeButtonWrapper>
      </VerifyWrapper>
    </Container>
  );
};

export default Component;
