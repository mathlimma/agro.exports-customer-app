import React, { useState, useEffect } from 'react';
import { withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native';
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
  EmptyView,
  EmptyText,
} from './styles';

function Demand({ navigation, isFocused }) {
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
  }, [isFocused]);
  console.log(demands.length);
  return (
    <Container>
      <AppBar title="Demandas" />
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

          {demands.length === 0 ? (
            <EmptyView>
              <EmptyText>Você não possui demandas cadastradas</EmptyText>
            </EmptyView>
          ) : (
            <>
              <DemandText>Suas Demandas</DemandText>
              <DemandList
                data={demands}
                renderItem={({ item }) => (
                  <DemandItem
                    navigation={navigation}
                    {...item}
                    key={item._id}
                  />
                )}
                keyExtractor={item => String(item._id)}
                ItemSeparatorComponent={() => <Separator />}
              />
            </>
          )}
        </Content>
      )}
    </Container>
  );
}

export default withNavigationFocus(Demand);
