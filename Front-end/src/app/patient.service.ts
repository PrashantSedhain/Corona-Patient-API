import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject, Observable } from "rxjs";

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

  singlePatient: Patient;
  //Array to store all the patient in the database.
  listOfPatients: Patient[];
  message: boolean;
  // URL for making api call.
  uri = "http://localhost:5000/api/v1/patient";

  headers = new HttpHeaders({
    "Content-Type": "application/json"
  });
  

  //Function to retrieve all the patients from the database.
  getPatients() {
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
  }

  cretePatient(patientForm: any) {
    //Put it in the server here

    var patient_JSON = JSON.stringify(patientForm.value);

    this.http
      .post(this.uri, patient_JSON, { headers: this.headers })
      .subscribe(response => {
        if (response) {
          console.log("Patient added");
        }
      });
  }

  updatePatient (patientForm:any, _id: Number) {
    var patient_JSON = JSON.stringify(patientForm.value);
     this.http.put(`${this.uri}/${_id}`, patient_JSON, {headers: this.headers}).subscribe(response => {
      if(response)
      {
        console.log(response);
      }
    });

  }

  getInformationForUpdating(id: Number)
  {
    this.http.get<{
      message: boolean;
      data: Patient;
    }>(`${this.uri}/${id}`)
    .subscribe(response => {
      this.singlePatient = response.data;
      this.message = response.message;
      if (this.message == false) {
        alert("Failed to retrieve patients.");
      }
      else {
        console.log(this.singlePatient);
        return this.singlePatient;
      }
    });
  }

  deletePatient(id: Number) {
    this.http.delete<{message: boolean}>(`${this.uri}/${id}`).subscribe(response => {
      if(response.message == true) {
        console.log("Deleted successfully.")
      }
    });
  }
}
