const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Hello from get");
});

router.get("/:id", (req, res) => {
  res.status(200).send("Hello from get one patient");
});

router.post("/", (req, res) => {
  res.status(200).send("Hello from create");
});

router.put("/:id", (req, res) => {
  res.status(200).send("Hello from update");
});

router.delete("/:id", (req, res) => {
  res.send("Trying to delete");
});

module.exports = router;
