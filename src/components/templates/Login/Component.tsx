import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Divider } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { theme } from '../../../config';
import Logo from '../../../assets/images/Logo.png';
import { SubHeader } from '../../molecules/SubHeader';
import { LoginForm } from '../../organisms/LoginForm';
import { SocialMedia } from '../../organisms/SocialMedia';
import { useAuthHooks } from '../../../hooks/auth';
import { useMutation } from 'react-query';
import { LoginSchema } from './validation';
import { AxiosError } from 'axios';

export type Props = {};

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex: 1 1 40%;
  background: transparent
    linear-gradient(
      180deg,
      ${theme.colors.secondary} 0%,
      ${theme.colors.primary02} 100%
    )
    0% 0% no-repeat padding-box;
`;

const InformationContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
`;

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  gap: 1em;
`;

const LogoIcon = styled.img`
  height: 100px;
  width: 100px;
  margin-bottom: 2em;
`;

const InformationHeader = styled.div`
  font: normal normal bold 50px/76px Poppins;
`;

const InformationSubHeader = styled.div`
  font: normal normal normal 14px/30px Montserrat;
`;

const FormWrapper = styled.div`
  display: flex;
  flex: 1 1 40%;
  flex-direction: column;
  padding: 5em 10em;
  gap: 1em;
  justify-content: center;
  overflow: auto;
`;

const FormCenteredContainer = styled.div`
  gap: 1em;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const HomepageLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${theme.colors.secondary};
  align-items: center;
  flex: 1;

  svg {
    font-size: 12px;
  }
`;

const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;

  @media ${theme.breakpoints.mobile} {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  font: normal normal 600 12px/15px Montserrat;
  color: ${theme.colors.secondary};
`;

const LinkContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  gap: 0.5em;
`;

const HelperText = styled.div`
  font-size: 12px;
  font: normal normal normal 12px/15px Montserrat;
  color: ${theme.colors.black01};
  display: flex;
  justify-content: center;
`;

const MainRegistrationHeaderContainer = styled.div`
  @media ${theme.breakpoints.mobile} {
    text-align: center;
  }
`;

const SubTitle = styled.div`
  font-size: 14px;
  font: normal normal normal 14px/18px Montserrat;
  color: ${theme.colors.black01};

  @media ${theme.breakpoints.mobile} {
    display: none;
  }
`;

const AdditionalInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
`;

const Component = ({}: Props) => {
  const initialValue = {
    email: '',
    password: '',
    remember: false,
  };

  const { useLogin } = useAuthHooks();
  const { login } = useLogin();
  const [apiError, setApiError] = useState('');

  const { mutate: loginMutation, isLoading: isLoggingIn } = useMutation(
    (payload: { email: string; password: string; remember: boolean }) => {
      const { email, password, remember } = payload;
      return login(email, password, remember);
    },
    {
      onError: (error) => {
        const err = error as AxiosError;
        const errMessage = err.response?.data as {
          message: string;
          status_code: number;
        };
        setApiError(errMessage.message);
      },
    },
  );

  const handleSubmitData = useCallback(
    (values: { email: string; password: string; remember: boolean }) => {
      loginMutation({
        ...values,
      });
    },
    [],
  );

  return (
    <Container>
      <Formik
        enableReinitialize
        validationSchema={LoginSchema}
        initialValues={initialValue}
        onSubmit={handleSubmitData}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          touched,
          setFieldTouched,
        }): React.ReactElement => {
          return (
            <FormWrapper>
              <FormCenteredContainer>
                <NavigationBar>
                  <HomepageLinkContainer>
                    <ArrowBackIos />
                    <StyledLink to="/home">Return to Homepage</StyledLink>
                  </HomepageLinkContainer>
                </NavigationBar>
                <MainRegistrationHeaderContainer>
                  <SubHeader title="Login">
                    <SubTitle>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </SubTitle>
                  </SubHeader>
                </MainRegistrationHeaderContainer>

                <LoginForm
                  setFieldTouched={setFieldTouched}
                  errors={{
                    email: (touched.email && errors.email) || '',
                    apiError,
                  }}
                  disabled={isLoggingIn}
                  onChangeEmail={handleChange('email')}
                  onChangePassword={handleChange('password')}
                  onLogin={handleSubmit}
                  onBlurEmail={handleBlur('email')}
                />
                <AdditionalInformation>
                  <LinkContainer>
                    <StyledLink to="/">Forgot Password?</StyledLink>
                  </LinkContainer>
                  <HelperText>
                    or log in with your social media account
                  </HelperText>
                  <SocialMedia />

                  <Divider />
                  <LinkContainer>
                    <HelperText>Don't have an account?</HelperText>
                    <StyledLink to="/">Create one now!</StyledLink>
                  </LinkContainer>
                </AdditionalInformation>
              </FormCenteredContainer>
            </FormWrapper>
          );
        }}
      </Formik>
      <DetailsWrapper>
        <InformationContainer>
          <InformationWrapper>
            <LogoIcon src={Logo} />
            <InformationHeader>
              Get the latest news and events for the Youth.
            </InformationHeader>
            <InformationSubHeader>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </InformationSubHeader>
          </InformationWrapper>
        </InformationContainer>
      </DetailsWrapper>
    </Container>
  );
};

export default Component;
