import React, { useState } from 'react';
import styled from 'styled-components';
import { RegistrationForm } from '../../organisms/RegistrationForm';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex: 1 1 50%;
  border-right: 1px solid red;
`;

const FormWrapper = styled.div`
  display: flex;
  flex: 1 1 40%;
  padding: 10em;
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
        <RegistrationForm onChange={handleChangeValue} />;
      </FormWrapper>
    </Container>
  );
};

export default Component;
