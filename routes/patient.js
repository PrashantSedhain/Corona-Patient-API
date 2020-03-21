const express = require("express");
const router = express.Router();
const {
  getPatient,
  getPatients,
  updatePatient,
  createPatient,
  deletePatient
} = require("../controllers/patient");

router
  .route("/")
  .get(getPatients)
  .post(createPatient);
router
  .route("/:id")
  .get(getPatient)
  .put(updatePatient)
  .delete(deletePatient);

module.exports = router;
