import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { from, Observable } from "rxjs";
import { PatientService } from "./patient.service";

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

@Injectable()
export class PatientresolverService implements Resolve<Patient[]> {
  constructor(private patientService: PatientService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Patient[]> {
    return this.patientService.getPatients();
  }
}
