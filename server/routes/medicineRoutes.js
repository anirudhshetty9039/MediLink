const express = require("express");

const router = express.Router();

const {
  createMedicine,
  getMedicines,
    dispenseMedicine,
} = require("../controllers/medicineController");

router.post("/", createMedicine);
router.get("/", getMedicines);
router.put("/:id/dispense", dispenseMedicine);

module.exports = router;