import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Auth from './pages/Auth';
import Main from './pages/Main';

const auth = createSwitchNavigator(
  {
    Auth,
    Main,
  },
  { initialRouteName: 'Auth' }
);

export default createAppContainer(auth);
