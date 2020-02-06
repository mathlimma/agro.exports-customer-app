import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Image } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import Auth from './pages/Auth';
import Login from './pages/Login';
import Demand from './pages/Demand';
import DemandDetails from './pages/DemandDetails';

import Profile from './pages/Profile';
import Supply from './pages/Supply';
import AddSupply from './pages/AddSupply';
import CreateSupply from './pages/CreateSupply';
import Register from './pages/Register';
import bell from './assets/icons/bell.png';
import bellGreen from './assets/icons/bell-green.png';
import company from './assets/icons/company.png';
import campanyGreen from './assets/icons/company-green.png';
import deal from './assets/icons/deal.png';
import dealGreen from './assets/icons/deal-green.png';

const SupplyStack = createStackNavigator(
  {
    Supply: {
      screen: Supply,
    },
    AddSupply: {
      screen: AddSupply,
    },
    CreateSupply: {
      screen: CreateSupply,
    },
  },
  { headerMode: 'none' }
);

const DemandStack = createStackNavigator(
  {
    Demand: {
      screen: Demand,
    },
    DemandDetails: {
      screen: DemandDetails,
    },
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
    SupplyStack: {
      screen: SupplyStack,
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
