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
  border-bottom-color: #707070;
  width: 280px;
  padding: 20px 0 15px;
`;
export const ProductPhoto = styled.Image`
  width: 66px;
  height: 66px;
  border-radius: 33px;
  margin-right: 20px;
  border-width: 1px;
  border-color: #ccc;
`;
export const ProductName = styled.Text`
  font-size: 22px;
`;
export const EceDetailsView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
  width: 280px;
`;
export const EcePhoto = styled.Image`
  width: 66px;
  height: 66px;
  border-radius: 33px;
  border-width: 1px;
  border-color: #ccc;
  margin-right: 15px;
`;
export const EceInfoView = styled.View``;
export const EceName = styled.Text`
  font-size: 22px;
`;
export const EceDescription = styled.Text`
  font-size: 12px;
  color: #ccc;
`;
export const DemandDetailsView = styled.View`
  width: 280px;
  margin-top: 19px;
`;
export const DemandDetailsText = styled.Text`
  margin-bottom: 5px;
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
