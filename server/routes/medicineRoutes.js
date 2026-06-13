const express = require("express");

const router = express.Router();

const {
  createMedicine,
  getMedicines,
    dispenseMedicine,
    deleteMedicine
} = require("../controllers/medicineController");

router.post("/", createMedicine);
router.get("/", getMedicines);
router.put("/:id/dispense", dispenseMedicine);
router.delete("/:id", deleteMedicine);

module.exports = router;