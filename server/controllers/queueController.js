const Queue = require("../models/Queue");

const addToQueue = async (req, res) => {
  try {
    const count = await Queue.countDocuments();

    const queue = await Queue.create({
      patientId: req.body.patientId,
      tokenNumber: count + 1,
    });

    res.status(201).json(queue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQueue = async (req, res) => {
  try {
    const queue = await Queue.find()
      .populate("patientId")
      .sort({ tokenNumber: 1 });

    res.status(200).json(queue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateQueueStatus = async (req, res) => {
  try {
    const queue = await Queue.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      { new: true }
    );

    res.status(200).json(queue);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  addToQueue,
  getQueue,
  updateQueueStatus,
};

