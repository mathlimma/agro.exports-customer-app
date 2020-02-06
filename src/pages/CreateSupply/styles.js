import styled from 'styled-components/native';
import { KeyboardAvoidingView } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled(KeyboardAvoidingView).attrs({
  behavior: 'height',
})`
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

export const CreateSupplyButtonText = styled.Text`
  color: #01a643;
`;

export const SupplyActiveButtonText = styled.Text`
  color: ${props => (!props.active ? '#fff' : '#01a643')};
`;

export const SupplyDisabledButtonText = styled.Text`
  color: ${props => (props.active ? '#fff' : '#01a643')};
`;

export const TextContent = styled.Text`
  margin-top: 20px;
  font-size: 19px;
  font-weight: bold;
`;

export const CreateSupplyButton = styled.TouchableOpacity`
  margin-top: 50px;
  background: #fff;
  justify-content: center;
  align-items: center;
  width: 288px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #01a643;
`;

export const SupplyActiveButton = styled.TouchableOpacity`
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 38px;
  border-radius: 5px;
  border: 1px solid #01a643;
  background-color: ${props => (props.active ? '#01a643' : '#fff')};
`;

export const SupplyDisabledButton = styled.TouchableOpacity`
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 38px;
  border-radius: 5px;
  border: 1px solid #01a643;
  background-color: ${props => (!props.active ? '#01a643' : '#fff')};
`;

export const SupplyActiveButtonView = styled.View`
  flex-direction: row;
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
  border: 1px solid #707070;
`;

export const ProductText = styled.Text`
  font-size: 20px;
  margin-left: 20px;
`;
