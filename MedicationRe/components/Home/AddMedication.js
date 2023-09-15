import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const AddMedication = ({ navigation }) => {
  const [medicationName, setMedicationName] = useState('');
  const [medicationType, setMedicationType] = useState('');
  const [dosage, setDosage] = useState('');
  const [reminderTime, setReminderTime] = useState('');

  const handleAddMedication = () => {
    // Save the medication data to your database (MongoDB) here
    const newMedication = {
      name: medicationName,
      type: medicationType,
      dosage,
      reminderTime,
    };
    // Perform API/database call to save the new medication
    // After successful save, navigate back to the home page
    navigation.navigate('HomePage');
  };

const addMedication = async (medicationData) => {
  try {
    const response = await axios.post('http://your-api-server/api/medications', medicationData);
    return response.data;
  } catch (error) {
    console.error('Error adding medication:', error);
    throw error;
  }
};


  return (
    <View>
      <Text>Add Medication</Text>
      <TextInput
        placeholder="Medication Name"
        onChangeText={(text) => setMedicationName(text)}
      />
      <TextInput
        placeholder="Type (e.g., Pill, Injection)"
        onChangeText={(text) => setMedicationType(text)}
      />
      <TextInput
        placeholder="Dosage"
        onChangeText={(text) => setDosage(text)}
      />
      <TextInput
        placeholder="Reminder Time (e.g., 10:00 AM)"
        onChangeText={(text) => setReminderTime(text)}
      />
      <Button title="Add Medication" onPress={handleAddMedication} />
    </View>
  );
};

export default AddMedication;
