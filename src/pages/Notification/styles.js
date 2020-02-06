import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Content = styled.View`
  align-items: center;
`;

export const NotificationButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: rgba(112, 112, 112, 1);
  padding: 20px;
`;

export const NotificationTextView = styled.View`
  margin-left: 10px;
`;

export const ProducerImage = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border: 1px solid #707070;
`;

export const AddSupplyView = styled.View`
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-bottom-color: #707070;
  border-bottom-width: 1px;
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

export const NotificationList = styled(FlatList)``;

export const NotificationText = styled.Text`
  font-size: 16px;
`;

export const TimeText = styled.Text`
  font-size: 12px;
  color: #707070;
`;
