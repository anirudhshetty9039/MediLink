const express = require("express");

const router = express.Router();

const {
registerPatient,
getPatients,
} = require("../controllers/patientController");

router.post("/", registerPatient);
router.get("/", getPatients);

module.exports = router;
