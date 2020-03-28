import { Component, OnInit } from "@angular/core";
import { PatientService } from "../patient.service";
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

  constructor(private patientService: PatientService) {}

  getData() {
    this.listOfPatients = this.patientService.getPatients();
  }
  ngOnInit() {}
}
