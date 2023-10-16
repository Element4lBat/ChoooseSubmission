const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
app.use(cors());
const port = 9003;

const trips = JSON.parse(fs.readFileSync("./trips.json"));
const singleTrip = JSON.parse(fs.readFileSync("./single trip.json"));

app.get("/trips", (req, res) => {
  const row = req.query?.row || 0;
  const start = req.query?.start;
  const end = req.query?.end;
  if (start >= 0 && end > start) {
    res.send(trips.slice(start, end));
    return;
  }
  res.send(trips.slice(3 * row, 3 + 3 * row));
});

app.get("/trip/:id", (req, res) => {
  res.send(singleTrip);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
