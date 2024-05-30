// navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GateManagementScreen from '../screens/GateManagementScreen';
import GuardAssignmentScreen from '../screens/GuardAssignmentScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="GateManagement" component={GateManagementScreen} />
      <Stack.Screen name="GuardAssignment" component={GuardAssignmentScreen} />
    </Stack.Navigator>
  );
}
