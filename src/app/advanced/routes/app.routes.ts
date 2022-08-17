import { Routes } from "@angular/router";

import { IncreaserComponent } from "../../intermediate2/increaser/increaser.component";
import { DoctorComponent } from "../../intermediate2/doctor/doctor.component";
import { HospitalComponent } from "../../intermediate2/hospital/hospital.component";

export const ROUTES: Routes = [
  { path: "hospital", component: HospitalComponent },
  { path: "doctor/:id", component: DoctorComponent },
  { path: "**", component: IncreaserComponent },
];
