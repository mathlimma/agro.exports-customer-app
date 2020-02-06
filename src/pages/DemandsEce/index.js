import React, { useState, useEffect } from 'react';
import AppBar from '../../components/AppBar';
import DemandItem from '../../components/DemandItem';
import api from '../../services/api';
import Loading from '../../components/Loading';

import {
  Container,
  Content,
  CreateDemandButton,
  CreateDemandText,
  DemandList,
  DemandText,
  ButtonView,
  Separator,
  Icon,
} from './styles';

export default function Demand({ navigation }) {
  const [demands, setDemands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSupplies() {
      try {
        const response = await api.get('/ece/demands');

        setDemands(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.request);
      }
    }

    getSupplies();
  }, []);
  return (
    <Container>
      <AppBar title="Demandas" size="22" />
      {loading ? (
        <Loading />
      ) : (
        <Content>
          <ButtonView>
            <CreateDemandButton onPress={() => navigation.push('AddDemand')}>
              <Icon name="plus" size={25} color="#fff" />
              <CreateDemandText>Criar Demanda</CreateDemandText>
            </CreateDemandButton>
          </ButtonView>
          <DemandText>Suas Demandas</DemandText>
          <DemandList
            data={demands}
            renderItem={({ item }) => <DemandItem {...item} key={item._id} />}
            keyExtractor={item => String(item._id)}
            ItemSeparatorComponent={() => <Separator />}
          />
        </Content>
      )}
    </Container>
  );
}
