import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


interface Patient {
  _id: Number;
  name: String;
  gender: String;
  age: String;
  ethnicity: String;
  state: String;
  hasRecentlyTraveled: String;
  quarantinedPlaceName: String;
  numDaysQuarantined: String;
  nameOfHospitalVisited: String;
  dateInfectionReported: String;
  isImmuneCompromised: String;
  listOfRecentContacts: String;
}
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  patientForm = this.fb.group({
    name: ["", Validators.required],
    gender: ["1", Validators.required],
    age: [0, Validators.required],
    ethnicity: ["", Validators.required],
    state: ["", Validators.required],
    hasRecentlyTraveled: ["", Validators.required],
    quarantinedPlaceName: ["", Validators.required],
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
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private patientService: PatientService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

    singlePatient: Patient;
    loading: boolean = true;
    // setValuesInFormField() {

    // }

  ngOnInit() {

    setTimeout(() => {
      this.singlePatient = this.patientService.singlePatient;
      this.patientForm.setValue({
        name: this.singlePatient.name,
        gender: this.singlePatient.gender,
        age: this.singlePatient.age,
        ethnicity: this.singlePatient.ethnicity,
        state: this.singlePatient.state,
        hasRecentlyTraveled: this.singlePatient.hasRecentlyTraveled,
        quarantinedPlaceName: this.singlePatient.quarantinedPlaceName,
        numDaysQuarantined: this.singlePatient.numDaysQuarantined,
        nameOfHospitalVisited: this.singlePatient.nameOfHospitalVisited,
        dateInfectionReported: this.singlePatient.dateInfectionReported,
        isImmuneCompromised: this.singlePatient.isImmuneCompromised,
        listOfRecentContacts: this.singlePatient.listOfRecentContacts,
        
      });
      this.loading = false;
    }, 1500)
    

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
    });
  }
  onSubmit() {
    this.patientService.updatePatient(this.patientForm, this.singlePatient._id);
    this.router.navigate(['/readPage']);
    this.openSnackBar("Patient updated successfully.", "Done");
  }

}
