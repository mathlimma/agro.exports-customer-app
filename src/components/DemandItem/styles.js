import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 95px;
  background: #83ed7b99;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
`;

export const ContentView = styled.View`
  align-items: center;
`;

export const ContentPhoto = styled.Image`
  height: 56px;
  width: 56px;
  border-radius: 28px;
`;

export const ContentName = styled.Text``;

export const ArrowView = styled.View``;

export const ArrowImage = styled.Image.attrs(props => ({
  source: props.source,
}))``;
