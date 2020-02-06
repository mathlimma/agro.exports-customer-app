import React, { useState, useEffect } from 'react';
import AppBar from '../../components/AppBar';
import api from '../../services/api';
import Loading from '../../components/Loading';
import {
  Container,
  Content,
  NotificationButton,
  ProducerImage,
  NotificationText,
  NotificationTextView,
  NotificationList,
} from './styles';

export default function AddSupply({ navigation }) {
  const [notification, setNotification] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function getNotifications() {
      try {
        // const response = await api.get('/product'); // pegar notificaçoes aqui

        const response = {
          data: [
            {
              text: ' joaozinho recusou seu pedido',
              photo_id: {
                url: 'jhdsfksdhfdsh',
              },
            },
            {
              text: ' Mariazinha aceitou seu pedido',
              photo_id: {
                url: 'jhdsfksdhfdsh',
              },
            },
            {
              text: ' aguinha aceitou seu pedido',
              photo_id: {
                url: 'jhdsfksdhfdsh',
              },
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
  function handlePress(item) {
    // abrir whatsapp aqui
  }

  function NotificationItem(item) {
    <NotificationButton onPress={() => handlePress(item)}>
      <ProducerImage source={{ uri: item.photo_id.url }} />
      <NotificationTextView>
        <NotificationText> {item.text}</NotificationText>
      </NotificationTextView>
    </NotificationButton>;
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
            keyExtractor={item => String(item._id)}
          />
        </Content>
      )}
    </Container>
  );
}
