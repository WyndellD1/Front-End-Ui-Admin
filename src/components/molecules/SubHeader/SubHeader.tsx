import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../config';

const SubHeader = styled.div``;

const Title = styled.div`
  font-size: 24px;
  color: ${theme.colors.black01};
  font: normal normal bold 24px/35px Poppins;
`;

export type Props = {
  title: string | React.ReactElement;
  children?: React.ReactElement;
};

const Component = ({ title, children }: Props) => {
  return (
    <SubHeader>
      <Title>{title}</Title>
      {children}
    </SubHeader>
  );
};

export default Component;
