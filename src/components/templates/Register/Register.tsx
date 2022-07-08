import { ArrowBackIos } from '@mui/icons-material';
import { Divider } from '@mui/material';
import React, { useCallback, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Formik, FormikProps } from 'formik';
import { useMutation } from 'react-query';
import { theme } from '../../../config';
import { SubHeader } from '../../molecules/SubHeader';
import { RegistrationForm } from '../../organisms/RegistrationForm';
import Logo from '../../../assets/images/Logo.png';
import { SocialMedia } from '../../organisms/SocialMedia';
import { useAuthHooks } from '../../../hooks/auth';
import { SignUpValues } from './types';
import { RegisterSchema } from './validation';
import { AxiosResponse } from 'axios';

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;

  @media ${theme.breakpoints.mobile} {
    margin-top: 3em;
  }
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

  @media ${theme.breakpoints.mobileAndTablet} {
    display: none;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex: 1 1 40%;
  flex-direction: column;
  padding: 5em 10em;
  gap: 1em;
  justify-content: center;
  overflow: auto;

  @media ${theme.breakpoints.mobile} {
    padding: 1em;
    justify-content: flex-start;
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

const HelperText = styled.div`
  font-size: 12px;
  font: normal normal normal 12px/15px Montserrat;
  color: ${theme.colors.black01};
  display: flex;
  justify-content: center;
`;

const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;

  @media ${theme.breakpoints.mobile} {
    display: none;
  }
`;

const MobileNavigation = styled.div`
  display: flex;
  flex-direction: column;

  @media ${theme.breakpoints.mobile} {
    display: flex;
  }
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

const LoginLinkContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 0.5em;

  @media ${theme.breakpoints.mobile} {
    margin-top: 1em;
    flex-direction: column;
    align-items: center;
    gap: 0.2em;
  }
`;

const StyledLink = styled(Link)`
  font: normal normal 600 12px/15px Montserrat;
  color: ${theme.colors.secondary};
`;

const MainRegistrationHeaderContainer = styled.div`
  @media ${theme.breakpoints.mobile} {
    text-align: center;
  }
`;

const FormCenteredContainer = styled.div`
  gap: 1em;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  @media ${theme.breakpoints.mobile} {
    justify-content: flex-start;
  }
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

export type Props = {};

const Component = ({}: Props) => {
  const initialValue = {
    firstName: '',
    middleName: '',
    lastName: '',
    birthdate: new Date(),
    phoneNumber: '',
    gender: 'male',
    email: '',
    role: '',
    password: '',
  };

  const formikRef = useRef<FormikProps<any>>(null);

  const navigate = useNavigate();
  const { useSignUp } = useAuthHooks();
  const { signUpUser } = useSignUp();
  const [serverErrors, setServerErrors] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    phoneNumber: '',
    gender: '',
    email: '',
    role: '',
    password: '',
  });

  const { mutate: signUpMutation, isLoading: isSigningUp } = useMutation(
    (payload: { data: SignUpValues; password: string }) => {
      const { data, password } = payload;
      return signUpUser(data, password);
    },
    {
      onSuccess: () => {
        navigate('/verify-email');
      },
      onError: (error: { response: AxiosResponse }) => {
        if (error.response?.status === 422) {
          setServerErrors({
            firstName: error.response?.data?.errors?.userFirstName,
            lastName: error.response?.data?.errors?.userLastName,
            gender: error.response?.data?.errors?.userGender,
            password: error.response?.data?.errors?.password,
            email: error.response?.data?.errors?.email,
            phoneNumber: error.response?.data?.errors?.userPhoneNum,
            role: '',
            middleName: error.response?.data?.errors?.userMiddleName,
          });
        }
      },
    },
  );

  const handleSubmitData = useCallback(
    (values: SignUpValues & { password: string }): void => {
      const { password, ...data } = values;

      signUpMutation({ data, password });
    },
    [],
  );

  return (
    <Container>
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
      <Formik
        innerRef={formikRef}
        initialValues={initialValue}
        onSubmit={handleSubmitData}
        validationSchema={RegisterSchema}
      >
        {({
          handleSubmit,
          handleChange,
          setFieldValue,
          setFieldTouched,
          errors,
          values,
          touched,
          isValid,
        }): React.ReactElement => {
          const combinedErrors = { ...serverErrors, ...errors };
          return (
            <FormWrapper>
              <FormCenteredContainer>
                <NavigationBar>
                  <HomepageLinkContainer>
                    <ArrowBackIos />
                    <StyledLink to="/home">Return to Homepage</StyledLink>
                  </HomepageLinkContainer>
                  <LoginLinkContainer>
                    <HelperText>Already have an account?</HelperText>
                    <StyledLink to="/login">Login</StyledLink>
                  </LoginLinkContainer>
                </NavigationBar>
                <MainRegistrationHeaderContainer>
                  <SubHeader title="Create Your Account">
                    <SubTitle>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </SubTitle>
                  </SubHeader>
                </MainRegistrationHeaderContainer>

                <SocialMedia />
                <HelperText>or create using our own form</HelperText>
                <RegistrationForm
                  initialValue={values}
                  birthDate={values.birthdate}
                  errors={{
                    firstName:
                      (touched.firstName && combinedErrors.firstName) || '',
                    middleName:
                      (touched.middleName && combinedErrors.middleName) || '',
                    phoneNumber:
                      (touched.phoneNumber && combinedErrors.phoneNumber) || '',
                    email: (touched.email && combinedErrors.email) || '',
                    gender: (touched.gender && combinedErrors.gender) || '',
                    lastName:
                      (touched.lastName && combinedErrors.lastName) || '',
                    password:
                      (touched.password && combinedErrors.password) || '',
                  }}
                  setFieldTouched={setFieldTouched}
                  onChangeGender={handleChange('gender')}
                  onChangeFirstName={handleChange('firstName')}
                  onChangeLastName={handleChange('lastName')}
                  onChangeMiddleName={handleChange('middleName')}
                  onChangePassword={handleChange('password')}
                  onChangePhone={handleChange('phoneNumber')}
                  onChangeEmail={handleChange('email')}
                  onChangeBirthdate={setFieldValue}
                  onRegister={handleSubmit}
                  isLoading={isSigningUp}
                  disabled={!isValid}
                />
                <MobileNavigation>
                  <Divider />
                  <LoginLinkContainer>
                    <HelperText>Already have an account?</HelperText>
                    <StyledLink to="/">Login</StyledLink>
                  </LoginLinkContainer>
                </MobileNavigation>
              </FormCenteredContainer>
            </FormWrapper>
          );
        }}
      </Formik>
    </Container>
  );
};

export default Component;
