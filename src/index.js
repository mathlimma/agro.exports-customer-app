import { registerRootComponent } from 'expo';
import './config/ReactotronConfig';
import React from 'react';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import { Provider } from 'react-redux';

import Routes from './routes';
import StatusBar from './components/StatusBar';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      {Platform.OS === 'ios' && <StatusBar backgroundColor="#00a000" />}
      <Routes
        style={{
          marginTop: Platform.OS === 'ios' ? Constants.statusBarHeight : 0,
        }}
      />
    </Provider>
  );
}

export default registerRootComponent(App);
