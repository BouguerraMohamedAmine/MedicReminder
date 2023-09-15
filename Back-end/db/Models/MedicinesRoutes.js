const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Pill', 'Injection', 'Liquid'], // Define the allowed types
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  reminderTime: {
    type: String,
    required: true,
  },
  reminderDay: {
    type: String, // You can use a specific data type for days if needed
    required: true,
  },
  // You can add more fields as needed (e.g., user reference, timestamps, etc.)
});

// Create a Medication model
const Medication = mongoose.model('Medication', medicationSchema);

module.exports = Medication;
