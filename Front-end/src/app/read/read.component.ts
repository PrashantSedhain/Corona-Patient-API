import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
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

  constructor(private _router: Router, private _route: ActivatedRoute) {}

  // getData() {}
  ngOnInit() {
    this.listOfPatients = this._route.snapshot.data['patientList'];
  }
}
