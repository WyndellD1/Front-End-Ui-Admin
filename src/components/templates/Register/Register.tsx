import { ArrowBackIos } from '@mui/icons-material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../config';
import { Stepper } from '../../atoms/Stepper';
import { SubHeader } from '../../molecules/SubHeader';
import {
  EducationalBackground,
  PersonalInformation,
  RegistrationForm,
} from '../../organisms/RegistrationForm';
import Logo from '../../../assets/images/Logo.png';
import { SocialMedia } from '../../organisms/SocialMedia';
import { EducationStatusTypes } from '../../organisms/RegistrationForm/EducationalBackground';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

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

  @media ${theme.breakpoints.mobile} {
    padding: 1em;
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
`;

const StyledLink = styled(Link)`
  font: normal normal 600 12px/15px Montserrat;
  color: ${theme.colors.secondary};
`;

const HeaderContainer = styled.div`
  @media ${theme.breakpoints.mobile} {
    text-align: center;
  }
`;

const FormContainer = styled.div`
  gap: 1em;
  display: flex;
  flex-direction: column;
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
  const initialSteps = [
    'Personal Information',
    'Educational Background',
    'Additional Information',
    'Emergency Contact',
  ];
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
    setSteps(steps + 1);
  };
  const handleClickPrevious = () => {
    setSteps(steps - 1);
  };

  const handleEducationStatusChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;

    setFormValues({ ...formValues, educationStatus: target.value });
  };

  const handleChangeYearAttended = (value: any) => {
    setFormValues({ ...formValues, yearAttended: value });
  };

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
      <FormWrapper>
        {steps === 0 && (
          <FormContainer>
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
            <HeaderContainer>
              <SubHeader title="Create Your Account">
                <SubTitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </SubTitle>
              </SubHeader>
            </HeaderContainer>

            <SocialMedia />
            <HelperText>or create using our own form</HelperText>
            <RegistrationForm
              onRegister={handleClickNext}
              onChange={handleChangeBirthdate}
            />
          </FormContainer>
        )}
        {steps === 1 && (
          <FormContainer>
            <HeaderContainer>
              <SubHeader title="Personal Information">
                <SubTitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </SubTitle>
              </SubHeader>
            </HeaderContainer>
            <PersonalInformation
              clickNext={handleClickNext}
              clickPrevious={handleClickPrevious}
            />
          </FormContainer>
        )}
        {steps === 2 && (
          <FormContainer>
            <HeaderContainer>
              <SubHeader title="Educational Background">
                <SubTitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </SubTitle>
              </SubHeader>
            </HeaderContainer>
            <EducationalBackground
              onChangeDateAttended={handleChangeYearAttended}
              onChangeEducationStatus={handleEducationStatusChange}
              clickNext={handleClickNext}
              clickPrevious={handleClickPrevious}
              formValues={formValues}
            />
          </FormContainer>
        )}

        {steps === 3 && (
          <FormContainer>
            <HeaderContainer>
              <SubHeader title="Additional Information">
                <SubTitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </SubTitle>
              </SubHeader>
            </HeaderContainer>
            TODO
          </FormContainer>
        )}
      </FormWrapper>
    </Container>
  );
};

export default Component;
