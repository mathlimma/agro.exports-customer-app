import styled from 'styled-components/native';
import background from '../../assets/images/background.png';
import logo from '../../assets/images/logo.png';

export const Container = styled.ImageBackground.attrs({
  source: background,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LogoView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.Image.attrs({
  source: logo,
})``;

export const AuthView = styled.View`
  flex: 1;
  color: #ffffff;
  align-items: center;
`;

export const AuthButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 288px;
  height: 54px;
  border-radius: 5px;
`;

export const AuthButtonText = styled.Text`
  font-size: 20px;
  color: #005d22;
`;

export const AuthViewText = styled.Text`
  padding: 20px;
  color: white;
  font-weight: bold;
`;
