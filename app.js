const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./config/db");
const questionsRoute = require("./routes/questions");
const Question = require("./models/question");
const cors = require("cors");

// Initialize Express app
const app = express();

// Connect to MongoDB
dbConnect();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/questions", questionsRoute);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  //   Question.insertMany([
  //     {
  //       topic: "Technology",
  //       question:
  //         "Which programming languages have you used in a professional or academic setting, and for how many years each?",
  //     },
  //     {
  //       topic: "Technology",
  //       question:
  //         "What types of projects have you worked on (e.g., web development, mobile apps, data analysis)?",
  //     },
  //     {
  //       topic: "Technology",
  //       question:
  //         "Can you give an example of a project where you collaborated with a team? What was your role?",
  //     },
  //     {
  //       topic: "Technology",
  //       question:
  //         "Have you ever contributed to open-source projects? If so, please describe your contributions.",
  //     },

  //     {
  //       topic: "Health",
  //       question:
  //         "How would you rate your current physical health and well-being? (Poor, Fair, Good)",
  //     },
  //     {
  //       topic: "Health",
  //       question:
  //         "How often do you engage in activities that promote mental health, such as meditation or hobbies? (Never, Rarely, Often)",
  //     },
  //     {
  //       topic: "Health",
  //       question:
  //         "Have you ever made significant changes to your lifestyle for health reasons? What prompted these changes and what was the outcome?",
  //     },
  //     {
  //       topic: "Health",
  //       question:
  //         "Do you follow any specific diet? If yes, then please elaborate.",
  //     },
  //     {
  //       topic: "Education",
  //       question:
  //         "Can you list the degrees or certifications you have obtained and the institutions where you earned them?",
  //     },
  //     {
  //       topic: "Education",
  //       question: "What were your major subjects or areas of specialization?",
  //     },
  //     {
  //       topic: "Education",
  //       question:
  //         "What are some subjects or skills you have learned on your own outside of formal education?",
  //     },
  //     {
  //       topic: "Education",
  //       question:
  //         "Have you received any scholarships, awards, or honors during your academic career?",
  //     },
  //   ]);
});
