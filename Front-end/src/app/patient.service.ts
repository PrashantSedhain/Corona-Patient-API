import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";
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

@Injectable({
  providedIn: "root"
})
export class PatientService {
  private patientUpdated = new Subject<Patient[]>();
  constructor(private http: HttpClient) {}

  //Array to store all the patient in the database.
  listOfPatients: Patient[];
  message: boolean;
  // URL for making api call.
  uri = "http://localhost:5000/api/v1/patient";

  headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  //Function to retrieve all the patients from the database.
  getPatients(): Patient[] {
    this.http
      .get<{
        message: boolean;
        data: Patient[];
      }>(this.uri)
      .subscribe(response => {
        this.listOfPatients = response.data;
        this.message = response.message;
        if (this.listOfPatients == null) {
          alert("Failed to retrieve patients.");
        }
      });

    if (this.message == true) {
      return this.listOfPatients;
    }
  }

  cretePatient(patientForm: any) {
    //Put it in the server here

    var patient_JSON = JSON.stringify(patientForm.value);

    this.http
      .post(this.uri, patient_JSON, { headers: this.headers })
      .subscribe(response => {
        if (response) {
          alert("Patient is successfully added to the database.");
        }
      });
  }
}
