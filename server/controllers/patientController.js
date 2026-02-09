const Patient = require("../models/Patient");

// Create request
exports.createPatient = async (req, res) => {
  const patient = await Patient.create(req.body);
  res.json(patient);
};

// Get all
exports.getPatients = async (req, res) => {
  const patients = await Patient.find().sort({ createdAt: -1 });
  res.json(patients);
};

// Update status
exports.updatePatient = async (req, res) => {
  const updated = await Patient.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updated);
};
