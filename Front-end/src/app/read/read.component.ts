import { Component, OnInit } from "@angular/core";
import { PatientService } from "../patient.service";
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

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
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.css"]
})
export class ReadComponent implements OnInit {
  listOfPatients: Patient[];
  dataLoaded: boolean = false;

  constructor(private patientService: PatientService, private _snackBar: MatSnackBar, private router: Router) {}

  ngOnInit() {
    this.patientService.getPatients();

    setTimeout(() => {
      this.listOfPatients = this.patientService.listOfPatients;
      console.log(this.listOfPatients);
      this.dataLoaded = true;
    }, 1500);
  }

  editPatient(id: Number) {
    this.patientService.getInformationForUpdating(id);
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
    });
  }
  deletePatient(id: Number)
  {
    this.patientService.deletePatient(id);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/readPage']));
    this.openSnackBar("Deleted Successfully", "Done");
  }
}
