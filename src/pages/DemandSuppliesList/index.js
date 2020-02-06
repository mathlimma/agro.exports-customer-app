import React, { useEffect, useState } from 'react';
import AppBar from '../../components/AppBar';
import {
  Container,
  Content,
  SuppliesList,
  SupplyContent,
  PhotoView,
  InfoView,
  NameText,
  CityText,
} from './styles';
import api from '../../services/api';
import Loading from '../../components/Loading';

export default function DemandSuppliesList({ navigation }) {
  const [demandSuppliesList, setDemandSuppliesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { demand_id } = navigation.state.params;

  useEffect(() => {
    async function getDemandSuppliesList() {
      await api.post(`agromatch/${demand_id}`);
      const response = await api.get(`demand/${demand_id}/supplies`);
      setDemandSuppliesList(response.data.supplies_id);

      setLoading(false);
    }

    getDemandSuppliesList();
  }, []);

  function Supplyitem(item) {
    console.log(item);
    return (
      <SupplyContent
        onPress={() =>
          navigation.push('SupplyDetails', { supply_id: item._id, demand_id })
        }
      >
        <PhotoView source={{ uri: item.producer_id.avatar_id.url }} />
        <InfoView>
          <NameText>{item.producer_id.name}</NameText>
          <CityText>{item.producer_id.city}</CityText>
        </InfoView>
      </SupplyContent>
    );
  }

  return (
    <Container>
      <AppBar title="Lista de Ofertas" />
      {loading ? (
        <Loading />
      ) : (
        <Content>
          <SuppliesList
            data={demandSuppliesList}
            renderItem={({ item }) => Supplyitem(item)}
            keyExtractor={item => String(item._id)}
          />
        </Content>
      )}
    </Container>
  );
}
