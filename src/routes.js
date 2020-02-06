import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Image } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import Auth from './pages/Auth';
import Login from './pages/Login';
import Notification from './pages/Notification';
import Profile from './pages/Profile';
import Register from './pages/Register';
import DemandEce from './pages/DemandsEce';
import AddDemand from './pages/AddDemand';
import CreateDemand from './pages/CreateDemand';
import EditDemand from './pages/EditDemand';
import DemandSuppliesList from './pages/DemandSuppliesList';
import bell from './assets/icons/bell.png';
import bellGreen from './assets/icons/bell-green.png';
import company from './assets/icons/company.png';
import campanyGreen from './assets/icons/company-green.png';
import deal from './assets/icons/deal.png';
import dealGreen from './assets/icons/deal-green.png';

const DemandStack = createStackNavigator(
  {
    DemandEce: {
      screen: DemandEce,
    },
    AddDemand: {
      screen: AddDemand,
    },
    CreateDemand: {
      screen: CreateDemand,
    },
    EditDemand: {
      screen: EditDemand,
    },
    DemandSuppliesList,
  },
  { headerMode: 'none' }
);

const App = createBottomTabNavigator(
  {
    DemandStack: {
      screen: DemandStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? dealGreen : deal}
            style={{ width: 38, height: 38 }}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? campanyGreen : company}
            style={{ width: 30, height: 30 }}
          />
        ),
      },
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? bellGreen : bell}
            style={{ width: 30, height: 30 }}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'DemandStack',
    tabBarOptions: {
      showLabel: false,

      tabStyle: {
        paddingBottom: 5,
        paddingTop: 5,
      },
      style: {
        backgroundColor: '#fff',
        borderTopWidth: 1,
      },
    },
  }
);

const Root = createSwitchNavigator(
  {
    Auth,
    Login,
    Register,
    App,
  },
  { initialRouteName: 'Auth' }
);

const Routes = createAppContainer(Root);

export default Routes;
