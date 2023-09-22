const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.json([
    {
      name: "rahimm",
    },
    {
      name: "karim",
    },
    {
      name: "niam",
    },
    {
      name: "rahima",
    },
    {
      name: "ela",
    },
    {
      name: "kazal",
    },
    {
      name: "ohee",
    },
  ]);
});

app.listen(8000);
