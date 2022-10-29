const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Api is running.");
});

app.get("/api/about", (req, res) => {
  res.status(200).json({
    slackUsername: "jessecrack",
    backend: true,
    age: 19,
    bio: "Hi 👋, I'm a backend dev who want to build digital experiences for the local church",
  });
});

const port = 4040;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
