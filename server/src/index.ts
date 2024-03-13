import express from "express";
import cors from "cors";

const SERVER_PORT = 8000;
const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/register", (req, res) => {
  res.send("Hello World from port 1000");
});

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
