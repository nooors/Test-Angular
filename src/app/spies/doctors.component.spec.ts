import { HttpClient, HttpHandler } from "@angular/common/http";
import { Observable, from, EMPTY, throwError } from "rxjs";
import { DoctorsComponent } from "./doctors.component";
import { DoctorsService } from "./doctors.service";

describe("DoctorsComponent", () => {
  let handler!: HttpHandler;
  let component: DoctorsComponent;

  // instance of the service. The constructor of the service needs a HttpHandler instance.
  const service = new DoctorsService(new HttpClient(handler));

  beforeEach(() => {
    // Initialize the component. Be aware of the constructor of the class
    component = new DoctorsComponent(service);
  });

  it("´Init: Should upload the doctors", () => {
    const doctors = ["doctor1", "doctor2", "doctor3"];

    // spies mock the service which is called in constructor so before onInit is shooted
    spyOn(service, "getDoctors").and.callFake(() => {
      // in the tutorial -> return Observable.from([doctors]) but in this
      // version of Angular(or RJXS) there is not need of bring Observable bc 'from' extends Observable
      // In fact it throws an error. So this is the way in these versions.
      return from([doctors]);
    });
    // |^ it sais: return an Observable from the array doctors.

    // calling the life-cycle onInit of the component
    component.ngOnInit();

    expect(component.doctors.length).toBeGreaterThan(0);
  });

  // In this test we are only interested in if the method is colled (does not matter what result it throws)
  it("Shoud call to server to add a doctor", () => {
    const spy = spyOn(service, "addDoctor").and.callFake((doctor) => {
      return EMPTY;
    });
    component.addDoctor();
    expect(spy).toHaveBeenCalled();
  });

  // Here we check if the method returns a value
  it("Should add a new doctor to doctors array", () => {
    const doctor = { id: 1, name: "Ernesto" };
    spyOn(service, "addDoctor").and.returnValue(from([doctor]));
    component.addDoctor();
    expect(component.doctors.indexOf(doctor)).toBeGreaterThanOrEqual(0);
  });
  // Checking errors in observable
  it("Should return errorMessage equal to the service error", () => {
    const myError = "Whatever error message you want to display";
    spyOn(service, "addDoctor").and.returnValue(
      throwError(() => {
        const error = new Error(myError);
        return error;
      }),
    );

    component.addDoctor();
    expect(component.errorMessage).toBe(myError);
  });

  // Mocking user confirms
  it("Should call to the server to delete a doctor", () => {
    // Mock the user accept to confirm
    spyOn(window, "confirm").and.returnValue(true);
    const spy = spyOn(service, "deleteDoctor").and.returnValue(EMPTY); // Not interested in value only in the call
    component.deleteDoctor("1");
    expect(spy).toHaveBeenCalledWith("1");
  });

  it("Should not call to the server to delete a doctor", () => {
    // Mock the user does not accept to confirm
    spyOn(window, "confirm").and.returnValue(false);
    const spy = spyOn(service, "deleteDoctor").and.returnValue(EMPTY); // Not interested in value only in the call
    component.deleteDoctor("1");
    expect(spy).not.toHaveBeenCalledWith("1");
  });
});
