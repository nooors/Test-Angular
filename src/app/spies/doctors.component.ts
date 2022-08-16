import { Component, OnInit } from "@angular/core";
import { DoctorsService } from "./doctors.service";

@Component({
  selector: "app-medicos",
  template: ` <p>doctors works!</p> `,
  styles: [],
})
export class DoctorsComponent implements OnInit {
  public doctors: any[] = [];
  public errorMessage!: string;

  constructor(public _doctorsService: DoctorsService) {}

  ngOnInit() {
    this._doctorsService
      .getDoctors()
      .subscribe((doctors: any[]) => (this.doctors = doctors));
  }

  addDoctor() {
    const doctor = { nombre: "Doctor Juan Carlos" };

    // this._doctorsService.addDoctor(doctor).subscribe(
    //   (doctorDB: any) => this.doctors.push(doctorDB),
    //   (err: string) => (this.errorMessage = err),
    // );
    // All this is deprecated in this RxJS version

    this._doctorsService.addDoctor(doctor).subscribe({
      next: (doctorDB: any) => this.doctors.push(doctorDB),
      error: (err) => (this.errorMessage = err.message),
    });
  }

  deleteDoctor(id: string) {
    const confirmed = confirm("Are you sure you want to delete this doctor");

    if (confirmed) {
      this._doctorsService.deleteDoctor(id);
    }
  }
}
