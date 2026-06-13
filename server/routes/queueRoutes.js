const express = require("express");

const router = express.Router();

const {
  addToQueue,
  getQueue,
  updateQueueStatus,
} = require("../controllers/queueController");

router.post("/", addToQueue);
router.get("/", getQueue);
router.put("/:id", updateQueueStatus);


module.exports = router;