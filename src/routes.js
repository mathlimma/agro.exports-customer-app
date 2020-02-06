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
import saveMoney from './assets/icons/save-money.png';
import saveMoneyGreen from './assets/icons/money-green.png';
import sprout from './assets/icons/sprout.png';
import sproutGreen from './assets/icons/sprout-green.png';

import farmer from './assets/icons/farmer.png';
import farmerGreen from './assets/icons/farmer-green.png';

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
            source={focused ? saveMoneyGreen : saveMoney}
            style={{ width: 35, height: 35 }}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? farmerGreen : farmer}
            style={{ width: 38, height: 38 }}
          />
        ),
      },
    },
    SupplyStack: {
      screen: SupplyStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? sproutGreen : sprout}
            style={{ width: 33, height: 33 }}
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
