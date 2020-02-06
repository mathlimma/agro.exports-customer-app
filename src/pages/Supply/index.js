import React, { useState, useEffect } from 'react';
import AppBar from '../../components/AppBar';
import SupplyItem from '../../components/SupplyItem';
import api from '../../services/api';
import Loading from '../../components/Loading';

import {
  Container,
  Content,
  CreateSupplyButton,
  CreateSupplyText,
  SupplyList,
  SupplyText,
  ButtonView,
  Separator,
  Icon,
} from './styles';

export default function Supply({ navigation }) {
  const [supplies, setSupplies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSupplies() {
      try {
        const response = await api.get('/producer/supplies');

        setSupplies(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getSupplies();
  }, []);
  return (
    <Container>
      <AppBar title="Oferta" size="22" />
      {loading ? (
        <Loading />
      ) : (
        <Content>
          <ButtonView>
            <CreateSupplyButton onPress={() => navigation.push('AddSupply')}>
              <Icon name="plus" size={25} color="#fff" />
              <CreateSupplyText>Adicionar Oferta</CreateSupplyText>
            </CreateSupplyButton>
          </ButtonView>
          <SupplyText>Suas Ofertas</SupplyText>
          <SupplyList
            data={supplies}
            renderItem={({ item }) => <SupplyItem {...item} key={item._id} />}
            keyExtractor={item => String(item._id)}
            ItemSeparatorComponent={() => <Separator />}
          />
        </Content>
      )}
    </Container>
  );
}
