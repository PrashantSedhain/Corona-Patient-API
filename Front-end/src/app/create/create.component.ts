import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  patientForm = this.fb.group({
    name: ["", Validators.required],
    gender: ["1", Validators.required],
    age: [0, Validators.required],
    ethnicity: ["", Validators.required],
    state: ["", Validators.required],
    hasRecentlyTraveled: ["", Validators.required],
    quarantinedPlaceName: ["", Validators.required],
    hasRecovered: [""],
    numDaysQuarantined: [0, Validators.required],
    nameOfHospitalVisited: ["", Validators.required],
    dateInfectionReported: ["", Validators.required],
    isImmuneCompromised: ["", Validators.required],
    listOfRecentContacts: ["", Validators.required]
  });
  states: Array<String> = [
    "Alaska",
    "Alabama",
    "Arkansas",
    "American Samoa",
    "Arizona",
    "California",
    "Colorado",
    "Connecticut",
    "District of Columbia",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Iowa",
    "Idaho",
    "Illinois",
    "Indiana",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Massachusetts",
    "Maryland",
    "Maine",
    "Michigan",
    "Minnesota",
    "Missouri",
    "Mississippi",
    "Montana",
    "North Carolina",
    " North Dakota",
    "Nebraska",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "Nevada",
    "New York",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Virginia",
    "Virgin Islands",
    "Vermont",
    "Washington",
    "Wisconsin",
    "West Virginia",
    "Wyoming"
  ];
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {}

  onSubmit() {
    if (this.patientForm.valid) {
      //Convert to JSON object for passing to the database.
      var patient_JSON = JSON.stringify(this.patientForm.value);
      console.log(patient_JSON);

      //Put it in the server here
      this.http
        .post("http://localhost:5000/api/v1/patient", patient_JSON)
        .subscribe(response => {
          console.log("repsonse ", response);
        });
    } else {
      console.warn("Form is invalid");
    }
  }
}
