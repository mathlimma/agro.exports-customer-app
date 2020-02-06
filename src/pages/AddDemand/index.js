import React, { useState, useEffect } from 'react';
import AppBar from '../../components/AppBar';
import api from '../../services/api';
import Loading from '../../components/Loading';
import {
  Container,
  Content,
  ProductList,
  AddSupplyText,
  ProductButton,
  ProductImage,
  ProductText,
  ProductTextView,
  AddSupplyView,
} from './styles';

export default function AddSupply({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get('/product');

        setProducts(response.data);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []);
  function handlePress(item) {
    navigation.push('CreateDemand', { item });
  }

  function ProductItem(item) {
    return (
      <ProductButton onPress={() => handlePress(item)}>
        <ProductImage source={{ uri: item.photo_id.url }} />
        <ProductTextView>
          <ProductText> {item.name}</ProductText>
        </ProductTextView>
      </ProductButton>
    );
  }

  return (
    <Container>
      <AppBar title="Adicionar Demanda" />
      {loading ? (
        <Loading />
      ) : (
        <Content>
          <AddSupplyView>
            <AddSupplyText>Selecione o Produto</AddSupplyText>
          </AddSupplyView>

          <ProductList
            showsVerticalScrollIndicator={false}
            data={products}
            renderItem={({ item }) => ProductItem(item)}
            keyExtractor={item => String(item._id)}
          />
        </Content>
      )}
    </Container>
  );
}
