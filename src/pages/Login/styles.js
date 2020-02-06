import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { KeyboardAvoidingView } from 'react-native';

import logo from '../../assets/images/logo-login2.png';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Feather)`
  margin-right: 5px;
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

export const LoginButton = styled.TouchableOpacity`
  margin-top: 50px;
  background: #01a643;
  justify-content: center;
  align-items: center;
  width: 290px;
  height: 55px;
  border-radius: 5px;
`;

export const LoginButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Logo = styled.Image.attrs({ source: logo })``;

export const LogoView = styled.View`
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
