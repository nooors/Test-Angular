import { DoctorComponent } from "src/app/intermediate2/doctor/doctor.component";
import { ROUTES } from "./app.routes";

describe("Principal Routes", () => {
  it("Should exits the route /doctor/:id", () => {
    expect(ROUTES).toContain({
      path: "doctor/:id",
      component: DoctorComponent,
    });
  });
});
