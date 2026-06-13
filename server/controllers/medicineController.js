const Medicine = require("../models/Medicine");

const createMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.create(req.body);
    res.status(201).json(medicine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.status(200).json(medicines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const dispenseMedicine = async (req, res) => {
  try {
    const { quantity } = req.body;

    const medicine = await Medicine.findById(req.params.id);

    if (!medicine) {
      return res.status(404).json({
        message: "Medicine not found",
      });
    }

    if (medicine.quantity < quantity) {
      return res.status(400).json({
        message: "Insufficient stock",
      });
    }

    medicine.quantity -= quantity;

    await medicine.save();

    res.status(200).json(medicine);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createMedicine,
  getMedicines,
    dispenseMedicine,
};