import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { theme } from '../../../config';
import queryKeys from '../../../constants/queryKeys';
import { useSitioHooks } from '../../../hooks/sitio';
import { CircularStepper } from '../../atoms/Stepper';
import {
  AdditionalInformation,
  EducationalBackground,
  EmergencyContact,
  PersonalInformation,
} from '../../organisms/RegistrationForm';
import { EducationStatusTypes } from '../../organisms/RegistrationForm/EducationalBackground';

const FormContainer = styled.div`
  gap: 1em;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const HeaderContainer = styled.div`
  @media ${theme.breakpoints.mobile} {
    display: flex;
    flex-direction: row;
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

const StyledSubHeader = styled.div`
  @media ${theme.breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
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

const MobileStepper = styled.div`
  display: none;
  @media ${theme.breakpoints.mobile} {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
`;

export type Props = {
  initialStep: number;
  handleEducationStatusChange: (event: React.ChangeEvent) => void;
  handleChangeYearAttended: (value: any) => void;
  handleChangeStep: (step: number) => void;
  formValues: {
    date: Date | null;
    educationStatus: EducationStatusTypes;
    yearAttended: Date | null;
  };
};

const Component = ({
  initialStep,
  handleChangeStep,
  handleEducationStatusChange,
  handleChangeYearAttended,
  formValues,
}: Props): React.ReactElement => {
  const { useFetchSitios } = useSitioHooks();
  const { fetchSitios } = useFetchSitios();

  const [step, setStep] = useState<number>(1);

  const handleClickNext = () => {
    if (initialStep < 4) {
      handleChangeStep(initialStep + 1);
    }
  };
  const handleClickPrevious = () => {
    if (initialStep > 0) {
      handleChangeStep(initialStep - 1);
    }
  };

  const { data: sitios, isFetching: isFetchingSitios } = useQuery(
    [queryKeys.FETCH_SITIOS],
    async () => {
      const response = await fetchSitios();
      return response.map((sitio) => {
        return {
          label: sitio.name,
          value: sitio.id,
        };
      });
    },
  );

  useEffect(() => {
    setStep(initialStep);
  }, [initialStep]);

  return (
    <>
      {step === 1 && (
        <FormCenteredContainer>
          <HeaderContainer>
            <StyledSubHeader>
              <StyledSubHeaderTitle>Personal Information</StyledSubHeaderTitle>
              <SubTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </SubTitle>
              <StyledSubHeaderSubTitle>
                Next: Educational Background
              </StyledSubHeaderSubTitle>
            </StyledSubHeader>
            <MobileStepper>
              <CircularStepper size={80} value={initialStep} totalItems={4} />
            </MobileStepper>
          </HeaderContainer>
          <PersonalInformation
            isFetchingSitios={isFetchingSitios}
            sitios={sitios || []}
            clickNext={handleClickNext}
            clickPrevious={handleClickPrevious}
          />
        </FormCenteredContainer>
      )}

      {step === 2 && (
        <FormCenteredContainer>
          <HeaderContainer>
            <StyledSubHeader>
              <StyledSubHeaderTitle>
                Educational Background
              </StyledSubHeaderTitle>
              <SubTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </SubTitle>
              <StyledSubHeaderSubTitle>
                Next: Additional Information
              </StyledSubHeaderSubTitle>
            </StyledSubHeader>
            <MobileStepper>
              <CircularStepper size={80} value={initialStep} totalItems={4} />
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

      {step === 3 && (
        <FormContainer>
          <HeaderContainer>
            <StyledSubHeader>
              <StyledSubHeaderTitle>
                Additional Information
              </StyledSubHeaderTitle>
              <SubTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </SubTitle>
              <StyledSubHeaderSubTitle>
                Next: Emergency Contact
              </StyledSubHeaderSubTitle>
            </StyledSubHeader>
            <MobileStepper>
              <CircularStepper size={80} value={initialStep} totalItems={4} />
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

      {step === 4 && (
        <FormCenteredContainer>
          <HeaderContainer>
            <StyledSubHeader>
              <StyledSubHeaderTitle>Emergency Contact</StyledSubHeaderTitle>
              <SubTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </SubTitle>
              <StyledSubHeaderSubTitle>
                Next: Emergency Contact
              </StyledSubHeaderSubTitle>
            </StyledSubHeader>
            <MobileStepper>
              <CircularStepper size={80} value={initialStep} totalItems={4} />
            </MobileStepper>
          </HeaderContainer>
          <EmergencyContact
            clickNext={handleClickNext}
            clickPrevious={handleClickPrevious}
          />
        </FormCenteredContainer>
      )}
    </>
  );
};

export default Component;
