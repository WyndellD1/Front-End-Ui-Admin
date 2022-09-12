import React from 'react';
import styled from 'styled-components';

import { YouthFooter } from '../../molecules/YouthFooter';
import { ManageAccountsCouncil } from '../../admintemplates/ManageAccountsCouncil';



const Container = styled.div``;

type Props = {};

const Component = ({}: Props) => {
  return (
    <Container>
    
      <ManageAccountsCouncil />
      <YouthFooter />
    </Container>
  );
};

export default Component;
