const Patient = require("../models/Patient");
const Queue = require("../models/Queue");
const Medicine = require("../models/Medicine");

const getDashboardStats = async (req, res) => {
  try {
    const totalPatients = await Patient.countDocuments();
    const totalMedicines = await Medicine.countDocuments();

    const waitingPatients = await Queue.countDocuments({
      status: "waiting",
    });

    const completedPatients = await Queue.countDocuments({
      status: "completed",
    });

    res.json({
      totalPatients,
      totalMedicines,
      waitingPatients,
      completedPatients,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};