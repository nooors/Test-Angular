import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DoctorsComponent } from "./spies/doctors.component";
import { DoctorComponent } from "./intermediate2/doctor/doctor.component";
import { HospitalComponent } from "./intermediate2/hospital/hospital.component";
import { IncreaserComponent } from "./intermediate2/increaser/increaser.component";
import { FormsModule } from "@angular/forms";
import { ROUTES } from "./advanced/routes/app.routes";
import { NavbarComponent } from "./advanced/navbar/navbar.component";
import { RouterDoctorComponent } from './advanced/router-doctor/router-doctor.component';

// import modules, declare components
@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    DoctorComponent,
    HospitalComponent,
    IncreaserComponent,
    NavbarComponent,
    RouterDoctorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
