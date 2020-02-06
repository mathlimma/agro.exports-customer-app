import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Content = styled.View`
  align-items: center;
`;

export const SuppliesList = styled(FlatList)``;

export const SupplyContent = styled.TouchableOpacity`
  flex-direction: row;
  width: 335px;
  margin-top: 20px;
  background: rgba(131, 237, 123, 0.6);
  padding: 20px;
`;

export const PhotoView = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 10px;
`;

export const InfoView = styled.View`
  justify-content: center;
`;

export const NameText = styled.Text`
  font-size: 14px;
`;
export const CityText = styled.Text`
  font-size: 14px;
  color: #707070;
`;
