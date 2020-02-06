import React from 'react';
import { Container, ProductNameText, ProductImage, StatusText } from './styles';

export default function SupplyItem({ product_id, active }) {
  return (
    <Container active={active}>
      <ProductNameText>{product_id.name}</ProductNameText>
      <ProductImage
        source={{
          uri: product_id.photo_id.url,
        }}
      />
      <StatusText>Ativo</StatusText>
    </Container>
  );
}
