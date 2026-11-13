
const express = require("express");
const os = require("os");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Containerized Web Application Running!",
    hostname: os.hostname(),
    processId: process.pid,
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
