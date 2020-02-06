import React, { useState, useEffect } from 'react';
import AppBar from '../../components/AppBar';
import api from '../../services/api';
import image from '../../assets/images/pp.jpeg';
import Loading from '../../components/Loading';
import WhatsAppLink from '../../components/WhatsAppLink';
import {
  Container,
  Content,
  NotificationButton,
  ProducerImage,
  NotificationText,
  NotificationTextView,
  NotificationList,
  TimeText,
} from './styles';

export default function Notification({ navigation }) {
  const [notification, setNotification] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function getNotifications() {
      try {
        const response = {
          data: [
            {
              id: 1,
              text: 'Matheus recusou seu pedido',
              photo_id: {
                url:
                  'https://a02ea2f0.ngrok.io/files/7c60ce66e2064b73c7c161e0f9f978f7.jpg',
              },
              time: '2 horas atrás',
              tel: '8189341719',
            },
            {
              id: 2,
              text: 'Mariazinha aceitou seu pedido',
              photo_id: {
                url:
                  'https://a02ea2f0.ngrok.io/files/7c60ce66e2064b73c7c161e0f9f978f7.jpg',
              },
              time: '3 horas atrás',
              tel: '8189341719',
            },
            {
              id: 3,
              text: 'Emmanuel aceitou seu pedido',
              photo_id: {
                url:
                  'https://a02ea2f0.ngrok.io/files/7c60ce66e2064b73c7c161e0f9f978f7.jpg',
              },
              time: '4 horas atrás',
              tel: '8189341719',
            },
          ],
        };
        setNotification(response.data);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getNotifications();
  }, []);
  async function handlePress(item) {
    // abrir whatsapp aqui
    WhatsAppLink(item.tel);
  }

  function NotificationItem(item) {
    return (
      <NotificationButton onPress={() => handlePress(item)}>
        <ProducerImage source={image} />
        <NotificationTextView>
          <NotificationText>{item.text}</NotificationText>
          <TimeText>{item.time}</TimeText>
        </NotificationTextView>
      </NotificationButton>
    );
  }

  return (
    <Container>
      <AppBar title="Notificações" />
      {loading ? (
        <Loading />
      ) : (
        <Content>
          <NotificationList
            showsVerticalScrollIndicator={false}
            data={notification}
            renderItem={({ item }) => NotificationItem(item)}
            keyExtractor={item => String(item.id)}
          />
        </Content>
      )}
    </Container>
  );
}
