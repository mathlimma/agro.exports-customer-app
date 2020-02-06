import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;
export const Content = styled.View`
  align-items: center;
`;

export const DemandsList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})``;
