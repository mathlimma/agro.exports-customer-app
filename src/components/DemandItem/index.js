import React from 'react';
import {
  Container,
  ProductView,
  PhotoView,
  InfoView,
  NameText,
  ActionsView,
  ActionView,
  ActionViewWrapper,
  ActionIcon,
  HelpText,
} from './styles';
import trash from '../../assets/icons/trash.png';
import edit from '../../assets/icons/edit.png';

export default function DemandItem({ product_id, navigation, _id }) {
  function handlePress() {
    navigation.push('DemandSuppliesList', { demand_id: _id });
  }

  function handleEdit() {
    navigation.push('EditDemand', { _id });
  }

  return (
    <Container>
      <ProductView onPress={handlePress}>
        <PhotoView source={{ uri: product_id.photo_id.url }} />
        <InfoView>
          <NameText>{product_id.name}</NameText>
          <HelpText>
            Toque aqui para ver todas as ofertas dessa demanda
          </HelpText>
        </InfoView>
      </ProductView>

      <ActionsView>
        <ActionView>
          <ActionViewWrapper onPress={handleEdit}>
            <ActionIcon source={edit} />
          </ActionViewWrapper>
        </ActionView>

        <ActionView>
          <ActionIcon source={trash} />
        </ActionView>
      </ActionsView>
    </Container>
  );
}
