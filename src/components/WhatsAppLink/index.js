import { Linking, Alert } from 'react-native';

export default function WhatsAppLink(mobileNum) {
  if (mobileNum) {
    const url = `whatsapp://send?phone=55${mobileNum}&text=Ola,+Vim+aqui+pelo+Agro+Exports`;
    try {
      Linking.openURL(url);
    } catch (err) {
      Alert.alert('Make sure Whatsapp installed on your device');
    }
  } else {
    Alert.alert('Please insert mobile no');
  }
}
