import React, { useState } from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import api from '../../services/api';

import AppBar from '../../components/AppBar';
import {
  Container,
  Content,
  TextContent,
  Input,
  InputWrapper,
  CreateSupplyButton,
  CreateSupplyButtonText,
  SupplyActiveButton,
  SupplyActiveButtonView,
  SupplyActiveButtonText,
  SupplyDisabledButton,
  SupplyDisabledButtonText,
  ProductButton,
  ProductImage,
  ProductTextView,
  ProductText,
} from './styles';

export default function CreateSupply({ navigation }) {
  const { item } = navigation.state.params;
  console.log(item);
  const [active, setActive] = useState(true);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState(null);
  const [price, setPrice] = useState('');
  const [product_id, setProduct_id] = useState('');

  async function getLocationAsync() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      Alert.alert(
        'Localização',
        'Permissão negada',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    }
    const locationReq = await Location.getCurrentPositionAsync({});
    setLocation(locationReq);
  }

  function ProductItem() {
    console.log(item);
    return (
      <ProductButton>
        <ProductImage source={{ uri: item.photo_id.url }} />
        <ProductTextView>
          <ProductText> {item.name}</ProductText>
        </ProductTextView>
      </ProductButton>
    );
  }

  async function handleCreateSupply() {
    await getLocationAsync();

    const priceNum = Number(price);
    const newSupply = {
      product_id,
      active,
      description,
      priceNum,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    const request = await api.post('/supply', newSupply);
  }

  return (
    <Container>
      <AppBar title="Criar Oferta" />
      <Content>
        <TextContent>Preencha os Dados</TextContent>
        {ProductItem()}
        <InputWrapper>
          <Input
            placeholder="Descrição"
            onChangeText={setDescription}
            value={description}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            placeholder="Preço (R$)"
            onChangeText={setPrice}
            value={price}
          />
        </InputWrapper>

        <SupplyActiveButtonView>
          <SupplyActiveButton onPress={() => setActive(true)} active={active}>
            <SupplyDisabledButtonText active={active}>
              Ativo
            </SupplyDisabledButtonText>
          </SupplyActiveButton>
          <SupplyDisabledButton
            onPress={() => setActive(false)}
            active={active}
          >
            <SupplyActiveButtonText active={active}>
              Inativo
            </SupplyActiveButtonText>
          </SupplyDisabledButton>
        </SupplyActiveButtonView>

        <CreateSupplyButton onPress={handleCreateSupply}>
          <CreateSupplyButtonText>Criar Oferta</CreateSupplyButtonText>
        </CreateSupplyButton>
      </Content>
    </Container>
  );
}
