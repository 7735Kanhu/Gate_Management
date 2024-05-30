import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';
import { Card, Divider, List } from 'react-native-paper';

const GateManagementScreen = () => {
  const [gates, setGates] = useState([]);
  const [gateName, setGateName] = useState('');
  const [numberOfGuards, setNumberOfGuards] = useState('');
  const [gateType, setGateType] = useState('Entry');
  const [shiftTime, setShiftTime] = useState('24 hours');
  const [selectedGateId, setSelectedGateId] = useState(null);

  const addGate = () => {
    const newGate = {
      id: gates.length + 1,
      name: gateName,
      guards: numberOfGuards,
      type: gateType,
      shiftTime: shiftTime,
    };
    setGates([...gates, newGate]);
    // Clear form fields
    clearForm();
  };

  const clearForm = () => {
    setGateName('');
    setNumberOfGuards('');
    setGateType('Entry');
    setShiftTime('24 hours');
  };

  const updateGate = () => {
    if (!selectedGateId) return;
    const updatedGates = gates.map((gate) => {
      if (gate.id === selectedGateId) {
        return {
          ...gate,
          name: gateName,
          guards: numberOfGuards,
          type: gateType,
          shiftTime: shiftTime,
        };
      }
      return gate;
    });
    setGates(updatedGates);
    clearForm();
    setSelectedGateId(null);
  };

  const deleteGate = (id) => {
    Alert.alert(
      'Delete Gate',
      'Are you sure you want to delete this gate?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            const updatedGates = gates.filter((gate) => gate.id !== id);
            setGates(updatedGates);
            clearForm();
            setSelectedGateId(null);
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#f0f0f0' }}>
      <Text style={{ fontSize: 24, marginBottom: 10, color: '#333' }}>Add / Update Gate</Text>
      <TextInput
        value={gateName}
        onChangeText={setGateName}
        placeholder="Gate Name"
        style={{ marginBottom: 10, backgroundColor: 'white', padding: 10 }}
      />
      <TextInput
        value={numberOfGuards}
        onChangeText={setNumberOfGuards}
        placeholder="Number of Guards"
        keyboardType="numeric"
        style={{ marginBottom: 10, backgroundColor: 'white', padding: 10 }}
      />
      <TextInput
        value={gateType}
        onChangeText={setGateType}
        placeholder="Gate Type"
        style={{ marginBottom: 10, backgroundColor: 'white', padding: 10 }}
      />
      <TextInput
        value={shiftTime}
        onChangeText={setShiftTime}
        placeholder="Shift Time"
        style={{ marginBottom: 10, backgroundColor: 'white', padding: 10 }}
      />
      <Button
        title={selectedGateId ? 'Update Gate' : 'Add Gate'}
        onPress={selectedGateId ? updateGate : addGate}
        color="#008080"
      />

      <Divider style={{ marginVertical: 20 }} />
      <Text style={{ fontSize: 24, marginBottom: 10, color: '#333' }}>Gate List</Text>
      <FlatList
        data={gates}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 10, backgroundColor: '#e0e0e0' }}>
            <Card.Content>
              <Text style={{ fontSize: 18 }}>{item.name}</Text>
              <List.Item title={`Number of Guards: ${item.guards}`} />
              <List.Item title={`Gate Type: ${item.type}`} />
              <List.Item title={`Shift Time: ${item.shiftTime}`} />
              <Button
                title="Edit"
                onPress={() => {
                  setSelectedGateId(item.id);
                  setGateName(item.name);
                  setNumberOfGuards(item.guards);
                  setGateType(item.type);
                  setShiftTime(item.shiftTime);
                }}
                color="#008080"
              />
              <Button
                title="Delete"
                onPress={() => deleteGate(item.id)}
                color="#FF0000"
              />
            </Card.Content>
          </Card>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default GateManagementScreen;
