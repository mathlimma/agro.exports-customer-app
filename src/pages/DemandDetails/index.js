import React, { useState, useEffect, useMemo } from 'react';
import AppBar from '../../components/AppBar';
import api from '../../services/api';
import Loading from '../../components/Loading';
import {
  Container,
  Content,
  ProductView,
  ProductPhoto,
  ProductName,
  EceDetailsView,
  EcePhoto,
  EceInfoView,
  EceName,
  EceDescription,
  DemandDetailsView,
  DemandDetailsText,
  NegociationButton,
  NegociationButtonText,
} from './styles';

export default function DemandDetails({ navigation }) {
  const [demand, setDemand] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getDemand() {
      try {
        const { demand_id } = navigation.state.params;

        const response = await api.get(`demand/${demand_id}`);
        setDemand(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    getDemand();
  }, []);
  const priceFormatted = useMemo(() => String(demand.price).replace('.', ','), [
    demand.price,
  ]);

  return (
    <Container>
      <AppBar title="Detalhes da demanda" />
      {loading ? (
        <Loading />
      ) : (
        <Content>
          <ProductView>
            <ProductPhoto
              source={{
                uri: demand.product_id.photo_id.url,
              }}
            />
            <ProductName>{demand.product_id.name}</ProductName>
          </ProductView>

          <EceDetailsView>
            <EcePhoto
              source={{
                uri: demand.ece_id.avatar_id.url,
              }}
            />
            <EceInfoView>
              <EceName>{demand.ece_id.name}</EceName>
              <EceDescription>
                {demand.ece_id.description || 'Sem Descrição'}
              </EceDescription>
            </EceInfoView>
          </EceDetailsView>

          <DemandDetailsView>
            <DemandDetailsText>
              Localização: {demand.ece_id.city || 'Não Informado'}
            </DemandDetailsText>
            <DemandDetailsText>
              Quantidade: {demand.kg_amount}kg
            </DemandDetailsText>
            <DemandDetailsText>Preço: R${priceFormatted}</DemandDetailsText>
          </DemandDetailsView>

          <NegociationButton color="#01A643">
            <NegociationButtonText color="#01A643">
              Aceitar Negociação
            </NegociationButtonText>
          </NegociationButton>

          <NegociationButton color="#FB0909">
            <NegociationButtonText color="#FB0909">
              Recusar Negociação
            </NegociationButtonText>
          </NegociationButton>
        </Content>
      )}
    </Container>
  );
}
