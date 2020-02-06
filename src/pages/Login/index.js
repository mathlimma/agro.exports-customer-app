import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';
import AppBar from '../../components/AppBar';
import api from '../../services/api';
import {
  Container,
  Content,
  Input,
  Logo,
  LoginButton,
  LoginButtonText,
  InputWrapper,
  LogoView,
  Icon,
} from './styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setloading] = useState(false);
  async function handleLogin() {
    if (email && password) {
      try {
        setloading(true);
        const response = await api.post('producer/signin', { email, password });
        const { producer, token } = response.data;
        setloading(false);
        api.defaults.headers.Authorization = `Bearer ${token}`;
        await AsyncStorage.setItem('@token', token);
        navigation.navigate('App', { producer });
      } catch (err) {
        console.log(err.request);
        setloading(false);
      }
    }
  }

  return (
    <Container>
      <AppBar title="Faça o login" />
      <Content>
        <LogoView>
          <Logo />
        </LogoView>
        <InputWrapper>
          <Entypo
            name="email"
            size={15}
            color="#808080"
            style={{ marginRight: 5 }}
          />
          <Input
            placeholder="Email"
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
          />
        </InputWrapper>
        <InputWrapper>
          <Icon name="lock" size={15} color="#808080" />
          <Input
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={setpassword}
          />
        </InputWrapper>
        <LoginButton onPress={handleLogin}>
          <LoginButtonText>{loading ? 'Aguarde...' : 'Entrar'}</LoginButtonText>
        </LoginButton>
      </Content>
    </Container>
  );
}
