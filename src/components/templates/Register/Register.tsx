import { ArrowBackIos } from '@mui/icons-material';
import { Divider } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Formik } from 'formik';
import { useMutation } from 'react-query';
import { theme } from '../../../config';
import { CircularStepper, Stepper } from '../../atoms/Stepper';
import { SubHeader } from '../../molecules/SubHeader';
import {
  AdditionalInformation,
  EducationalBackground,
  EmergencyContact,
  PersonalInformation,
  RegistrationForm,
} from '../../organisms/RegistrationForm';
import Logo from '../../../assets/images/Logo.png';
import { SocialMedia } from '../../organisms/SocialMedia';
import { EducationStatusTypes } from '../../organisms/RegistrationForm/EducationalBackground';
import { useAuthHooks } from '../../../hooks/auth';
import { SignUpValues } from './types';

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

const HeaderContainer = styled.div`
  @media ${theme.breakpoints.mobile} {
    display: flex;
    flex-direction: row;
  }
`;

const FormContainer = styled.div`
  gap: 1em;
  display: flex;
  flex-direction: column;
  height: 100%;
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

const StyledSubHeader = styled.div`
  @media ${theme.breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const MobileStepper = styled.div`
  display: none;
  @media ${theme.breakpoints.mobile} {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
`;

const StyledSubHeaderTitle = styled.div`
  font-size: 24px;
  color: ${theme.colors.black01};
  font: normal normal bold 24px/35px Poppins;

  @media ${theme.breakpoints.mobile} {
    font: normal normal bold 18px/27px Poppins;
  }
`;

const StyledSubHeaderSubTitle = styled.div`
  font-size: 14px;
  font: normal normal normal 14px/18px Montserrat;
  color: ${theme.colors.black01};
  display: none;

  @media ${theme.breakpoints.mobile} {
    font: normal normal normal 12px/15px Montserrat;
    display: block;
  }
`;

const InformationHeader = styled.div`
  font: normal normal bold 50px/76px Poppins;
`;

const InformationSubHeader = styled.div`
  font: normal normal normal 14px/30px Montserrat;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export type Props = {};

const Component = ({}: Props) => {
  const initialSteps = [
    'Personal Information',
    'Educational Background',
    'Additional Information',
    'Emergency Contact',
  ];

  const initialValue = {
    firstName: '',
    middleName: '',
    lastName: '',
    birthdate: new Date(),
    phoneNumber: '',
    gender: '',
    email: '',
    role: '',
    password: '',
  };

  const { useSignUp } = useAuthHooks();
  const { signUpUser } = useSignUp();

  const [steps, setSteps] = useState<number>(0);
  const [formValues, setFormValues] = useState<{
    date: Date | null;
    educationStatus: EducationStatusTypes;
    yearAttended: Date | null;
  }>({
    date: new Date(),
    educationStatus: 'student',
    yearAttended: new Date(),
  });

  const handleChangeBirthdate = (value: any) => {
    setFormValues({ ...formValues, date: value });
  };

  const handleClickNext = () => {
    if (steps < 4) {
      setSteps(steps + 1);
    }
  };
  const handleClickPrevious = () => {
    if (steps > 0) {
      setSteps(steps - 1);
    }
  };

  const handleEducationStatusChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;

    setFormValues({ ...formValues, educationStatus: target.value });
  };

  const handleChangeYearAttended = (value: any) => {
    setFormValues({ ...formValues, yearAttended: value });
  };

  const { mutate: signUpMutation, isLoading: isSigningUp } = useMutation(
    (payload: { data: SignUpValues; password: string }) => {
      const { data, password } = payload;
      return signUpUser(data, password);
    },
    {
      onSuccess: (data) => console.log(data),
      onError: (error) => console.log(error),
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
          {steps === 0 ? (
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
          ) : (
            <Stepper
              label="Account Registration"
              activeStep={steps - 1}
              steps={initialSteps}
              orientation="vertical"
            />
          )}
        </InformationContainer>
      </DetailsWrapper>
      <Formik
        enableReinitialize
        initialValues={initialValue}
        onSubmit={handleSubmitData}
      >
        {({
          handleSubmit,
          handleChange,
          setFieldValue,
          values,
        }): React.ReactElement => {
          return (
            <FormWrapper>
              {steps === 0 && (
                <FormCenteredContainer>
                  <NavigationBar>
                    <HomepageLinkContainer>
                      <ArrowBackIos />
                      <StyledLink to="/home">Return to Homepage</StyledLink>
                    </HomepageLinkContainer>
                    <LoginLinkContainer>
                      <HelperText>Already have an account?</HelperText>
                      <StyledLink to="/">Login</StyledLink>
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
                    onChangeGender={handleChange('gender')}
                    onChangeFirstName={handleChange('firstName')}
                    onChangeLastName={handleChange('lastName')}
                    onChangeMiddleName={handleChange('middleName')}
                    onChangePassword={handleChange('password')}
                    onChangePhone={handleChange('phoneNumber')}
                    onChangeEmail={handleChange('email')}
                    onChangeBirthdate={setFieldValue}
                    onRegister={handleSubmit}
                    birthDate={values.birthdate}
                    onChange={handleChangeBirthdate}
                  />
                  <MobileNavigation>
                    <Divider />
                    <LoginLinkContainer>
                      <HelperText>Already have an account?</HelperText>
                      <StyledLink to="/">Login</StyledLink>
                    </LoginLinkContainer>
                  </MobileNavigation>
                </FormCenteredContainer>
              )}
              {steps === 1 && (
                <FormCenteredContainer>
                  <HeaderContainer>
                    <StyledSubHeader>
                      <StyledSubHeaderTitle>
                        Personal Information
                      </StyledSubHeaderTitle>
                      <SubTitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                      </SubTitle>
                      <StyledSubHeaderSubTitle>
                        Next: Educational Background
                      </StyledSubHeaderSubTitle>
                    </StyledSubHeader>
                    <MobileStepper>
                      <CircularStepper
                        size={80}
                        value={steps}
                        totalItems={initialSteps.length}
                      />
                    </MobileStepper>
                  </HeaderContainer>
                  <PersonalInformation
                    clickNext={handleClickNext}
                    clickPrevious={handleClickPrevious}
                  />
                </FormCenteredContainer>
              )}
              {steps === 2 && (
                <FormCenteredContainer>
                  <HeaderContainer>
                    <StyledSubHeader>
                      <StyledSubHeaderTitle>
                        Educational Background
                      </StyledSubHeaderTitle>
                      <SubTitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                      </SubTitle>
                      <StyledSubHeaderSubTitle>
                        Next: Additional Information
                      </StyledSubHeaderSubTitle>
                    </StyledSubHeader>
                    <MobileStepper>
                      <CircularStepper
                        size={80}
                        value={steps}
                        totalItems={initialSteps.length}
                      />
                    </MobileStepper>
                  </HeaderContainer>
                  <EducationalBackground
                    onChangeDateAttended={handleChangeYearAttended}
                    onChangeEducationStatus={handleEducationStatusChange}
                    clickNext={handleClickNext}
                    clickPrevious={handleClickPrevious}
                    formValues={formValues}
                  />
                </FormCenteredContainer>
              )}

              {steps === 3 && (
                <FormContainer>
                  <HeaderContainer>
                    <StyledSubHeader>
                      <StyledSubHeaderTitle>
                        Additional Information
                      </StyledSubHeaderTitle>
                      <SubTitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                      </SubTitle>
                      <StyledSubHeaderSubTitle>
                        Next: Emergency Contact
                      </StyledSubHeaderSubTitle>
                    </StyledSubHeader>
                    <MobileStepper>
                      <CircularStepper
                        size={80}
                        value={steps}
                        totalItems={initialSteps.length}
                      />
                    </MobileStepper>
                  </HeaderContainer>
                  <AdditionalInformation
                    onChangeDateAttended={handleChangeYearAttended}
                    onChangeEducationStatus={handleEducationStatusChange}
                    clickNext={handleClickNext}
                    clickPrevious={handleClickPrevious}
                    formValues={formValues}
                  />
                </FormContainer>
              )}

              {steps === 4 && (
                <FormCenteredContainer>
                  <HeaderContainer>
                    <StyledSubHeader>
                      <StyledSubHeaderTitle>
                        Emergency Contact
                      </StyledSubHeaderTitle>
                      <SubTitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                      </SubTitle>
                      <StyledSubHeaderSubTitle>
                        Next: Emergency Contact
                      </StyledSubHeaderSubTitle>
                    </StyledSubHeader>
                    <MobileStepper>
                      <CircularStepper
                        size={80}
                        value={steps}
                        totalItems={initialSteps.length}
                      />
                    </MobileStepper>
                  </HeaderContainer>
                  <EmergencyContact
                    clickNext={handleClickNext}
                    clickPrevious={handleClickPrevious}
                  />
                </FormCenteredContainer>
              )}
            </FormWrapper>
          );
        }}
      </Formik>
    </Container>
  );
};

export default Component;
