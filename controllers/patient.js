const Patient = require("../models/Patient");

// @desc    Get all the patients
// @route   GET /api/v1/patient
// access    Public

exports.getPatients = async (req, res, next) => {
  try {
    const patients = await Patient.find();
    res
      .status(200)
      .json({ success: true, count: patients.length, data: patients });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Get single the patients
// @route   GET /api/v1/patient/:id
// access    Public

exports.getPatient = async (req, res, next) => {
  try {
    const single_patient = await Patient.findById(req.params.id);
    if (single_patient === null) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: single_patient });
  } catch (err) {
    res.status(400).json({ success: false });
  }
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

exports.updatePatient = async (req, res, next) => {
  try {
    const patient = await Patient.findOneAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (patient) {
      return res.status(200).json({ success: true, data: patient });
    }
  } catch (err) {
    res.status(400).json({ success: false, msg: "Update Failed" });
  }
};

// @desc    delete single patients
// @route   DELETE /api/v1/patient/:id
// access   Private

exports.deletePatient = async (req, res, next) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) {
      return res.status(400).json({ success: false });
    }

    res.status(400).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false, msg: "Update Failed" });
  }
};
