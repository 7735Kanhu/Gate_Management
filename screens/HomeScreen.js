import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Gate Management App</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Gate Management"
          onPress={() => navigation.navigate('GateManagement')}
          color="#3498db"
        />
        <Button
          title="Guard Assignment"
          onPress={() => navigation.navigate('GuardAssignment')}
          color="#2ecc71"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});
