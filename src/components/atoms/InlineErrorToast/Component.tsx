import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../config';
import { Close } from '../Icons';

const Container = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.inlineErrorToastBg};
  border: thin solid ${theme.colors.inlineErrorToastBorder};
  border-radius: 4px;
`;

const ErrorText = styled.span`
  color: ${theme.colors.inlineErrorText};
  max-width: 388px;
  line-break: strict;
`;

const StyledClose = styled(Close)`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export type Props = {
  message: string;
  id?: string;
  onClose: (id?: string) => void;
};

const Component = ({
  message,
  id = '',
  onClose,
}: Props): React.ReactElement => {
  return (
    <Container>
      <ErrorText>{message}</ErrorText>
      <StyledClose onClick={() => onClose(id)} />
    </Container>
  );
};

export default Component;
