import React, { useEffect, useState } from 'react';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { AsyncStorage } from 'react-native';
import AppBar from '../../components/AppBar';
import api from '../../services/api';
import account from '../../assets/icons/account.png';

import {
  Container,
  Content,
  PhotoView,
  PhotoImage,
  InputWrapper,
  Input,
  LogoutButton,
  LogoutButtonText,
  TextPhoto,
  ProfileView,
} from './styles';

export default function Profile() {
  const [producer, setProducer] = useState(null);
  const [url, setUrl] = useState('');

  useEffect(() => {
    async function getUser() {
      const response = await api.get('token');
      setProducer(response.data);
      setUrl(response.data.avatar_id.url);
    }

    getUser();
  }, []);

  async function handleUploadPhoto() {
    const cameraRoll = await ImagePicker.requestCameraRollPermissionsAsync();
    if (cameraRoll.status === 'granted') {
      try {
        const { uri } = await ImagePicker.launchImageLibraryAsync();
        const formData = new FormData();

        formData.append('file', {
          uri,
          type: 'image/jpeg',
          name: 'photo_upload.jpg',
        });
        console.log(formData);
        const response = await api.put('avatar', formData, {
          headers: { 'content-Type': 'multipart/form-data' },
        });
        setUrl(response.data.url);
      } catch (error) {
        console.log(error.request);
      }
    }
  }
  console.log(producer);
  return (
    <Container>
      <AppBar title="Perfil" />
      <Content>
        <ProfileView>
          <PhotoView onPress={handleUploadPhoto}>
            {!url ? (
              <PhotoImage source={account} />
            ) : (
              <PhotoImage source={{ uri: url }} />
            )}
            <TextPhoto>Mudar foto</TextPhoto>
          </PhotoView>
          <InputWrapper>
            <Feather
              style={{ marginRight: 5 }}
              name="user"
              size={15}
              color="#808080"
            />
            <Input value={producer.name} />
            <MaterialIcons name="edit" size={15} color="#808080" />
          </InputWrapper>
          <InputWrapper>
            <MaterialIcons
              name="description"
              size={15}
              color="#808080"
              style={{ marginRight: 5 }}
            />
            <Input value={producer.description} />
            <MaterialIcons name="edit" size={15} color="#808080" />
          </InputWrapper>
          <InputWrapper>
            <Feather
              name="phone"
              size={15}
              color="#808080"
              style={{ marginRight: 5 }}
            />
            <Input value={producer.cel} />
            <MaterialIcons name="edit" size={15} color="#808080" />
          </InputWrapper>
        </ProfileView>

        <LogoutButton>
          <LogoutButtonText>Sair</LogoutButtonText>
        </LogoutButton>
      </Content>
    </Container>
  );
}
