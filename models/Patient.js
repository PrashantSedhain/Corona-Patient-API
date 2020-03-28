const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You must enter your full name\n"],
    trim: true,
    unique: true,
    maxlength: [50, "Name cannot be more than 50 characters\n"]
  },
  gender: {
    type: String,
    required: [true, "Please enter your gender\n"]
  },
  age: {
    type: Number,
    max: 100,
    required: [true, "Please enter your age\n"]
  },
  ethnicity: {
    type: String,
    required: [true, "Please enter your race\n"]
  },
  state: {
    type: String,
    required: [true, "Please enter your state\n"],
    maxlength: [20, "Not a valid state"]
  },
  hasRecentlyTraveled: {
    type: String,
    required: [true, "Please insert if you have recently travelled or not.\n"]
  },
  quarantinedPlaceName: {
    type: String,
    required: [
      true,
      "Please enter the name of place where the patient was quarantined.\n"
    ]
  },
  numDaysQuarantined: {
    type: Number,
    required: [
      true,
      "Please enter number of days the patient was quarantined.\n"
    ]
  },
  nameOfHospitalVisited: {
    type: String,
    required: [true, "Please enter the hospital name if you visited any.\n"]
  },
  dateInfectionReported: {
    type: String,
    required: [true, "Please enter the date when the infection was reported.\n"]
  },
  isImmuneCompromised: {
    type: String,
    required: [
      true,
      "Please enter if the patient was immune compromised or not.\n"
    ]
  },
  listOfRecentContacts: {
    type: String,
    required: [
      true,
      "Please provide name of person the patient recently had close contact with.\n"
    ]
  }
});

module.exports = mongoose.model("Patient", PatientSchema);

// {
//   "name": "Adolfo Montero",
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
//   "dateInfectionReported": "6/7/2020",
//   "isImmuneCompromised": false,
//   "listOfRecentContacts": ["Suman", "Rajesh", "Meera"]
// }
