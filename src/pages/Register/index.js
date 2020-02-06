import React, { useState } from 'react';
import { Feather, Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { AsyncStorage } from 'react-native';
import AppBar from '../../components/AppBar';
import api from '../../services/api';
import {
  Container,
  Content,
  PhotoView,
  PhotoImage,
  InputWrapper,
  Input,
  LoginButton,
  LoginButtonText,
} from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sex, setSex] = useState('');
  const [tel, setTel] = useState('');
  const [cpf, setCpf] = useState('');
  const [loading, setloading] = useState(false);
  async function handleRegister({ navigation }) {
    try {
      if (name && email && password && sex && tel && cpf) {
        const response = await api.post('ece/signup', {
          name,
          email,
          password,
          sex,
          tel,
          cpf,
        });
        const { ece, token } = response.data;
        setloading(false);
        api.defaults.headers.Authorization = `Bearer ${token}`;
        await AsyncStorage.setItem('@token', token);
        navigation.navigate('App', { ece });
      }
    } catch (error) {
      setloading(false);
    }
  }

  async function handleUploadPhoto() {
    const cameraRoll = await ImagePicker.requestCameraRollPermissionsAsync();
    if (cameraRoll.status === 'granted') {
      ImagePicker.launchImageLibraryAsync();
    }
  }
  return (
    <Container>
      <AppBar title="Preencha os dados para terminar seu cadastro" />
      <Content>
        <PhotoView onPress={handleUploadPhoto}>
          <PhotoImage />
        </PhotoView>
        <InputWrapper>
          <Feather
            style={{ marginRight: 5 }}
            name="user"
            size={15}
            color="#808080"
          />
          <Input placeholder="Nome" value={name} onChangeText={setName} />
        </InputWrapper>

        <InputWrapper>
          <Entypo
            name="email"
            size={15}
            color="#808080"
            style={{ marginRight: 5 }}
          />
          <Input placeholder="Email" value={email} onChangeText={setEmail} />
        </InputWrapper>

        <InputWrapper>
          <Feather
            name="lock"
            size={15}
            color="#808080"
            style={{ marginRight: 5 }}
          />
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
          />
        </InputWrapper>

        <InputWrapper>
          <FontAwesome
            name="intersex"
            size={15}
            color="#808080"
            style={{ marginRight: 5 }}
          />
          <Input placeholder="Sexo" value={sex} onChangeText={setSex} />
        </InputWrapper>

        <InputWrapper>
          <Feather
            name="phone"
            size={15}
            color="#808080"
            style={{ marginRight: 5 }}
          />
          <Input placeholder="Telefone" value={tel} onChangeText={setTel} />
        </InputWrapper>
        <InputWrapper>
          <AntDesign
            name="idcard"
            size={15}
            color="#808080"
            style={{ marginRight: 5 }}
          />
          <Input placeholder="Cpf" value={cpf} onChangeText={setCpf} />
        </InputWrapper>
        <LoginButton onPress={handleRegister}>
          <LoginButtonText>
            {loading ? 'Aguarde...' : 'Cadastrar'}
          </LoginButtonText>
        </LoginButton>
      </Content>
    </Container>
  );
}
