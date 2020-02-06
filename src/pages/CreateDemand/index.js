import React, { useState } from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import api from '../../services/api';
import Check from '../../components/Check';
import AppBar from '../../components/AppBar';
import {
  Container,
  Content,
  TextContent,
  Input,
  InputWrapper,
  CreateDemandButton,
  CreateDemandButtonText,
  ProductButton,
  ProductImage,
  ProductTextView,
  ProductText,
} from './styles';

export default function CreateDemand({ navigation }) {
  const { item } = navigation.state.params;
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [distance, setDistance] = useState('');
  const [check, setCheck] = useState(false);
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
    return locationReq;
  }

  function ProductItem() {
    return (
      <ProductButton>
        <ProductImage source={{ uri: item.photo_id.url }} />
        <ProductTextView>
          <ProductText> {item.name}</ProductText>
        </ProductTextView>
      </ProductButton>
    );
  }
  function clearFields() {
    setDescription('');
    setPrice('');
    setAmount('');
    setDistance('');
  }
  async function handleCreateDemand() {
    try {
      const { coords } = await getLocationAsync();

      const priceNum = Number(price);
      const newDemand = {
        product_id: item._id,
        description,
        price: priceNum,
        kg_amount: Number(amount),
        latitude: coords.latitude,
        longitude: coords.longitude,
        max_distance_km: Number(distance),
      };

      const request = await api.post('/demand', newDemand);
      setCheck(true);
      setTimeout(() => navigation.popToTop(), 1200);
    } catch (err) {
      console.log(err.request);
      clearFields();
    }
  }

  return (
    <Container>
      <AppBar title="Criar Demanda" />
      {check ? (
        <Check />
      ) : (
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
              placeholder="Preço máximo (R$)"
              onChangeText={setPrice}
              value={price}
              keyboardType="decimal-pad"
            />
          </InputWrapper>

          <InputWrapper>
            <Input
              placeholder="Quantidade (kg)"
              onChangeText={setAmount}
              value={amount}
              keyboardType="decimal-pad"
            />
          </InputWrapper>

          <InputWrapper>
            <Input
              placeholder="Distância máxima (km)"
              onChangeText={setDistance}
              value={distance}
              keyboardType="decimal-pad"
            />
          </InputWrapper>

          <CreateDemandButton onPress={handleCreateDemand}>
            <CreateDemandButtonText>Criar Demanda</CreateDemandButtonText>
          </CreateDemandButton>
        </Content>
      )}
    </Container>
  );
}
