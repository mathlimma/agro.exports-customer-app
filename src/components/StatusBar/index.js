import React from 'react';
import { StatusBar } from 'react-native';
import { Container } from './styles';

export default function Statusbar({ backgroundColor }) {
  return (
    <Container backgroundColor={backgroundColor}>
      <StatusBar backgroundColor={backgroundColor} barStyle="light-content" />
    </Container>
  );
}
