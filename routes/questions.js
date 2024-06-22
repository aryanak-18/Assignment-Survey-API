const express = require("express");
const router = express.Router();
const Question = require("../models/question");

// GET /questions/:topic - Get survey questions by topic
router.get("/:topic", async (req, res) => {
  const topic = req.params.topic;

  // Validate topic
  const validTopics = ["Education", "Health", "Technology"];
  if (!validTopics.includes(topic)) {
    return res.status(400).json({ error: "Invalid topic" });
  }

  try {
    const questions = await Question.find({ topic });
    res.status(200).json({data: questions});
    // console.log(questions);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
