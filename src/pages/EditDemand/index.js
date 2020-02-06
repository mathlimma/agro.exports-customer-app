import React, { useState, useEffect } from 'react';
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

export default function EditDemand({ navigation }) {
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [distance, setDistance] = useState('');
  const [description, setDescription] = useState('');
  const [check, setCheck] = useState(false);
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { _id } = navigation.state.params;

  useEffect(() => {
    async function getDemand() {
      const response = await api.get(`demand/${_id}`);

      setPrice(String(response.data.price));
      setAmount(String(response.data.kg_amount));
      setDistance(String(response.data.max_distance_km));
      setDescription(response.data.description);
      setItem(response.data.product_id);
      setLoading(false);
    }

    getDemand();
  }, []);

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

  async function handleEditDemand() {
    try {
      const priceNum = Number(price);
      const attDemand = {
        price: priceNum,
        kg_amount: Number(amount),
        max_distance_km: Number(distance),
        description,
      };

      const request = await api.put(`demand/${_id}`, attDemand);
      setCheck(true);
      setTimeout(() => navigation.pop(), 1200);
    } catch (err) {
      console.log(err.request);
    }
  }

  return (
    <Container>
      <AppBar title="Editar Demanda" />
      {check ? (
        <Check />
      ) : (
        <Content>
          <TextContent>Preencha os Dados</TextContent>
          {!loading && ProductItem()}
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

          <CreateDemandButton onPress={handleEditDemand}>
            <CreateDemandButtonText>Editar Demanda</CreateDemandButtonText>
          </CreateDemandButton>
        </Content>
      )}
    </Container>
  );
}
