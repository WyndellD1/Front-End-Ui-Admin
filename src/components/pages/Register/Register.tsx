import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useWindowResize from '../../../utils/useWindowResize';
import { Appbar } from '../../molecules/Appbar';
import { Register } from '../../templates/Register';

const Container = styled.div``;

type Props = {};

const Component = ({}: Props) => {
  const windowResize = useWindowResize();

  const [appbarVisibility, setAppbarVisibility] = useState<boolean>(false);

  useEffect(() => {
    if (windowResize?.width < 1055) {
      setAppbarVisibility(true);
    } else {
      setAppbarVisibility(false);
    }
  }, [windowResize]);

  return (
    <Container>
      <Appbar isVisible={appbarVisibility} />
      <Register />
    </Container>
  );
};

export default Component;
