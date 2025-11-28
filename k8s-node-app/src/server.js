const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const message = process.env.APP_MESSAGE || "🚀 Node App Running on Kubernetes!";
  res.send(message);
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});