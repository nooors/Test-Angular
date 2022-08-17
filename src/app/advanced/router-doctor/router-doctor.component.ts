import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-router-doctor",
  templateUrl: "./router-doctor.component.html",
  styleUrls: ["./router-doctor.component.css"],
})
export class RouterDoctorComponent implements OnInit {
  id!: string;

  constructor(public router: Router, public activated: ActivatedRoute) {}

  ngOnInit(): void {
    this.activated.params.subscribe((params) => {
      this.id = params["id"]; //new
    });
  }

  saveDoctor() {
    this.router.navigate(["doctor", "123"]);
  }
}
