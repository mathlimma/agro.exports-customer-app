import React from 'react';
import { Image } from 'react-native';
import backArrow from '../../assets/icons/back.png';
import frontArrow from '../../assets/icons/front.png';
import {
  Container,
  ContentView,
  ContentPhoto,
  ContentName,
  ArrowView,
  ArrowImage,
} from './styles';

export default function DemandItem({
  navigation,
  product_id: product,
  ece_id: ece,
  _id,
}) {
  function handleNavigation() {
    navigation.push('DemandDetails', { demand_id: _id });
  }

  return (
    <Container key={_id} onPress={handleNavigation}>
      <ContentView>
        <ContentPhoto
          source={{
            uri: product.photo_id.url,
          }}
        />
        <ContentName>{product.name}</ContentName>
      </ContentView>

      <ArrowView>
        <ArrowImage source={backArrow} />
        <ArrowImage source={frontArrow} />
      </ArrowView>

      <ContentView>
        <ContentPhoto
          source={{
            uri: ece.avatar_id.url,
          }}
        />
        <ContentName>{ece.name}</ContentName>
      </ContentView>
    </Container>
  );
}
