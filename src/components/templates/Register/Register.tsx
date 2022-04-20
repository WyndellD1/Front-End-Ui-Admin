import { ArrowBackIos } from '@mui/icons-material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../config';
import { SubHeader } from '../../molecules/SubHeader';
import { RegistrationForm } from '../../organisms/RegistrationForm';
import { SocialMedia } from '../../organisms/SocialMedia';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex: 1 1 40%;
  border-right: 1px solid red;
`;

const FormWrapper = styled.div`
  display: flex;
  flex: 1 1 40%;
  flex-direction: column;
  padding: 10em;
  gap: 1em;
`;

const SubTitle = styled.div`
  font-size: 14px;
  font: normal normal normal 14px/18px Montserrat;
  color: ${theme.colors.black01};
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

export type Props = {};

const Component = ({}: Props) => {
  const [, setValue] = useState<Date | null>(new Date());
  const handleChangeValue = (value: any) => {
    setValue(value);
  };

  return (
    <Container>
      <DetailsWrapper>Test</DetailsWrapper>
      <FormWrapper>
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
        <SubHeader title="Create Your Account">
          <SubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </SubTitle>
        </SubHeader>
        <SocialMedia />
        <HelperText>or create using our own form</HelperText>
        <RegistrationForm onChange={handleChangeValue} />;
      </FormWrapper>
    </Container>
  );
};

export default Component;
