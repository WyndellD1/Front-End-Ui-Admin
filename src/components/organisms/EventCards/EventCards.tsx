import React from 'react';
import styled from 'styled-components';
import { Card } from '../../molecules/Card';
import { theme } from '../../../config';

const Container = styled.div<{ horizontal?: boolean }>`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
  gap: 1em;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CardTitle = styled.div`
  font: normal normal bold 16px/25px Poppins;
  color: ${theme.colors.black02};
`;

const CardDate = styled.div`
  font: normal normal 600 12px/30px Montserrat;
  color: ${theme.colors.secondary};
`;

const CardContent = styled.div`
  font: normal normal normal 14px/30px Montserrat;
`;

type EventItem = {
  label: string;
  img?: string;
  date?: string | Date;
  content?: string;
};

export type Props = {
  orientation: 'vertical' | 'horizontal';
  items: EventItem[];
  imgHeight?: string;
  cardWidth?: string;
};

const Component = ({ orientation, items, imgHeight, cardWidth }: Props) => {
  return (
    <Container horizontal={orientation === 'horizontal'}>
      {items.map((item) => (
        <Card imgHeight={imgHeight} width={cardWidth} img={item.img}>
          <CardTitle>{item.label}</CardTitle>
          <CardDate>{item.date?.toLocaleString()}</CardDate>
          <CardContent>{item.content}</CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Component;
