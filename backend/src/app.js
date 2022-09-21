const express = require("express");
const app = express();

app.use(express.json());
const router = express.Router();

app.get("/", (req, res) => {
  try {
    return res.status(200).send("Hello World");
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.listen(5000, () => {
  console.log("listing on the port 5000");
});
