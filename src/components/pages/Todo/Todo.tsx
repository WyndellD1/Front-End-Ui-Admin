import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Appbar } from '../../molecules/Appbar';

const Container = styled.div``;

type Props = {};

const Component = ({}: Props) => {
  return (
    <Container>
      <Appbar />
      <div>
        <h1>Todo page</h1>
      </div>
    </Container>
  );
};

export default Component;
