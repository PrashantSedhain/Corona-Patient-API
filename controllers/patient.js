const Patient = require("../models/Patient");

// @desc    Get all the patients
// @route   GET /api/v1/patient
// access    Public

exports.getPatients = (req, res, next) => {
  res.status(200).send("Hello from get");
};

// @desc    Get single the patients
// @route   GET /api/v1/patient/:id
// access    Public

exports.getPatient = (req, res, next) => {
  res.status(200).send("Hello from get one patient");
};

// @desc    create single patients
// @route   POST /api/v1/patient/
// access   Private

exports.createPatient = async (req, res, next) => {
  const patient = await Patient.create(req.body);
  res.status(201).json({ success: "True", data: patient });
};

// @desc    update single patients
// @route   PUT /api/v1/patient/:id
// access   Private

exports.updatePatient = (req, res, next) => {
  res.status(200).send("Hello from update");
};

// @desc    delete single patients
// @route   DELETE /api/v1/patient/:id
// access   Private

exports.deletePatient = (req, res, next) => {
  res.status(200).send("Hello from delete");
};
