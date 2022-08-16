import { HttpClientModule } from "@angular/common/http";
import { DoctorService } from "./doctor.service";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DoctorComponent } from "./doctor.component";

describe("Doctor Component", () => {
  let component: DoctorComponent;

  // Accesing component instansce, ts, html, css
  let fixture: ComponentFixture<DoctorComponent>;

  beforeEach(() => {
    // Configuring module and creating component
    TestBed.configureTestingModule({
      // Remember: you import modules and declare components
      declarations: [DoctorComponent],
      providers: [DoctorService],
      imports: [HttpClientModule],
    });

    fixture = TestBed.createComponent(DoctorComponent);
    component = fixture.componentInstance;
  });

  it("Should create component", () => {
    expect(component).toBeTruthy();
  });

  it("Should returns doctor name", () => {
    const name = "Rubén";
    const res = component.doctorGreetings(name);
    expect(res).toContain(name);
  });
});
