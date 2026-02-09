const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    name: String,
    issue: String,
    location: String,
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", patientSchema);
