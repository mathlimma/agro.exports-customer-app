import React from 'react';
import {
  Container,
  ProductView,
  PhotoView,
  InfoView,
  NameText,
  ActionsView,
  ActionView,
  ActionIcon,
} from './styles';
import trash from '../../assets/icons/trash.png';
import edit from '../../assets/icons/edit.png';

export default function DemandItem({ item }) {
  return (
    <Container>
      <ProductView>
        <PhotoView source={{ uri: item.product_id.photo_id.url }} />
        <InfoView>
          <NameText>{item.product_id.name}</NameText>
        </InfoView>
      </ProductView>

      <ActionsView>
        <ActionView>
          <ActionIcon source={edit} />
        </ActionView>

        <ActionView>
          <ActionIcon source={trash} />
        </ActionView>
      </ActionsView>
    </Container>
  );
}
