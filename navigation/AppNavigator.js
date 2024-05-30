import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GateManagement from '../screens/GateManagementScreen';
import GuardAssignment from '../screens/GuardAssignmentScreen';
import ShoppingScreen from '../screens/ShoppingScreen';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen name="GateManagement" component={GateManagement} />
      <Stack.Screen name="GuardAssignment" component={GuardAssignment} />
      <Stack.Screen name="Shopping" component={ShoppingScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return <MainStack />;
}
