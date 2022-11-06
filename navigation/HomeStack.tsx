import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../components/HomeScreen.js';
import TaskScreen from '../components/TaskScreen.js';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1E1A3C',
        },
        headerTitleStyle: {
          color: 'white'
        }
      }}
    >
      {/* name prop on the HomeStack.Screen component is used to define the route name  */}
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Task" component={TaskScreen} />
    </HomeStack.Navigator>
  );
};

export { HomeStackNavigator };