import React, { useEffect, useState } from 'react';
import DemandItem from '../../components/DemandItem';
import { Container, DemandsList, Content } from './styles';
import AppBar from '../../components/AppBar';
import api from '../../services/api';
import Loading from '../../components/Loading';

export default function Demand({ navigation }) {
  const [demands, setDemands] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getDemands() {
      try {
        const response = await api.get('ece/demands');
        console.log(response.data);
        setDemands(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    getDemands();
  }, []);

  return (
    <Container>
      <AppBar title="Demandasss" />
      {loading ? (
        <Loading />
      ) : (
        <Content>
          <DemandsList
            data={demands}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <DemandItem {...item} navigation={navigation} />
            )}
          />
        </Content>
      )}
    </Container>
  );
}
