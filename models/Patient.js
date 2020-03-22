const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You must enter your full name"],
    trim: true,
    maxlength: [50, "Name cannot be more than 50 characters"]
  },
  gender: {
    type: String,
    required: [true, "Please enter your gender"]
  },
  age: {
    type: Number,
    max: 100,
    required: [true, "Please enter your age"]
  },
  ethnicity: {
    type: String,
    required: [true, "Please enter your race"]
  },
  slug: String,
  state: {
    type: String,
    required: [true, "Please enter your state"],
    maxlength: [20, "Not a valid state"]
  },
  hasRecentlyTraveled: {
    type: Boolean,
    required: [true, "Please insert if you have recently travelled or not."]
  },
  quarantinedPlaceName: {
    type: String,
    required: [
      true,
      "Please enter the name of place where the patient was quarantined."
    ]
  },
  hasRecovered: {
    type: Boolean,
    required: [true, "Please provide input if or not the patient recovered."]
  },
  numDaysQuarantined: {
    type: Number,
    required: [true, "Please enter number of days the patient was quarantined."]
  },
  nameOfHospitalVisited: {
    type: String,
    required: [true, "Please enter the hospital name if you visited any."]
  },
  dateInfectionReported: {
    type: String,
    required: [true, "Please enter the date when the infection was reported."]
  },
  isImmuneCompromised: {
    type: Boolean,
    required: [
      true,
      "Please enter if the patient was immune compromised or not."
    ]
  },
  listOfRecentContacts: {
    type: Array,
    required: [
      true,
      "Please provide name of person the patient recently had close contact with."
    ]
  }
});

module.exports = mongoose.model("Patient", PatientSchema);

// {
//   "name": "Prashant Sedhain",
//   "gender": "Male",
//   "age": 23,
//   "ethnicity": "Hindu",
//   "slug": "Don't know yet",
//   "state": "Texas",
//   "hasRecentlyTraveled": true,
//   "quarantinedPlaceName": "Chase Hill Apartments",
//   "hasRecovered": true,
//   "numDaysQuarantined": 22,
//   "nameOfHospitalVisited": "Teaching Hospital",
//   "dateInfectionReported": Date.now,
//   "isImmuneCompromised": false,
//   "listOfRecentContacts": ['Suman', 'Rajesh', 'Meera']
// }
