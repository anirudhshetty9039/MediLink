const express = require("express");

const router = express.Router();

const {
registerPatient,
getPatients,
 getPatientById,
 deletePatient
} = require("../controllers/patientController");

router.post("/", registerPatient);
router.get("/", getPatients);
router.get("/:id", getPatientById);
router.delete("/:id", deletePatient);
module.exports = router;
