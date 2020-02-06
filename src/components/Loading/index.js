import React from 'react';
import { Container, Loading, TextLoading } from './styles';

export default function App() {
  return (
    <Container>
      <Loading />
      <TextLoading>Carregando</TextLoading>
    </Container>
  );
}
