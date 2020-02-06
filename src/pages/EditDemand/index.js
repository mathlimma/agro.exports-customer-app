import React, { useState, useEffect } from 'react';
import api from '../../services/api';

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

export default function EditDemand({ navigation }) {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [distance, setDistance] = useState('');

  const { _id } = navigation.state.params;

  useEffect(() => {
    async function getDemand() {
      console.log(_id);
      const response = await api.get(`demand/${_id}`);

      setDescription(response.data.description);
      setPrice(response.data.price);
      setAmount(response.data.kg_amount);
      setDistance(response.data.max_distance_km);
      console.log(response.data.max_distance_km);
      console.log(response.data.price);
    }

    getDemand();
  }, []);

  function ProductItem(item) {
    return (
      <ProductButton>
        <ProductImage source={{ uri: item.photo_id.url }} />
        <ProductTextView>
          <ProductText> {item.name}</ProductText>
        </ProductTextView>
      </ProductButton>
    );
  }

  async function handleEditDemand() {
    try {
      const priceNum = Number(price);
      const attDemand = {
        description,
        price: priceNum,
        kg_amount: Number(amount),
        max_distance_km: Number(distance),
      };
      console.log('newdemand');
      console.log(attDemand);

      const request = await api.put(`/demand/${_id}`, attDemand);
      console.log(request);
    } catch (err) {
      console.log(err.request);
    }
  }

  return (
    <Container>
      <AppBar title="Editar Demanda" />
      <Content>
        <TextContent>Preencha os Dados</TextContent>
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
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            placeholder="Quantidade (kg)"
            onChangeText={setAmount}
            value={amount}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            placeholder="Distância máxima (km)"
            onChangeText={setDistance}
            value={distance}
          />
        </InputWrapper>

        <CreateDemandButton onPress={handleEditDemand}>
          <CreateDemandButtonText>Editar Demanda</CreateDemandButtonText>
        </CreateDemandButton>
      </Content>
    </Container>
  );
}
