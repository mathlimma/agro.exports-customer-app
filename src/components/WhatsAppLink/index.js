import React from 'react';
import { Linking, Alert } from 'react-native';
import { Container, Send } from './styles';

export default function WhatsAppLink() {
  const sendOnWhatsApp = () => {
    const mobileNum = '81989341719'; // get user cellphone here
    if (mobileNum) {
      const url = `whatsapp://send?&phone=55${mobileNum}`;
      try {
        Linking.openURL(url);
      } catch (err) {
        Alert.alert('Make sure Whatsapp installed on your device');
      }
    } else {
      Alert.alert('Please insert mobile no');
    }
  };

  return (
    <Container>
      <Send onPress={() => sendOnWhatsApp} title="Send WhatsApp Message" />
    </Container>
  );
}
