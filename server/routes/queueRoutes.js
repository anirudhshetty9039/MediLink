const express = require("express");

const router = express.Router();

const {
  addToQueue,
  getQueue,
  updateQueueStatus,
  deleteQueueEntry
} = require("../controllers/queueController");

router.post("/", addToQueue);
router.get("/", getQueue);
router.put("/:id", updateQueueStatus);
router.delete("/:id", deleteQueueEntry);


module.exports = router;