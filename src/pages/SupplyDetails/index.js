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
  ProducerDetailsView,
  ProducerPhoto,
  ProducerInfoView,
  ProducerName,
  ProducerDescription,
  SupplyDetailsView,
  SupplyDetailsText,
  NegociationButton,
  NegociationButtonText,
  TextData,
  TextDataMoney,
} from './styles';

export default function SupplyDetails({ navigation }) {
  const { supply_id, demand_id } = navigation.state.params;
  const [supply, setSupply] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getSupply() {
      try {
        const response = await api.get(`supply/${supply_id}`);

        setSupply(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }

    getSupply();
  }, []);
  const priceFormatted = useMemo(() => String(supply.price).replace('.', ','), [
    supply.price,
  ]);

  async function handleNegociation() {
    const response = await api.put(`negociation/${supply_id}`, { demand_id });
    // whatapp
    console.log(response);
  }

  return (
    <Container>
      <AppBar title="Detalhes da oferta" />
      {loading ? (
        <Loading />
      ) : (
        <Content>
          <ProductView>
            <ProductPhoto
              source={{
                uri: supply.product_id.photo_id.url,
              }}
            />
            <ProductName>{supply.product_id.name}</ProductName>
          </ProductView>

          <ProducerDetailsView>
            <ProducerPhoto
              source={{
                uri: supply.producer_id.avatar_id.url,
              }}
            />
            <ProducerInfoView>
              <ProducerName>{supply.producer_id.name}</ProducerName>
              <ProducerDescription>
                {supply.producer_id.description || 'Sem Descrição'}
              </ProducerDescription>
            </ProducerInfoView>
          </ProducerDetailsView>

          <SupplyDetailsView>
            <SupplyDetailsText>
              Localização:{' '}
              <TextData> {supply.producer_id.city || 'Não Informado'}</TextData>
            </SupplyDetailsText>
            <SupplyDetailsText>
              Preço: <TextDataMoney>R${priceFormatted}</TextDataMoney>
            </SupplyDetailsText>
          </SupplyDetailsView>

          <NegociationButton color="#01A643" onPress={handleNegociation}>
            <NegociationButtonText color="#01A643">
              Iniciar Negociação
            </NegociationButtonText>
          </NegociationButton>
        </Content>
      )}
    </Container>
  );
}
