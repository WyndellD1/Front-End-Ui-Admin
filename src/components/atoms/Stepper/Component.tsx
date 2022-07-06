import { Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../config';

const Container = styled.div<{ direction?: string }>`
  display: flex;
  gap: 0.5em;
  flex-direction: ${({ direction }) => (direction ? direction : 'column')};
`;

const Header = styled.div`
  font: normal normal 600 18px/30px Montserrat, SemiBold;
`;

export type Props = {
  steps: string[];
  activeStep: number;
  orientation?: 'horizontal' | 'vertical';
  sx?: Object;
  label?: string;
};

const Component = ({ steps, activeStep, orientation, sx, label }: Props) => {
  return (
    <Container>
      <Header>{label}</Header>
      <Stepper
        activeStep={activeStep}
        orientation={orientation}
        sx={{
          '& .MuiStepConnector-line': { minHeight: '50px' },
        }}
      >
        {steps.map((step, index) => (
          <Step
            sx={
              sx
                ? sx
                : {
                    '&&& .MuiStepLabel-label': { color: theme.colors.white },
                    '& .MuiSvgIcon-root.Mui-active': {
                      color: theme.colors.white,
                      border: 0,
                      '& .MuiStepIcon-text': { fill: theme.colors.black01 },
                    },
                    '& .MuiSvgIcon-root': {
                      color: 'transparent',
                      borderRadius: '50%',
                      border: `1px solid ${theme.colors.white}`,
                      '&.Mui-completed': {
                        color: theme.colors.white,
                        border: 0,
                      },
                    },
                  }
            }
            key={index}
          >
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
};

export default Component;
