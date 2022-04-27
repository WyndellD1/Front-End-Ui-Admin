import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../config';
import { HomeHeader } from '../../molecules/HomeHeader';
import CalendarImage from '../../../assets/images/homepage/section-2-the-council-goes-online/calendar.png';
import KabuhayanImage from '../../../assets/images/homepage/section-2-the-council-goes-online/kabuhayan.png';
import SingleEvent from '../../../assets/images/homepage/section-2-the-council-goes-online/single-event.png';
import PathImage from '../../../assets/images/homepage/section-01-hero/Path-2.png';
import {
  FirstCouncilor,
  SecondCouncilor,
  ThirdCouncilor,
  FourthCouncilor,
  FifthCouncilor,
  SixthCouncilor,
  SeventhCouncilor,
  EightCouncilor,
  NinthCouncilor,
  TenthCouncilor,
} from '../../../assets/images/homepage/section-04-councilors';
import { Button } from '../../atoms/Button';
import { EventCards } from '../../organisms/EventCards';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const InformationText = styled.div`
  display: flex;
  justify-content: center;
  font: normal normal normal 14px/30px Montserrat;
  margin: 0 auto;
  width: 900px;
  text-align: center;

  @media ${theme.breakpoints.mobileAndTablet} {
    width: auto;
    padding: 1em;
  }
`;

const CouncilInformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5em;
  margin-bottom: 5em;

  @media ${theme.breakpoints.mobileAndTablet} {
    flex-direction: column;
    gap: 1.5em;
    padding: 1em;
  }
`;

const CouncilInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 40%;
  gap: 0.5em;
`;

const CouncilInformationHeaderText = styled.div`
  font: normal normal bold 24px/35px Poppins;
`;

const CouncilInformationHelperText = styled.div`
  font: normal normal bold 18px/27px Poppins;
  color: ${theme.colors.primary02};

  @media ${theme.breakpoints.mobileAndTablet} {
    font: normal normal bold 16px/25px Poppins;
    text-align: center;
  }
`;

const CouncilInformationSubText = styled.div`
  font: normal normal normal 14px/30px Montserrat;
  color: ${theme.colors.black01};

  @media ${theme.breakpoints.mobileAndTablet} {
    font: normal normal normal 14px/27px Montserrat;
    text-align: center;
  }
`;

const CouncilInformationImageContainer = styled.div`
  display: flex;
  flex: 1;
  flex: 1 1 100%;
  justify-content: center;
  position: relative;

  @media ${theme.breakpoints.mobileAndTablet} {
    justify-content: flex-start;
    margin-top: 1em;
    margin-bottom: 7em;
  }
`;

const CouncilImageCalendar = styled.div<{ img: string }>`
  width: 530px;
  height: 330px;
  box-shadow: 0px 5px 20px #0000000d;
  border-radius: 20px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media ${theme.breakpoints.mobile} {
    width: 270px;
    height: 180px;
  }

  @media ${theme.breakpoints.tablet} {
    width: 530px;
    height: 330px;
  }
`;

const CouncilImageKabuhayanContainer = styled.div<{ img: string }>`
  width: 200px;
  height: 300px;
  box-shadow: 0px 5px 20px #0000000d;
  border-radius: 20px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  position: absolute;
  top: 55%;
  left: 65%;

  @media ${theme.breakpoints.mobile} {
    width: 115px;
    height: 180px;
  }

  @media ${theme.breakpoints.tablet} {
    width: 200px;
    height: 300px;
  }
`;

const CouncilButtonWrapper = styled.div<{ isMobile?: boolean }>`
  display: ${({ isMobile }) => (!isMobile ? 'flex' : 'none')};
  flex-direction: row;
  flex-wrap: wrap-reverse;
  gap: 1em;

  button {
    flex: 1;

    :hover {
      :nth-child(1) {
        background-color: ${theme.colors.primary02};
      }
    }

    :nth-child(1) {
      background-color: ${theme.colors.secondary};
      border: 0;
      color: ${theme.colors.white};
    }

    :nth-child(2) {
      border: 1px solid ${theme.colors.secondary};
      color: ${theme.colors.secondary};
    }
  }

  @media ${theme.breakpoints.mobileAndTablet} {
    display: ${({ isMobile }) => (isMobile ? 'flex' : 'none')};
    button {
      flex: 1 1 100%;
    }
  }
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5em;
  gap: 1em;
  position: relative;
`;

const EventInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const EventSeeMore = styled.div<{ bgImage?: string }>`
  display: flex;
  justify-content: center;
  margin-top: 3em;

  button {
    width: 180px;
    height: 50px;
    color: ${theme.colors.secondary};
    border: 2px solid ${theme.colors.secondary};
  }
`;

const YouthContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5em;

  @media ${theme.breakpoints.mobileAndTablet} {
    flex-direction: column;
    gap: 1.5em;
    padding: 1em;
  }
`;

const YouthInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const YouthProfileContainer = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 2em auto;
`;

const StyledYouthImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 20px;
`;

const HelperTextCouncil = styled.div`
  text-align: center;
  text-decoration: underline;
  font: normal normal 600 12px/30px Montserrat;
  color: ${theme.colors.secondary};
`;

export type Props = {};

const Component = ({}: Props) => {
  const mockCardData = [
    {
      label: 'Card 1',
      img: FourthCouncilor,
      date: new Date(),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
    },
    {
      label: 'Card 2',
      img: FourthCouncilor,
      date: new Date(),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
    },
    {
      label: 'Card 3',
      img: SingleEvent,
      date: new Date(),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
    },
    {
      label: 'Card 4',
      img: SingleEvent,
      date: new Date(),
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
    },
  ];

  return (
    <Container>
      <HomeHeader
        helperText="Sangguniang Kabataan - Tisa"
        subHeaderText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <InformationText>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat."
      </InformationText>
      <CouncilInformationContainer>
        <CouncilInformationWrapper>
          <CouncilInformationHelperText>
            e-Sangguniang Kabataan
          </CouncilInformationHelperText>
          <CouncilInformationHeaderText>
            The Council Goes Online
          </CouncilInformationHeaderText>
          <CouncilInformationSubText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </CouncilInformationSubText>
          <CouncilButtonWrapper>
            <Button label="GET YOUR PROFILE" />
            <Button type="outlined" label="LEARN MORE" />
          </CouncilButtonWrapper>
        </CouncilInformationWrapper>
        <CouncilInformationImageContainer>
          <div>
            <CouncilImageCalendar img={CalendarImage} />
            <CouncilImageKabuhayanContainer img={KabuhayanImage} />
          </div>
        </CouncilInformationImageContainer>
        <CouncilButtonWrapper isMobile>
          <Button label="GET YOUR PROFILE" />
          <Button type="outlined" label="LEARN MORE" />
        </CouncilButtonWrapper>
      </CouncilInformationContainer>
      <EventContainer>
        <EventInformationContainer>
          <CouncilInformationHelperText>
            Upcoming Events
          </CouncilInformationHelperText>
          <CouncilInformationHeaderText>
            Events for the Youth
          </CouncilInformationHeaderText>
          <CouncilInformationSubText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </CouncilInformationSubText>
        </EventInformationContainer>
        <EventCards
          imgHeight="200"
          cardWidth="340"
          items={mockCardData}
          orientation="horizontal"
        />

        <EventSeeMore bgImage={PathImage}>
          <Button label="See More" type="outlined" />
        </EventSeeMore>
      </EventContainer>

      <YouthContainer>
        <YouthInformationContainer>
          <CouncilInformationHelperText>
            Youth Council
          </CouncilInformationHelperText>
          <CouncilInformationHeaderText>
            Members of Sangguniang Kabataan - Tisa
          </CouncilInformationHeaderText>
          <CouncilInformationSubText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </CouncilInformationSubText>
          <YouthProfileContainer>
            <StyledYouthImage src={FirstCouncilor} />
            <StyledYouthImage src={SecondCouncilor} />
            <StyledYouthImage src={ThirdCouncilor} />
            <StyledYouthImage src={FourthCouncilor} />
            <StyledYouthImage src={FifthCouncilor} />
            <StyledYouthImage src={SixthCouncilor} />
            <StyledYouthImage src={SeventhCouncilor} />
            <StyledYouthImage src={NinthCouncilor} />
            <StyledYouthImage src={TenthCouncilor} />
          </YouthProfileContainer>

          <HelperTextCouncil>Know more about the council.</HelperTextCouncil>
        </YouthInformationContainer>
      </YouthContainer>
    </Container>
  );
};

export default Component;
