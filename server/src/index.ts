import express from "express";

const SERVER_PORT = 8000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from port 1000");
});

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
