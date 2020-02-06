import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  align-items: center;
`;

export const SuppliesList = styled(FlatList)``;

export const SupplyContent = styled.View`
  width: 335px;
  height: 83px;
  background: rgba(131, 237, 123, 0.6);
`;

export const PhotoView = styled.Image``;

export const InfoView = styled.View``;

export const NameText = styled.Text``;
export const CityText = styled.Text``;
