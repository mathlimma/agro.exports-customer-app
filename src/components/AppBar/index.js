import React from 'react';

import { Container, TitleText } from './styles';

export default function AppBar({ title }) {
  return (
    <Container>
      <TitleText>{title}</TitleText>
    </Container>
  );
}
