import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  width: 290px;
  border-bottom-width: 1px;
  border-bottom-color: #808080;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#808080',
})`
  width: 290px;
`;

export const CreateDemandButtonText = styled.Text`
  color: #01a643;
`;

export const CreateDemandButton = styled.TouchableOpacity`
  margin-top: 50px;
  background: #fff;
  justify-content: center;
  align-items: center;
  width: 288px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #01a643;
`;

export const TextContent = styled.Text`
  margin-top: 20px;
  font-size: 19px;
  font-weight: bold;
`;

export const ProductButton = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
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

export const ProductText = styled.Text`
  font-size: 20px;
  margin-left: 20px;
`;
