import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MedicationItem = ({ medication, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>Name: {medication.name}</Text>
        <Text>Type: {medication.type}</Text>
        <Text>Dosage: {medication.dosage}</Text>
        <Text>Reminder Time: {medication.reminderTime}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MedicationItem;
