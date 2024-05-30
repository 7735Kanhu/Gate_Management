import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const GuardAssignmentScreen = () => {
  const [guardCode, setGuardCode] = useState('');
  const [selectedGate, setSelectedGate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [demoGates, setDemoGates] = useState([
    { id: 'gate1', name: 'Gate 1', assignedGuard: '' },
    { id: 'gate2', name: 'Gate 2', assignedGuard: '' },
    { id: 'gate3', name: 'Gate 3', assignedGuard: '' },
  ]);

  const assignGuard = () => {
    // Check if a guard is already assigned to the selected gate
    const assignedGate = demoGates.find((gate) => gate.assignedGuard === guardCode);
    if (assignedGate && assignedGate.id !== selectedGate) {
      Alert.alert('Error', 'This guard is already assigned to another gate.');
      return;
    }

    // Update the selected gate with the assigned guard's code
    const updatedGates = demoGates.map((gate) => {
      if (gate.id === selectedGate) {
        return { ...gate, assignedGuard: guardCode };
      }
      return gate;
    });

    // Update demoGates state with the updated gates
    setDemoGates(updatedGates);

    // Clear the input fields after assigning guard
    setGuardCode('');
    setSelectedGate('');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Assign Guard to Gate</Text>
      <TextInput
        value={guardCode}
        onChangeText={setGuardCode}
        placeholder="Guard Unique Code"
        style={{ marginBottom: 10, backgroundColor: '#f0f0f0', padding: 10 }}
      />
      <Picker
        selectedValue={selectedGate}
        onValueChange={(itemValue) => setSelectedGate(itemValue)}
        style={{ marginBottom: 10, backgroundColor: '#f0f0f0' }}
      >
        <Picker.Item label="Select Gate" value="" />
        {demoGates.map((gate) => (
          <Picker.Item key={gate.id} label={gate.name} value={gate.id} />
        ))}
      </Picker>
      <Button
        title="Assign Guard"
        onPress={assignGuard}
        disabled={!guardCode || !selectedGate}
      />
      {errorMessage ? <Text style={{ color: 'red', marginTop: 10 }}>{errorMessage}</Text> : null}
      <Text style={{ fontSize: 20, marginTop: 20 }}>Guard Assignment List</Text>
      <FlatList
        data={demoGates}
        renderItem={({ item }) => (
          <View style={{ marginTop: 10 }}>
            <Text>Gate: {item.name}</Text>
            <Text>Assigned Guard: {item.assignedGuard || 'None'}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default GuardAssignmentScreen;
