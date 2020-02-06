import styled from 'styled-components/native';
import { FlatList, StyleSheet } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Content = styled.View`
  padding: 20px;
`;

export const ProductButton = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: ${StyleSheet.hairlineWidth};
  border-bottom-color: #707070;

  margin-bottom: 5px;
`;

export const ProductTextView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border-width: 1px;
  border-color: #01a643;
`;

export const AddSupplyView = styled.View`
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const AddSupplyText = styled.Text`
  font-size: 20px;
  color: #000000;
  align-self: center;
  font-weight: bold;
`;

export const ProductText = styled.Text`
  font-size: 20px;
  margin-left: 20px;
`;

export const ProductList = styled(FlatList)``;
