const express = require("express");
const connectDatabase = require('../db/config');
const medicationRoutes = require('../db/Routes/MedicinesRoutes');
const PORT = 5000;
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

connectDatabase(); // Call the database connection function

app.use('/medications', medicationRoutes);


app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
