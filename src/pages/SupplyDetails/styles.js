import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1px;
  background: #fff;
`;

export const Content = styled.View`
  align-items: center;
`;
export const ProductView = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  width: 280px;
  padding: 20px 0 15px;
`;
export const ProductPhoto = styled.Image`
  width: 66px;
  height: 66px;
  border-radius: 33px;
  margin-right: 20px;
  border-width: 1px;
  border-color: #01a643;
`;
export const ProductName = styled.Text`
  color: #01a643;
  font-size: 22px;
`;
export const TextData = styled.Text`
  color: #ff8181;
`;

export const TextDataMoney = styled.Text`
  color: #01a643;
`;
export const ProducerDetailsView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
  width: 280px;
`;
export const ProducerPhoto = styled.Image`
  width: 66px;
  height: 66px;
  border-radius: 33px;
  border-width: 1px;
  border-color: #01a643;
  margin-right: 15px;
`;
export const ProducerInfoView = styled.View`
  flex: 1;
`;
export const ProducerName = styled.Text`
  font-size: 22px;
`;
export const ProducerDescription = styled.Text`
  font-size: 12px;
  color: #ccc;
`;
export const SupplyDetailsView = styled.View`
  width: 280px;
  margin-top: 19px;
`;
export const SupplyDetailsText = styled.Text`
  margin-bottom: 5px;
  font-weight: bold;
`;
export const NegociationButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${props => props.color};
  height: 54px;
  width: 288px;
  margin-top: 30px;
`;
export const NegociationButtonText = styled.Text`
  color: ${props => props.color};
`;
