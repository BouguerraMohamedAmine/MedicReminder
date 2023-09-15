import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import MedicationItem from './MedicationItem';
import AddMedication from './AddMedication';


const HomePage = ({ navigation }) => {
  const [medications, setMedications] = useState([]);

  // Fetch medications from your database (MongoDB) here
  useEffect(() => {
    // Replace this with your API or database call
    const fetchedMedications = [
      { id: 1, name: 'Medication 1', type: 'Pill', dosage: '5mg', reminderTime: '10:00 AM' },
      { id: 2, name: 'Medication 2', type: 'Injection', dosage: '2ml', reminderTime: '2:00 PM' },
    ];
    setMedications(fetchedMedications);
  }, []);

  return (
    <View>
      <Text>Today's Intake:</Text>
      <FlatList
        data={medications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MedicationItem
            medication={item}
            onPress={() => navigation.navigate('MedicationDetails', { medication: item })}
          />
        )}
      />
      <Button
        title="Add Medication"
        onPress={() => navigation.navigate('AddMedication')}
      />
    </View>
  );
};

export default HomePage;
