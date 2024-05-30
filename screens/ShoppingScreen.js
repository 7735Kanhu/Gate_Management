import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabScreen1 from './TabScreens/TabScreen1';
import TabScreen2 from './TabScreens/TabScreen2';
import TabScreen3 from './TabScreens/TabScreen3';
import TabScreen4 from './TabScreens/TabScreen4';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function ShoppingTabs() {
  return (
    <Tab.Navigator initialRouteName='Tab1' screenOptions={{ headerShown: false,tabBarShowLabel:false }} >
      <Tab.Screen name="Tab1" component={TabScreen1} options={{headerShown:false,tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home-filled" size={size} color="#808080"/>
          ),}}/>
      <Tab.Screen name="Tab2" component={TabScreen2} options={{tabBarIcon:({color,size})=>(
        <Feather name="grid" size={24} color="#808080" />
      ),}}/>
      <Tab.Screen name="Tab3" component={TabScreen3} options={{tabBarIcon:({color,size})=>(
        <Octicons name="bell" size={size} color="#808080" />
      ),}} />
      <Tab.Screen name="Tab4" component={TabScreen4} options={{tabBarIcon:({color,size})=>(
        <MaterialIcons name="person-outline" size={size} color="#808080" />
      ),}}/>
    </Tab.Navigator>
  );
}

const CustomHeader = ({ navigation }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
        {/* Left icon (optional) */}
        {/* Right icons */}
        <MaterialCommunityIcons
          name="chat-processing-outline"
          size={24}
          color="#808080"
          style={{ marginRight: 15 }}
          onPress={() => {
            // Do something when the notification icon is pressed
          }}
        />
        <Ionicons
          name="basket"
          size={24}
          color="#808080"
          onPress={() => {
            // Do something when the cart icon is pressed
          }}
        />
      </View>
    );
  };
  

export default function ShoppingScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Ushion" component={ShoppingTabs} options={{
          headerShown: true,
          headerTitleAlign: 'center', // Center align the header title
          headerRight: () => <CustomHeader />,
        }} />
    </Drawer.Navigator>
  );
}
