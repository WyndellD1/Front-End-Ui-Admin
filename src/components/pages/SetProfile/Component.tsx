import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../config';
import { Stepper } from '../../atoms/Stepper';
import { EducationStatusTypes } from '../../organisms/RegistrationForm/EducationalBackground';
import { SetProfile } from '../../templates/SetProfile';

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

const InformationContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
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

type Props = {};

const Component = ({}: Props) => {
  const initialSteps = [
    'Personal Information',
    'Educational Background',
    'Additional Information',
    'Emergency Contact',
  ];

  const [formValues, setFormValues] = useState<{
    date: Date | null;
    educationStatus: EducationStatusTypes;
    yearAttended: Date | null;
  }>({
    date: new Date(),
    educationStatus: 'student',
    yearAttended: new Date(),
  });

  const location = useLocation();
  const [steps, setSteps] = useState<number>(1);

  const handleEducationStatusChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;

    setFormValues({ ...formValues, educationStatus: target.value });
  };

  const handleChangeYearAttended = (value: any) => {
    setFormValues({ ...formValues, yearAttended: value });
  };

  const handleChangeStep = (step: number) => {
    if (step >= 1) {
      setSteps(step);
    }
  };

  useEffect(() => {
    const locationState = location.state as { [key: string]: any };
    if (locationState.step) {
      setSteps(locationState.step);
    }
  }, [location.state]);

  return (
    <Container>
      <DetailsWrapper>
        <InformationContainer>
          <Stepper
            label="Account Registration"
            activeStep={steps - 1}
            steps={initialSteps}
            orientation="vertical"
          />
        </InformationContainer>
      </DetailsWrapper>

      <FormWrapper>
        <SetProfile
          initialStep={steps}
          formValues={formValues}
          handleEducationStatusChange={handleEducationStatusChange}
          handleChangeYearAttended={handleChangeYearAttended}
          handleChangeStep={handleChangeStep}
        />
      </FormWrapper>
    </Container>
  );
};

export default Component;
