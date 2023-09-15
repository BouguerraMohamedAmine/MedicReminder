const Medication = require('../Models/MedicinesRoutes');

// Create a new medication
exports.createMedication = async (req, res) => {
  try {
    const medication = new Medication(req.body);
    await medication.save();
    res.status(201).json(medication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all medications
exports.getAllMedications = async (req, res) => {
  try {
    const medications = await Medication.find();
    res.status(200).json(medications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific medication by ID
exports.getMedicationById = async (req, res) => {
  try {
    const medication = await Medication.findById(req.params.id);
    if (!medication) {
      return res.status(404).json({ error: 'Medication not found' });
    }
    res.status(200).json(medication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a medication by ID
exports.updateMedication = async (req, res) => {
  try {
    const medication = await Medication.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!medication) {
      return res.status(404).json({ error: 'Medication not found' });
    }
    res.status(200).json(medication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a medication by ID
exports.deleteMedication = async (req, res) => {
  try {
    const medication = await Medication.findByIdAndRemove(req.params.id);
    if (!medication) {
      return res.status(404).json({ error: 'Medication not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
