import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DoctorService {
  constructor(public httpSrv: HttpClient) {}

  getDoctors() {
    return this.httpSrv.get("...").pipe(map((res: any) => res["doctors"]));
  }
}
