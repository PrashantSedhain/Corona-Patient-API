import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreateComponent } from "./create/create.component";
import { ReadComponent } from "./read/read.component";
import { UpdateComponent } from "./update/update.component";
import { DeleteComponent } from "./delete/delete.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatToolbarModule,
  MatInputModule,
  MatCheckboxModule,
  MatMenuModule,
  MatCardTitle,
  MatCardModule,
  MatGridListModule,
  MatRadioButton,
  MatRadioModule,
  MatDatepickerModule,
  MatProgressSpinnerModule,
  MatStepperModule,
  MatOptionModule,
  MatSelectModule,
  MatSnackBarModule,
  MatDialogModule,
  MatNativeDateModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatProgressBarModule,
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LayoutModule } from "@angular/cdk/layout";
import { CommonModule } from "@angular/common";
import { PatientresolverService } from "./patientresolver.service";
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatNativeDateModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    BrowserModule,
    MatCheckboxModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatProgressBarModule
    // ToastrModule.forRoot({
    //   timeOut: 3000,
    //   positionClass: "toast-top-center",
    //   preventDuplicates: true
    // })
  ],
  providers: [PatientresolverService],
  bootstrap: [AppComponent]
})
export class AppModule {}
