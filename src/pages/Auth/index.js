import React, { useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import api from '../../services/api';
import {
  Container,
  LogoView,
  LogoImage,
  AuthView,
  AuthButton,
  AuthButtonText,
  AuthViewText,
} from './styles';

export default function Auth({ navigation }) {
  useEffect(() => {
    async function redirect() {
      const token = await AsyncStorage.getItem('@token');

      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        navigation.navigate('App');
      }
    }

    redirect();
  }, []);

  function handleNavigationLogin() {
    navigation.navigate('Login');
  }

  return (
    <Container tintcolor="#005D22">
      <LogoView>
        <LogoImage />
      </LogoView>

      <AuthView>
        <AuthButton onPress={handleNavigationLogin}>
          <AuthButtonText>Login</AuthButtonText>
        </AuthButton>

        <AuthViewText>Ainda não possui conta?</AuthViewText>

        <AuthButton>
          <AuthButtonText>Cadastre-se</AuthButtonText>
        </AuthButton>
      </AuthView>
    </Container>
  );
}
