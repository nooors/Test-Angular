import { DoctorService } from "./doctor.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-doctor",
  templateUrl: "./doctor.component.html",
  styles: [],
})
export class DoctorComponent implements OnInit {
  public doctors: any[] = [];

  constructor(public _doctorSrv: DoctorService) {}

  ngOnInit(): void {}
  doctorGreetings(name: string) {
    return `Hello ${name}`;
  }

  getDoctors() {
    this._doctorSrv
      .getDoctors()
      .subscribe((doctors: any[]) => (this.doctors = doctors));
  }
}
