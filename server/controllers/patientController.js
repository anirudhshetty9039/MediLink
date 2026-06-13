const Patient = require("../models/Patient");

const registerPatient = async (req, res) => {
try {
const patient = await Patient.create(req.body);


    res.status(201).json(patient);
} catch (error) {
    res.status(500).json({
        message: error.message,
    });
}


};

const getPatients = async (req, res) => {
try {
const patients = await Patient.find();


    res.status(200).json(patients);
} catch (error) {
    res.status(500).json({
        message: error.message,
    });
}


};

const getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);

        if (!patient) {
            return res.status(404).json({
                message: "Patient not found"
            });
        }

        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const deletePatient = async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Patient deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
registerPatient,
getPatients,
 getPatientById,
deletePatient
};
