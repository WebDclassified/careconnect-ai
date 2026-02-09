const Patient = require("../models/Patient");

exports.getAnalytics = async (req, res) => {

  const total = await Patient.countDocuments();

  const pending = await Patient.countDocuments({
    status: "Pending",
  });

  const resolved = await Patient.countDocuments({
    status: "Resolved",
  });

  const today = await Patient.countDocuments({
    createdAt: {
      $gte: new Date().setHours(0,0,0,0),
    },
  });

  res.json({
    total,
    pending,
    resolved,
    today,
  });
};
