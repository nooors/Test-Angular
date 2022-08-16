import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DoctorsComponent } from "./spies/doctors.component";
import { DoctorComponent } from "./intermediate2/doctor/doctor.component";
import { HospitalComponent } from "./intermediate2/hospital/hospital.component";
import { IncreaserComponent } from "./intermediate2/increaser/increaser.component";
import { FormsModule } from "@angular/forms";

// import modules, declare components
@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    DoctorComponent,
    HospitalComponent,
    IncreaserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
