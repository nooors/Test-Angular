import { from, Subject } from "rxjs";

import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RouterDoctorComponent } from "./router-doctor.component";

class FakeRouter {
  navigate(params: any) {}
}

class FakeActivatedRoute {
  // params: Observable<any> = EMPTY;
  private subject = new Subject<object>();

  push(value: any) {
    this.subject.next(value);
  }

  get params() {
    return this.subject.asObservable();
  }
}
xdescribe("RouterDoctorComponent", () => {
  let component: RouterDoctorComponent;
  let fixture: ComponentFixture<RouterDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterDoctorComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        {
          provide: ActivatedRoute,

          useValue: from([{ id: "new" }]),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should redirect to doctor when it is saved", () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, "navigate");

    component.saveDoctor();

    expect(spy).toHaveBeenCalledWith(["doctor", "123"]);
  });

  it("Should add id = new", () => {
    component = fixture.componentInstance;

    // const activatedRoute: FakeActivatedRoute = TestBed.inject(ActivatedRoute);

    // activatedRoute.push({ id: "new" });

    expect(component.id).toBe("new");
  });
});
