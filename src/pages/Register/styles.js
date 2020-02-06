import styled from 'styled-components/native';

import account from '../../assets/icons/account.png';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  align-items: center;
  padding: 40px 0;
`;

export const PhotoView = styled.TouchableOpacity`
  align-items: center;
`;

export const PhotoImage = styled.Image.attrs({ source: account })`
  width: 110px;
  height: 110px;
  border-width: 1px;
  border-color: #01a643;
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
