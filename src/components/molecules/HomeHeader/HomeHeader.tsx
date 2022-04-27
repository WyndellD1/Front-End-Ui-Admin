import React from 'react';
import styled from 'styled-components';
import PathImage from '../../../assets/images/homepage/section-01-hero/Path-2.png';
import { theme } from '../../../config';
import { Button } from '../../atoms/Button';

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const Wrapper = styled.div<{ backgroundImage?: string; height?: string }>`
  ${({ backgroundImage }) =>
    backgroundImage ? `background: url(${backgroundImage})` : ''};
  height: ${({ height }) => height || '600px'};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  display: flex;
  flex-direction: row;
  flex: 1;

  @media ${theme.breakpoints.mobile} {
    flex-direction: column-reverse;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  padding: 10em;

  @media ${theme.breakpoints.mobileAndTablet} {
    padding: 5em;
    gap: 0.5em;
  }
`;

const HeaderTextContainer = styled.div`
  font: normal normal bold 50px/76px Poppins;
  color: ${theme.colors.black01};
  text-align: right;

  @media ${theme.breakpoints.mobileAndTablet} {
    font: normal normal bold 30px/36px Poppins;
    text-align: center;
  }
`;

const HelperTextContainer = styled.div`
  font: normal normal bold 18px/27px Poppins;
  color: ${theme.colors.black01};
  text-align: right;

  @media ${theme.breakpoints.mobileAndTablet} {
    font: normal normal normal 14px/25px Montserrat;
    text-align: center;
  }
`;

const SubHeaderTextContainer = styled.div`
  font: normal normal normal 14px/30px Montserrat;
  color: ${theme.colors.black01};
  text-align: right;

  @media ${theme.breakpoints.mobileAndTablet} {
    font: normal normal normal 14px/25px Montserrat;
    text-align: center;
  }
`;

const ImportantHeader = styled.span`
  color: ${theme.colors.primary02};
`;

const StyledButton = styled(Button)`
  width: fit-content;
  margin-left: auto;
  margin-top: 1.5em;

  &&& {
    background-color: ${theme.colors.secondary};

    :hover {
      background-color: ${theme.colors.primary02};
    }
  }

  @media ${theme.breakpoints.mobileAndTablet} {
    margin: 1.5em auto 0 auto;
  }
`;

export type Props = {
  height?: string;
  helperText?: string;
  subHeaderText?: string;
};

const Component = ({ helperText, height, subHeaderText }: Props) => {
  return (
    <Container>
      <Wrapper backgroundImage={PathImage}>
        <ImageContainer />
        <DescriptionContainer>
          <HelperTextContainer>{helperText}</HelperTextContainer>
          <HeaderTextContainer>
            The Official <ImportantHeader>Youth Council</ImportantHeader> of
            Barangay Tisa
          </HeaderTextContainer>
          <SubHeaderTextContainer>{subHeaderText}</SubHeaderTextContainer>
          <StyledButton label="STAY UP TO DATE" />
        </DescriptionContainer>
      </Wrapper>
    </Container>
  );
};

export default Component;
