import styled from 'styled-components/native';

export const Container = styled.View`
  background: rgba(131, 237, 123, 0.2);
  width: 300px;
  border-radius: 10px;
  padding: 10px;
  flex-direction: row;
  margin-bottom: 5px;
`;

export const ActionViewWrapper = styled.TouchableOpacity``;

export const ProductView = styled.TouchableOpacity`
  flex: 9;
  flex-direction: row;
`;

export const HelpText = styled.Text`
  font-size: 10px;
  color: #707070;
`;

export const PhotoView = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 10px;
`;

export const InfoView = styled.View`
  flex: 1;
  padding: 5px;
  justify-content: center;
`;

export const NameText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ActionsView = styled.View`
  justify-content: space-between;
  flex: 1;
`;

export const ActionView = styled.View``;

export const ActionIcon = styled.Image``;
